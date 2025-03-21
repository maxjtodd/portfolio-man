package learn.portfolio_man.models;

import java.math.BigDecimal;

public class Holding {

    private int holdingId;
    private int portfolioId;
    private Stock stock;
    private BigDecimal amount;

    public Holding() {
    }

    public Holding(int holdingId, int portfolioId, Stock stock, BigDecimal amount) {
        this.holdingId = holdingId;
        this.portfolioId = portfolioId;
        this.stock = stock;
        this.amount = amount;
    }

    public int getHoldingId() {
        return holdingId;
    }

    public void setHoldingId(int holdingId) {
        this.holdingId = holdingId;
    }

    public int getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(int portfolioId) {
        this.portfolioId = portfolioId;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
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
        result = prime * result + holdingId;
        result = prime * result + portfolioId;
        result = prime * result + ((stock == null) ? 0 : stock.hashCode());
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
        Holding other = (Holding) obj;
        if (holdingId != other.holdingId) {
            return false;
        }
        if (portfolioId != other.portfolioId) {
            return false;
        }
        if (stock == null) {
            if (other.stock != null) {
                return false;
            }
        } else if (!stock.equals(other.stock)) {
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
