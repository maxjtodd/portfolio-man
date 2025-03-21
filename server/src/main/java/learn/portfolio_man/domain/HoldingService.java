package learn.portfolio_man.domain;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.HoldingRepository;

@Service
public class HoldingService {

    private HoldingRepository holdingRepository;

    public HoldingService(HoldingRepository holdingRepository) {
        this.holdingRepository = holdingRepository;
    }

    
}
