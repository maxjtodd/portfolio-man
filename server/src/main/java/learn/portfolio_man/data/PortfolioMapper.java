package learn.portfolio_man.data;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import learn.portfolio_man.models.Portfolio;

public class PortfolioMapper implements RowMapper<Portfolio> {

    @Override
    public Portfolio mapRow(ResultSet rs, int rsl) throws SQLException {
        Portfolio portfolio = new Portfolio();
        portfolio.setPortfolioId(rs.getInt("portfolio_id"));
        portfolio.setUserId(rs.getInt("user_id"));
        portfolio.setName(rs.getString("name"));
        BigDecimal balance = rs.getBigDecimal("balance");
        balance.setScale(2);
        portfolio.setBalance(balance);
        portfolio.setPrivate(rs.getBoolean("private"));
        return portfolio;
    }
    
}
