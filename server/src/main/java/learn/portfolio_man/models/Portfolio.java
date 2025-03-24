package learn.portfolio_man.models;

import java.math.BigDecimal;

public class Portfolio {

    private int portfolioId;
    private int userId;
    private String name;
    private BigDecimal balance;
    private boolean isPrivate;

    public Portfolio() {
    }

    public Portfolio(int portfolioId, int userId, String name, BigDecimal balance, boolean isPrivate) {
        this.portfolioId = portfolioId;
        this.userId = userId;
        this.name = name;
        this.balance = balance;
        this.isPrivate = isPrivate;
    }

    public int getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(int portfolioId) {
        this.portfolioId = portfolioId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean isPrivate) {
        this.isPrivate = isPrivate;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + portfolioId;
        result = prime * result + userId;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((balance == null) ? 0 : balance.hashCode());
        result = prime * result + (isPrivate ? 1231 : 1237);
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
        Portfolio other = (Portfolio) obj;
        if (portfolioId != other.portfolioId) {
            return false;
        }
        if (userId != other.userId) {
            return false;
        }
        if (name == null) {
            if (other.name != null) {
                return false;
            }
        } else if (!name.equals(other.name)) {
            return false;
        }
        if (balance == null) {
            if (other.balance != null) {
                return false;
            }
        } else if (!balance.equals(other.balance)) {
            return false;
        }
        if (isPrivate != other.isPrivate) {
            return false;
        }
        return true;
    }

}
