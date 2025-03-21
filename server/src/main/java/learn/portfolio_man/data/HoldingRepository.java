package learn.portfolio_man.data;

import java.util.List;

import learn.portfolio_man.models.Holding;

public interface HoldingRepository {

    public Holding getById(int holdingId);
    public Holding getByTicker(String ticker, int portfolioId);
    public List<Holding> getAllHoldingsInPortfolio(int portfolioId);

    public Holding add(Holding toAdd);

    public Holding editAmount(Holding toEdit);

    public boolean deleteById(int holdingId);
    
}
