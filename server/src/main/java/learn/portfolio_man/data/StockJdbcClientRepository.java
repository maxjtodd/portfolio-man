package learn.portfolio_man.data;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

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
        throw new UnsupportedOperationException("Unimplemented method 'getByTicker'");
    }

    @Override
    public Stock add(Stock toAdd) {
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

    
}
