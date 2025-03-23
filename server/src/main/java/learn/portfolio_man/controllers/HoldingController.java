package learn.portfolio_man.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
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


    
}
