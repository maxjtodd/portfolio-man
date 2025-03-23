package learn.portfolio_man.models;

import java.math.BigDecimal;

public class HoldingRequest {

    private int portfolioId;
    private String ticker;
    private BigDecimal amount;

    public HoldingRequest() {
    }

    public HoldingRequest(int portfolioId, String ticker, BigDecimal amount) {
        this.portfolioId = portfolioId;
        this.ticker = ticker;
        this.amount = amount;
    }

    public int getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(int portfolioId) {
        this.portfolioId = portfolioId;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + portfolioId;
        result = prime * result + ((ticker == null) ? 0 : ticker.hashCode());
        result = prime * result + ((amount == null) ? 0 : amount.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        HoldingRequest other = (HoldingRequest) obj;
        if (portfolioId != other.portfolioId) {
            return false;
        }
        if (ticker == null) {
            if (other.ticker != null) {
                return false;
            }
        } else if (!ticker.equals(other.ticker)) {
            return false;
        }
        if (amount == null) {
            if (other.amount != null) {
                return false;
            }
        } else if (!amount.equals(other.amount)) {
            return false;
        }
        return true;
    }
    
}
