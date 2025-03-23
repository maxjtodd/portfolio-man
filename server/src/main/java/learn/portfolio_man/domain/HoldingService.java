package learn.portfolio_man.domain;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.HoldingRepository;
import learn.portfolio_man.data.PortfolioRepository;
import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.models.Holding;
import learn.portfolio_man.models.Portfolio;
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

    public Result<List<Holding>> getPortfoliosHoldings(int portfolioId) {
        Result<List<Holding>> result = new Result<>();
        Portfolio portfolio = portfolioRepository.getPortfolioById(portfolioId);

        if (portfolio == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Portfolio not found");
            return result;
        } 

        List<Holding> holdings = holdingRepository.getAllHoldingsInPortfolio(portfolioId);
        result.setPayload(holdings);
        return result;
    }

    public Result<Holding> buy(Holding toBuy) {
        Result<Holding> result = validate(toBuy);
        if (!result.isSuccess()) {
            return result;
        }

        Holding existing = holdingRepository.getByTicker(toBuy.getStock().getTickerSymbol(), toBuy.getPortfolioId());

        Holding bought;
        if (existing == null) {
            bought = holdingRepository.add(toBuy);
        } else {
            existing.setAmount(existing.getAmount().add(toBuy.getAmount()));
            bought = holdingRepository.editAmount(existing);
        }

        if (bought == null) {
            result.addMessage(ResultStatus.INTERNAL_SERVER_ERROR, "Something went wrong buying");
        } else {
            result.setPayload(bought);
        }

        return result;
    }

    public Result<Holding> sell(Holding toSell) {
        Result<Holding> result = validate(toSell);
        if (!result.isSuccess()) {
            return result;
        }

        Holding existing = holdingRepository.getByTicker(toSell.getStock().getTickerSymbol(), toSell.getPortfolioId());
        if (existing == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Cannot sell a stock not owned by this portfolio");
            return result;
        }

        BigDecimal amountAfterSell = existing.getAmount().subtract(toSell.getAmount());
        if (amountAfterSell.compareTo(new BigDecimal(0)) < 0) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Cannot sell more than this portfolio owns");
        } else {
            existing.setAmount(amountAfterSell);
            if (amountAfterSell.compareTo(new BigDecimal(0)) == 0) {
                boolean deleted = holdingRepository.deleteById(existing.getHoldingId());
                if (!deleted) {
                    result.addMessage(ResultStatus.INTERNAL_SERVER_ERROR, "Something get wrong selling all");
                } else {
                    result.setPayload(existing);
                }
            } else {
                Holding holdingAfterSell = holdingRepository.editAmount(existing);
                if (holdingAfterSell == null) {
                    result.addMessage(ResultStatus.INTERNAL_SERVER_ERROR, "Something get wrong selling");
                } else {
                    result.setPayload(holdingAfterSell);
                }
            }
        }

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
