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

import learn.portfolio_man.domain.PortfolioService;
import learn.portfolio_man.models.Portfolio;
import learn.portfolio_man.models.Result;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private PortfolioService portfolioService;
    private SecretSigningKey signingKey;

    public PortfolioController(PortfolioService portfolioService, SecretSigningKey signingKey) {
        this.portfolioService = portfolioService;
        this.signingKey = signingKey;
    }


    @GetMapping("/{portfolioId}")
    public ResponseEntity<Object> getPortfolio(@PathVariable int portfolioId, @RequestHeader Map<String, String> headers) {

        // TODO: When friends are implemented, make sure that the user has permission to view
        Integer userId = signingKey.getUserIdFromAuthHeaders(headers);

        Result<Portfolio> result = portfolioService.getPortfolioById(portfolioId);

        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.OK);
    }


    @GetMapping("/myPortfolios")
    public ResponseEntity<Object> getUsersPortfolios(@RequestHeader Map<String, String> headers) {

        Integer userId = signingKey.getUserIdFromAuthHeaders(headers);
        
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Result<List<Portfolio>> result = portfolioService.getUsersPortfolios(userId.intValue());
        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<Object>(result.getPayload(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody Portfolio toAdd, @RequestHeader Map<String, String> headers) {

        Integer userId = signingKey.getUserIdFromAuthHeaders(headers);
        
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        // mismatching user id from auth to the userid in portfolio
        if (userId.intValue() != toAdd.getUserId()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        Result<Portfolio> result = portfolioService.add(toAdd);
        if (!result.isSuccess()) {
            return ControllerHelper.errorResultToResponseEntity(result);
        }

        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }
    
}
