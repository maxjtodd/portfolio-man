package learn.portfolio_man.data;

import java.util.List;

import learn.portfolio_man.models.Portfolio;

public interface PortfolioRepository {

    public Portfolio getPortfolioById(int portfolioId);
    public List<Portfolio> getUsersPortfolios(int userId);
    public List<Portfolio> getPublicPortfolios();
    public List<Portfolio> getUserListsPortfolios(List<Integer> userIds);

    public Portfolio add(Portfolio portfolio);

    public Portfolio edit(Portfolio portfolio);

    public boolean delete(Portfolio portfolio);
    
}
