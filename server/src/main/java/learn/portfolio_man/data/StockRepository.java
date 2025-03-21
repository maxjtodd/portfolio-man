package learn.portfolio_man.data;

import learn.portfolio_man.models.Stock;

public interface StockRepository {

    public Stock getById(int stockId);
    public Stock getByTicker(String ticker);

    public Stock add(Stock toAdd);

}
