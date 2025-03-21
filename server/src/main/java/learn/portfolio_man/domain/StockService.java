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
        return null;
    }
    
}
