package learn.portfolio_man.controllers;

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
import learn.portfolio_man.domain.StockService;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.HoldingRequest;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.Stock;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/holding")
public class HoldingController {

    private HoldingService holdingService;
    private StockService stockService;
    private SecretSigningKey secretSigningKey;

    public HoldingController(HoldingService holdingService, StockService stockService,
            SecretSigningKey secretSigningKey) {
        this.holdingService = holdingService;
        this.stockService = stockService;
        this.secretSigningKey = secretSigningKey;
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

        // TODO: make sure enough portfolio balance
        Holding toBuy = holdingRequestToHolding(holdingRequest);
        Result<Holding> boughtResult = holdingService.buy(toBuy);

        if (!boughtResult.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(boughtResult);
        }

        return new ResponseEntity<>(boughtResult.getPayload(), HttpStatus.OK);
    }
    
    @PostMapping("/sell")
    public ResponseEntity<Object> sell(@RequestBody HoldingRequest holdingRequest, @RequestHeader Map<String, String> headers) {

        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Holding toSell = holdingRequestToHolding(holdingRequest);
        Result<Holding> boughtResult = holdingService.sell(toSell);

        if (!boughtResult.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(boughtResult);
        }

        return new ResponseEntity<>(boughtResult.getPayload(), HttpStatus.OK);
    }

    @GetMapping("/search/{ticker}")
    public ResponseEntity<Object> searchTicker(@PathVariable ticker, @RequestHeader Map<String, String> headers) {
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }


        return null;
    }

    private Holding holdingRequestToHolding(HoldingRequest toConvert) {
        Holding holding = new Holding();
        holding.setHoldingId(0);
        holding.setAmount(toConvert.getAmount());
        holding.setPortfolioId(toConvert.getPortfolioId());
        Result<Stock> result = stockService.getByTicker(toConvert.getTicker());
        Stock stock = null;
        if (!result.isSuccess()) {
            // TODO: Add stock to DB through yahoo finance api call for searching
        } else {
            stock = result.getPayload();
        }
        holding.setStock(stock);
        return holding;
    }
    
}
