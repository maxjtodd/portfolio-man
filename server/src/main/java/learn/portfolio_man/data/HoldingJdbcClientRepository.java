package learn.portfolio_man.data;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import learn.portfolio_man.models.Holding;

@Repository
public class HoldingJdbcClientRepository implements HoldingRepository {

    private JdbcClient jdbcClient;

    public HoldingJdbcClientRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    @Override
    public Holding getById(int holdingId) {
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public Holding getByTicker(String ticker) {
        throw new UnsupportedOperationException("Unimplemented method 'getByTicker'");
    }

    @Override
    public Holding getAllHoldingsInPortfolio(int portfolioId) {
        throw new UnsupportedOperationException("Unimplemented method 'getAllHoldingsInPortfolio'");
    }

    @Override
    public Holding add(Holding toAdd) {
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

    @Override
    public Holding edit(Holding toEdit) {
        throw new UnsupportedOperationException("Unimplemented method 'edit'");
    }

    @Override
    public Holding delete(Holding toDelete) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    
}
