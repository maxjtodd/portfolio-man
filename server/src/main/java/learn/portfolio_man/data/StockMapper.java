package learn.portfolio_man.data;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import learn.portfolio_man.models.Stock;

public class StockMapper implements RowMapper<Stock> {

    @Override
    public Stock mapRow(ResultSet rs, int rsl) throws SQLException {
        Stock stock = new Stock();
        stock.setStockId(rs.getInt("stock_id"));
        stock.setTickerSymbol(rs.getString("ticker_symbol"));
        return stock;
    }

    
}
