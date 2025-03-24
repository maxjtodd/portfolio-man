package learn.portfolio_man.controllers;

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

import learn.portfolio_man.domain.StockService;
import learn.portfolio_man.domain.YahooFinance;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.Stock;
import learn.portfolio_man.models.YahooFinance.PriceHistory;
import learn.portfolio_man.models.YahooFinance.Search;
import learn.portfolio_man.models.YahooFinance.SearchResult;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/stock")
public class StockController {

    private StockService stockService;
    private SecretSigningKey secretSigningKey;
    private YahooFinance yahooFinance;

    public StockController(StockService stockService, SecretSigningKey secretSigningKey, YahooFinance yahooFinance) {
        this.stockService = stockService;
        this.secretSigningKey = secretSigningKey;
        this.yahooFinance = yahooFinance;
    }

    @GetMapping("/id/{stockId}")
    public ResponseEntity<Object> getStockById(@PathVariable int stockId) {
        Result<Stock> result = stockService.getById(stockId);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.OK);
    }

    @GetMapping("/{ticker}")
    public ResponseEntity<Object> getStockByTicker(@PathVariable String ticker) {
        Result<Stock> result = stockService.getByTicker(ticker);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.OK);
    }

    @GetMapping("/search/{ticker}")
    public ResponseEntity<Object> search(@PathVariable String ticker, @RequestHeader Map<String, String> headers) {
        
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);

        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Search searchResult = yahooFinance.search(ticker);
        if (searchResult.getBody() == null) {
            return ControllerHelper.errorMessageResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong searching");
        }

        return new ResponseEntity<>(searchResult.getBody(), HttpStatus.OK);
    }


    @GetMapping("/searchOne/{ticker}")
    public ResponseEntity<Object> searchOne(@PathVariable String ticker, @RequestHeader Map<String, String> headers) {
        
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);

        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        SearchResult searchResult = yahooFinance.searchSpecificStock(ticker);
        if (searchResult == null) {
            return ControllerHelper.errorMessageResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong searching");
        }

        return new ResponseEntity<>(searchResult, HttpStatus.OK);
    }

    @GetMapping("/priceHistory/{ticker}")
    public ResponseEntity<Object> getPriceHistory(@PathVariable String ticker, @RequestHeader Map<String, String> headers) {
        
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);

        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        PriceHistory searchResult = yahooFinance.getPriceHistory(ticker);
        if (searchResult == null) {
            return ControllerHelper.errorMessageResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong searching");
        }

        return new ResponseEntity<>(searchResult, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> createStock(@RequestBody Stock toAdd, @RequestHeader Map<String, String> headers) {
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);

        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Result<Stock> result = stockService.add(toAdd);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }
    
}
