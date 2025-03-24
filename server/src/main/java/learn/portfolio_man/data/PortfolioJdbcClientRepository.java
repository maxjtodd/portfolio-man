package learn.portfolio_man.data;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import learn.portfolio_man.models.Portfolio;

@Repository
public class PortfolioJdbcClientRepository implements PortfolioRepository {

    private final String SELECT = "SELECT portfolio_id, user_id, name, balance, private FROM portfolio ";

    private JdbcClient jdbcClient;

    public PortfolioJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public Portfolio getPortfolioById(int portfolioId) {
        final String sql = SELECT + "WHERE portfolio_id = ?;";

        return jdbcClient.sql(sql)
            .param(portfolioId)
            .query(new PortfolioMapper())
            .optional().orElse(null);
    }

    @Override
    public List<Portfolio> getUsersPortfolios(int userId) {
        final String sql = SELECT + "WHERE user_id = ?;";

        return jdbcClient.sql(sql)
            .param(userId)
            .query(new PortfolioMapper())
            .list();
    }

    @Override
    public List<Portfolio> getPublicPortfolios() {
        throw new UnsupportedOperationException("Unimplemented method 'getPublicPortfolios'");
    }

    @Override
    public List<Portfolio> getUserListsPortfolios(List<Integer> userIds) {
        throw new UnsupportedOperationException("Unimplemented method 'getUserListsPortfolios'");
    }

    @Override
    public Portfolio add(Portfolio portfolio) {
        final String sql = """
        INSERT INTO portfolio(user_id, name, balance, private) VALUES
            (:userId, :name, :balance, :private);
        """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowsEffected = jdbcClient.sql(sql)
            .param("userId", portfolio.getUserId())
            .param("name", portfolio.getName())
            .param("balance", portfolio.getBalance())
            .param("private", portfolio.isPrivate())
            .update(keyHolder);

        if (rowsEffected != 1) {
            return null;
        }

        portfolio.setPortfolioId(keyHolder.getKey().intValue());
        return portfolio;
    }

    @Override
    public Portfolio edit(Portfolio portfolio) {
        throw new UnsupportedOperationException("Unimplemented method 'edit'");
    }

    @Override
    public boolean delete(Portfolio portfolio) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
