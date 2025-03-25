package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentPricePrimaryData {

    private String lastSalePrice;
    private String percentageChange;
    private String volume;

    public CurrentPricePrimaryData() {
    }

    public CurrentPricePrimaryData(String lastSalePrice, String percentageChange, String volume) {
        this.lastSalePrice = lastSalePrice;
        this.percentageChange = percentageChange;
        this.volume = volume;
    }

    @Override
    public String toString() {
        return "CurrentPricePrimaryData{lastSalePrice=" + lastSalePrice + ", percentageChange=" + percentageChange
                + ", volume=" + volume + "}";
    }

    public String getLastSalePrice() {
        return lastSalePrice;
    }

    public void setLastSalePrice(String lastSalePrice) {
        this.lastSalePrice = lastSalePrice;
    }

    public String getPercentageChange() {
        return percentageChange;
    }

    public void setPercentageChange(String percentageChange) {
        this.percentageChange = percentageChange;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((lastSalePrice == null) ? 0 : lastSalePrice.hashCode());
        result = prime * result + ((percentageChange == null) ? 0 : percentageChange.hashCode());
        result = prime * result + ((volume == null) ? 0 : volume.hashCode());
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
        CurrentPricePrimaryData other = (CurrentPricePrimaryData) obj;
        if (lastSalePrice == null) {
            if (other.lastSalePrice != null) {
                return false;
            }
        } else if (!lastSalePrice.equals(other.lastSalePrice)) {
            return false;
        }
        if (percentageChange == null) {
            if (other.percentageChange != null) {
                return false;
            }
        } else if (!percentageChange.equals(other.percentageChange)) {
            return false;
        }
        if (volume == null) {
            if (other.volume != null) {
                return false;
            }
        } else if (!volume.equals(other.volume)) {
            return false;
        }
        return true;
    }

}
