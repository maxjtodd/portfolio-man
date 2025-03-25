package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentPrice {

    private String symbol;
    private CurrentPricePrimaryData primaryData;
    private String marketStatus;
    private CurrentPriceKeyStats keyStats;

    public CurrentPrice() {
    }

    public CurrentPrice(String symbol, CurrentPricePrimaryData primaryData, String marketStatus,
            CurrentPriceKeyStats keyStats) {
        this.symbol = symbol;
        this.primaryData = primaryData;
        this.marketStatus = marketStatus;
        this.keyStats = keyStats;
    }

    @Override
    public String toString() {
        return "CurrentPriceBody{symbol=" + symbol + ", primaryData=" + primaryData + ", marketStatus=" + marketStatus
                + ", keyStats=" + keyStats + "}";
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public CurrentPricePrimaryData getPrimaryData() {
        return primaryData;
    }

    public void setPrimaryData(CurrentPricePrimaryData primaryData) {
        this.primaryData = primaryData;
    }

    public String getMarketStatus() {
        return marketStatus;
    }

    public void setMarketStatus(String marketStatus) {
        this.marketStatus = marketStatus;
    }

    public CurrentPriceKeyStats getKeyStats() {
        return keyStats;
    }

    public void setKeyStats(CurrentPriceKeyStats keyStats) {
        this.keyStats = keyStats;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((symbol == null) ? 0 : symbol.hashCode());
        result = prime * result + ((primaryData == null) ? 0 : primaryData.hashCode());
        result = prime * result + ((marketStatus == null) ? 0 : marketStatus.hashCode());
        result = prime * result + ((keyStats == null) ? 0 : keyStats.hashCode());
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
        CurrentPrice other = (CurrentPrice) obj;
        if (symbol == null) {
            if (other.symbol != null) {
                return false;
            }
        } else if (!symbol.equals(other.symbol)) {
            return false;
        }
        if (primaryData == null) {
            if (other.primaryData != null) {
                return false;
            }
        } else if (!primaryData.equals(other.primaryData)) {
            return false;
        }
        if (marketStatus == null) {
            if (other.marketStatus != null) {
                return false;
            }
        } else if (!marketStatus.equals(other.marketStatus)) {
            return false;
        }
        if (keyStats == null) {
            if (other.keyStats != null) {
                return false;
            }
        } else if (!keyStats.equals(other.keyStats)) {
            return false;
        }
        return true;
    }
    
}
