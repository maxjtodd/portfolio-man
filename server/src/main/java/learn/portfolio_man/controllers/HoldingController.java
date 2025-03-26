package learn.portfolio_man.controllers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import learn.portfolio_man.domain.HoldingService;
import learn.portfolio_man.domain.PortfolioService;
import learn.portfolio_man.domain.StockService;
import learn.portfolio_man.domain.YahooFinance;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.HoldingRequest;
import learn.portfolio_man.models.Portfolio;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.Stock;
import learn.portfolio_man.models.YahooFinance.CurrentPrice;
import learn.portfolio_man.models.YahooFinance.PriceHistory;
import learn.portfolio_man.models.YahooFinance.SearchResult;
import learn.portfolio_man.models.YahooFinance.StockProfile;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/holding")
public class HoldingController {

    private HoldingService holdingService;
    private PortfolioService portfolioService;
    private StockService stockService;
    private SecretSigningKey secretSigningKey;
    private YahooFinance yahooFinance;

    public HoldingController(HoldingService holdingService, PortfolioService portfolioService,
            StockService stockService, SecretSigningKey secretSigningKey, YahooFinance yahooFinance) {
        this.holdingService = holdingService;
        this.portfolioService = portfolioService;
        this.stockService = stockService;
        this.secretSigningKey = secretSigningKey;
        this.yahooFinance = yahooFinance;
    }

    @GetMapping("/{portfolioId}")
    public ResponseEntity<Object> getPortfolioHoldings(@PathVariable int portfolioId, @RequestHeader Map<String, String> headers) {

        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        // TODO: make sure that the user has authority to access the portfolio

        Result<List<Holding>> result = holdingService.getPortfoliosHoldings(portfolioId);
        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.OK);
    }

    @PostMapping("/buy")
    public ResponseEntity<Object> buy(@RequestBody HoldingRequest holdingRequest, @RequestHeader Map<String, String> headers) {

        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Result<Portfolio> portfolioResult = portfolioService.getPortfolioById(holdingRequest.getPortfolioId());
        if (!portfolioResult.isSuccess()) {
            ControllerHelper.errorMessageResponse(HttpStatus.NOT_FOUND, "Portfolio not found");
        }
        BigDecimal currentBalance = portfolioResult.getPayload().getBalance();

        BigDecimal currentPrice = yahooFinance.getCurrentPrice(holdingRequest.getTicker()).getCurrentPrice();

        Holding toBuy = holdingRequestToHolding(holdingRequest);
        Result<Holding> boughtResult = holdingService.buy(toBuy, currentPrice, currentBalance);

        if (!boughtResult.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(boughtResult);
        }

        BigDecimal balanceAfterBuy = currentBalance.subtract(currentPrice.multiply(holdingRequest.getAmount())).setScale(2, RoundingMode.HALF_UP);

        Portfolio newPortfolio = portfolioResult.getPayload();
        newPortfolio.setBalance(balanceAfterBuy);

        Result<Portfolio> editBalanceResult = portfolioService.edit(newPortfolio);
        if (!editBalanceResult.isSuccess()) {
            ControllerHelper.errorMessageResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Balance not updated");
        }

        return new ResponseEntity<>(boughtResult.getPayload(), HttpStatus.OK);
    }
    
    @PostMapping("/sell")
    public ResponseEntity<Object> sell(@RequestBody HoldingRequest holdingRequest, @RequestHeader Map<String, String> headers) {

        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Result<Portfolio> portfolioResult = portfolioService.getPortfolioById(holdingRequest.getPortfolioId());
        if (!portfolioResult.isSuccess()) {
            return ControllerHelper.errorMessageResponse(HttpStatus.NOT_FOUND, "Portfolio not found");
        }

        BigDecimal currentBalance = portfolioResult.getPayload().getBalance();
        BigDecimal currentPrice = yahooFinance.getCurrentPrice(holdingRequest.getTicker()).getCurrentPrice();


        Holding toSell = holdingRequestToHolding(holdingRequest);
        Result<Holding> boughtResult = holdingService.sell(toSell);

        if (!boughtResult.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(boughtResult);
        }

        BigDecimal balanceAfterSell = currentBalance.add(holdingRequest.getAmount().multiply(currentPrice)).setScale(2, RoundingMode.HALF_UP);

        Portfolio newPortfolio = portfolioResult.getPayload();
        newPortfolio.setBalance(balanceAfterSell);

        Result<Portfolio> editBalanceResult = portfolioService.edit(newPortfolio);
        if (!editBalanceResult.isSuccess()) {
            ControllerHelper.errorMessageResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Balance not updated");
        }

        return new ResponseEntity<>(boughtResult.getPayload(), HttpStatus.OK);
    }

    @GetMapping("/search/{ticker}")
    public ResponseEntity<Object> searchTicker(@PathVariable String ticker, @RequestHeader Map<String, String> headers) {
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }


        return null;
    }

    @GetMapping("/test/{t}")
    public ResponseEntity<Object> test(@PathVariable String t) {
        CurrentPrice cp = yahooFinance.getCurrentPrice(t);
        return new ResponseEntity<>(cp, HttpStatus.OK);
    }

    private Holding holdingRequestToHolding(HoldingRequest toConvert) {
        Holding holding = new Holding();
        holding.setHoldingId(0);
        holding.setAmount(toConvert.getAmount());
        holding.setPortfolioId(toConvert.getPortfolioId());
        Result<Stock> result = stockService.getByTicker(toConvert.getTicker());
        Stock stock = null;
        if (!result.isSuccess()) {
            // Stock not found, look up stock and attempt to add. If not found, error, else set the proper fields.
            SearchResult sr = yahooFinance.searchSpecificStock(toConvert.getTicker());
            if (sr == null) {
                return null;
            }

            Stock toAdd = new Stock(0, toConvert.getTicker(), sr.getLongname());
            Result<Stock> addResult = stockService.add(toAdd);
            if (addResult.isSuccess()) {
                stock = addResult.getPayload();
            } else {
                return null;
            }

        } else {
            stock = result.getPayload();
        }
        holding.setStock(stock);
        return holding;
    }
    
}
