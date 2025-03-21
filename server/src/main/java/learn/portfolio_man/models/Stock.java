package learn.portfolio_man.models;

public class Stock {

    private int stockId;
    private String tickerSymbol;

    public Stock() {
    }

    public Stock(int stockId, String tickerSymbol) {
        this.stockId = stockId;
        this.tickerSymbol = tickerSymbol;
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + stockId;
        result = prime * result + ((tickerSymbol == null) ? 0 : tickerSymbol.hashCode());
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
        return true;
    }

}
