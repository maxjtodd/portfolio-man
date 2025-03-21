package learn.portfolio_man.data;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import learn.portfolio_man.models.Holding;

public class HoldingMapper implements RowMapper<Holding> {

    private StockMapper stockMapper = new StockMapper();

    @Override
    public Holding mapRow(ResultSet rs, int rsl) throws SQLException {
        Holding holding = new Holding();

        holding.setHoldingId(rs.getInt("holding_id"));
        holding.setPortfolioId(rs.getInt("portfolio_id"));
        holding.setStock(stockMapper.mapRow(rs, rsl));
        holding.setAmount(rs.getBigDecimal("amount"));

        return holding;
    }

    
}
