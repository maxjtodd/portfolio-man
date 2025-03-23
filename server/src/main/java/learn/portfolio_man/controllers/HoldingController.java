package learn.portfolio_man.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import learn.portfolio_man.domain.HoldingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/holding")
public class HoldingController {

    private HoldingService holdingService;
    private SecretSigningKey secretSigningKey;

    public HoldingController(HoldingService holdingService, SecretSigningKey secretSigningKey) {
        this.holdingService = holdingService;
        this.secretSigningKey = secretSigningKey;
    }

    @GetMapping("/{portfolioId}")
    public ResponseEntity<Object> getPortfolioHoldings(@PathVariable int portfolioId, @RequestHeader Map<String, String> headers) {
        Integer userId = secretSigningKey.getUserIdFromAuthHeaders(headers);


        return null;
    }
    

    
}
