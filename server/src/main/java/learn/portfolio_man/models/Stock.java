package learn.portfolio_man.models;

public class Stock {

    private int stockId;
    private String tickerSymbol;
    private String companyName;

    public Stock() {
    }

    public Stock(int stockId, String tickerSymbol, String companyName) {
        this.stockId = stockId;
        this.tickerSymbol = tickerSymbol;
        this.companyName = companyName;
    }

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public String getTickerSymbol() {
        return tickerSymbol;
    }

    public void setTickerSymbol(String tickerSymbol) {
        this.tickerSymbol = tickerSymbol;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + stockId;
        result = prime * result + ((tickerSymbol == null) ? 0 : tickerSymbol.hashCode());
        result = prime * result + ((companyName == null) ? 0 : companyName.hashCode());
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
        Stock other = (Stock) obj;
        if (stockId != other.stockId) {
            return false;
        }
        if (tickerSymbol == null) {
            if (other.tickerSymbol != null) {
                return false;
            }
        } else if (!tickerSymbol.equals(other.tickerSymbol)) {
            return false;
        }
        if (companyName == null) {
            if (other.companyName != null) {
                return false;
            }
        } else if (!companyName.equals(other.companyName)) {
            return false;
        }
        return true;
    }

}
