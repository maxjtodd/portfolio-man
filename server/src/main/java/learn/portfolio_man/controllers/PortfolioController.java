package learn.portfolio_man.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import learn.portfolio_man.domain.PortfolioService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    private PortfolioService portfolioService;

    public PortfolioService getPortfolioService() {
        return portfolioService;
    }

    @GetMapping("/myPortfolios")
    public ResponseEntity<Object> getUsersPortfolios() {
        return null;
    }

    @PostMapping
    public ResponseEntity<Object> create() {
        return null;
    }
    
}
