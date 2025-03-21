package learn.portfolio_man.data;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import learn.portfolio_man.models.Holding;

@Repository
public class HoldingJdbcClientRepository implements HoldingRepository {

    private final String SELECT = """
    SELECT h.holding_id, h.portfolio_id, h.amount,
        s.stock_id, s.ticker_symbol, s.company_name
    FROM holding AS h
    JOIN stock AS s ON s.stock_id = h.stock_id 
    """;

    private JdbcClient jdbcClient;

    public HoldingJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public Holding getById(int holdingId) {
        final String sql = SELECT + "WHERE h.holding_id = ?;";
        return jdbcClient.sql(sql)
            .param(holdingId)
            .query(new HoldingMapper())
            .optional().orElse(null);
    }

    @Override
    public Holding getByTicker(String ticker, int portfolioId) {
        final String sql = SELECT + "WHERE s.ticker_symbol = :ticker AND h.portfolio_id = :pid;";
        return jdbcClient.sql(sql)
            .param("ticker", ticker)
            .param("pid", portfolioId)
            .query(new HoldingMapper())
            .optional().orElse(null);
    }

    @Override
    public List<Holding> getAllHoldingsInPortfolio(int portfolioId) {
        final String sql = SELECT + "WHERE h.portfolio_id = ?;";
        return jdbcClient.sql(sql)
            .param(portfolioId)
            .query(new HoldingMapper())
            .list();
    }

    @Override
    public Holding add(Holding toAdd) {
        final String sql = """
        INSERT INTO holding(portfolio_id, stock_id, amount) VALUES
            (:pid, :sid, :amt);
        """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowsAffected = jdbcClient.sql(sql)
            .param("pid", toAdd.getPortfolioId())
            .param("sid", toAdd.getStock().getStockId())
            .param("amt", toAdd.getAmount())
            .update(keyHolder);

        if (rowsAffected != 1) {
            return null;
        }

        toAdd.setHoldingId(keyHolder.getKey().intValue());
        return toAdd;
    }

    @Override
    public Holding editAmount(Holding toEdit) {
        final String sql = """
        UPDATE holding SET 
            amount = :amt
        WHERE holding_id = :id;
        """;

        boolean edited = jdbcClient.sql(sql)
            .param("amt", toEdit.getAmount())
            .param("id", toEdit.getHoldingId())
            .update() > 0;

        return edited ? toEdit : null;
    }

    @Override
    public Holding delete(Holding toDelete) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    
}
