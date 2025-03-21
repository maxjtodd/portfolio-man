package learn.portfolio_man.data;

import learn.portfolio_man.models.Holding;

public interface HoldingRepository {

    public Holding getById(int holdingId);
    public Holding getByTicker(String ticker);
    public Holding getAllHoldingsInPortfolio(int portfolioId);

    public Holding add(Holding toAdd);

    public Holding edit(Holding toEdit);

    public Holding delete(Holding toDelete);
    
}
