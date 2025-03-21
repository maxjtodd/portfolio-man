package learn.portfolio_man.domain;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.ResultStatus;
import learn.portfolio_man.models.Stock;

@Service
public class StockService {

    private StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Result<Stock> getById(int stockId) {
        Result<Stock> result = new Result<>();
        Stock fetchedStock = stockRepository.getById(stockId);
        if (fetchedStock == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Stock not found");
        } else {
            result.setPayload(fetchedStock);
        }

        return result;
    }

    public Result<Stock> getByTicker(String tickerSymbol) {
        Result<Stock> result = new Result<>();
        Stock fetchedStock = stockRepository.getByTicker(tickerSymbol);
        if (fetchedStock == null) {
            result.addMessage(ResultStatus.NOT_FOUND, "Stock not found");
        } else {
            result.setPayload(fetchedStock);
        }

        return result;
    }

    public Result<Stock> add(Stock toAdd) {
        Result<Stock> result = validate(toAdd);

        if (result.isSuccess()) {
            Stock added = stockRepository.add(toAdd);
            if (added == null) {
                result.addMessage(ResultStatus.INTERNAL_SERVER_ERROR, "Something went wrong");
            } else {
                result.setPayload(added);
            }
        }

        return result;
    }


    private Result<Stock> validate(Stock toValidate) {
        Result<Stock> result = new Result<>();

        if (toValidate == null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Stock is required");
            return result;
        }

        if (toValidate.getTickerSymbol() == null || toValidate.getTickerSymbol().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Ticker is required");
            return result;
        }

        if (stockRepository.getByTicker(toValidate.getTickerSymbol()) != null) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Stock already exists");
        }

        if (toValidate.getCompanyName() == null || toValidate.getCompanyName().isBlank()) {
            result.addMessage(ResultStatus.BAD_REQUEST, "Company name is required");
            return result;
        }

        return result;
    }

}
