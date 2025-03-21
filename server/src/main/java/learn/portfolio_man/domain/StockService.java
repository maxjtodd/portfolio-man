package learn.portfolio_man.domain;

import org.springframework.stereotype.Service;

import learn.portfolio_man.data.StockRepository;
import learn.portfolio_man.models.Result;
import learn.portfolio_man.models.Stock;

@Service
public class StockService {

    private StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Result<Stock> getById(int stockId) {
        return null;
    }

    public Result<Stock> getByTickerSymbol(String tickerSymbol) {
        return null;
    }

    public Result<Stock> add(Stock toAdd) {
        return null;
    }
    
}
