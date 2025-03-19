package learn.portfolio_man.data;

import java.util.List;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import learn.portfolio_man.models.Portfolio;

@Repository
public class PortfolioJdbcClientRepository implements PortfolioRepository {

    private final String SELECT = "SELECT portfolio_id, user_id, name, private FROM portfolio ";

    private JdbcClient jdbcClient;

    public PortfolioJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
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
    public Portfolio create(Portfolio portfolio) {
        throw new UnsupportedOperationException("Unimplemented method 'create'");
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
