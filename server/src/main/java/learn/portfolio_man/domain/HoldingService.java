package learn.portfolio_man.domain;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.HoldingRepository;
import learn.portfolio_man.data.PortfolioRepository;
import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;

@Service
public class HoldingService {

    private HoldingRepository holdingRepository;
    private PortfolioRepository portfolioRepository;
    private StockRepository stockRepository;

    public HoldingService(HoldingRepository holdingRepository, PortfolioRepository portfolioRepository,
            StockRepository stockRepository) {
        this.holdingRepository = holdingRepository;
        this.portfolioRepository = portfolioRepository;
        this.stockRepository = stockRepository;
    }


    public Result<Holding> buy(Holding toBuy) {
        Result<Holding> result = validate(toBuy);

        return result;
    }
    

    private Result<Holding> validate(Holding toValidate) {
        Result<Holding> result = new Result<>();
        
        if (toValidate == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Holding required");
            return result;
        }

        if (portfolioRepository.getPortfolioById(toValidate.getPortfolioId()) == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Portfolio not found");
        }

        validateStock(result, toValidate);

        if (toValidate.getAmount() == null || toValidate.getAmount().compareTo(new BigDecimal(0)) <= 0) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Amount required");
        }

        return result;
    }

    private void validateStock(Result<Holding> result, Holding toValidate) {

        if (toValidate.getStock() == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Stock required");
            return;
        }

        if (stockRepository.getById(toValidate.getStock().getStockId()) == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Stock not found");
        }
    }


}
