package learn.portfolio_man.data;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import learn.portfolio_man.models.Stock;

@Repository
public class StockJdbcClientRepository implements StockRepository {

    private final String SELECT = "SELECT stock_id, ticker_symbol FROM stock ";

    private JdbcClient jdbcClient;

    public StockJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public Stock getById(int stockId) {
        final String sql = SELECT + "WHERE stock_id = ?;";

        return jdbcClient.sql(sql)
            .param(stockId)
            .query(new StockMapper())
            .optional().orElse(null);
    }

    @Override
    public Stock getByTicker(String ticker) {
        final String sql = SELECT + "WHERE ticker_symbol = ?;";

        return jdbcClient.sql(sql)
            .param(ticker)
            .query(new StockMapper())
            .optional().orElse(null);
    }

    @Override
    public Stock add(Stock toAdd) {
        final String sql = "insert into stock(ticker_symbol) values (?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowsAffected = jdbcClient.sql(sql)
            .param(toAdd.getTickerSymbol())
            .update(keyHolder);

        if (rowsAffected != 1) {
            return null;
        }

        toAdd.setStockId(keyHolder.getKey().intValue());
        return toAdd;
    }

    
}
