package learn.portfolio_man.controllers;

import java.util.Map;

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
import learn.portfolio_man.models.Stock;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/stock")
public class StockController {

    private StockService stockService;
    private SecretSigningKey secretSigningKey;

    public StockController(StockService stockService, SecretSigningKey secretSigningKey) {
        this.stockService = stockService;
        this.secretSigningKey = secretSigningKey;
    }

    @GetMapping("/id/{stockId}")
    public ResponseEntity<Object> getStockById(@PathVariable int stockId) {
        return null;
    }

    @GetMapping("/{ticker}")
    public ResponseEntity<Object> getStockByTicker(@PathVariable String ticker) {
        return null;
    }

    @PostMapping
    public ResponseEntity<Object> createStock(@RequestBody Stock toAdd, @RequestHeader Map<String, String> headers) {
        return null;
    }
    
}
