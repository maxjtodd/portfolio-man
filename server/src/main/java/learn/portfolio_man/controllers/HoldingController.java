package learn.portfolio_man.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import learn.portfolio_man.domain.HoldingService;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.Result;

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
    

    
}
