package learn.portfolio_man.data;

import java.util.List;

import learn.portfolio_man.models.Portfolio;

public class PortfolioJdbcClientRepository implements PortfolioRepository {

    @Override
    public List<Portfolio> getUsersPortfolios(int userId) {
        throw new UnsupportedOperationException("Unimplemented method 'getUsersPortfolios'");
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
