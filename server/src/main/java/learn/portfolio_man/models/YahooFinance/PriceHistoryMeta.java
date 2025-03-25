package learn.portfolio_man.models.YahooFinance;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PriceHistoryMeta {

    private BigDecimal fiftyTwoWeekHigh;
    private BigDecimal fiftyTwoWeekLow;
    private String longName;

    public PriceHistoryMeta() {
    }

    public PriceHistoryMeta(BigDecimal fiftyTwoWeekHigh, BigDecimal fiftyTwoWeekLow, String longName) {
        this.fiftyTwoWeekHigh = fiftyTwoWeekHigh;
        this.fiftyTwoWeekLow = fiftyTwoWeekLow;
        this.longName = longName;
    }

    @Override
    public String toString() {
        return "PriceHistoryMeta{fiftyTwoWeekHigh=" + fiftyTwoWeekHigh + ", fiftyTwoWeekLow=" + fiftyTwoWeekLow
                + ", longName=" + longName + "}";
    }

    public BigDecimal getFiftyTwoWeekHigh() {
        return fiftyTwoWeekHigh;
    }

    public void setFiftyTwoWeekHigh(BigDecimal fiftyTwoWeekHigh) {
        this.fiftyTwoWeekHigh = fiftyTwoWeekHigh;
    }

    public BigDecimal getFiftyTwoWeekLow() {
        return fiftyTwoWeekLow;
    }

    public void setFiftyTwoWeekLow(BigDecimal fiftyTwoWeekLow) {
        this.fiftyTwoWeekLow = fiftyTwoWeekLow;
    }

    public String getLongName() {
        return longName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fiftyTwoWeekHigh == null) ? 0 : fiftyTwoWeekHigh.hashCode());
        result = prime * result + ((fiftyTwoWeekLow == null) ? 0 : fiftyTwoWeekLow.hashCode());
        result = prime * result + ((longName == null) ? 0 : longName.hashCode());
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
        PriceHistoryMeta other = (PriceHistoryMeta) obj;
        if (fiftyTwoWeekHigh == null) {
            if (other.fiftyTwoWeekHigh != null) {
                return false;
            }
        } else if (!fiftyTwoWeekHigh.equals(other.fiftyTwoWeekHigh)) {
            return false;
        }
        if (fiftyTwoWeekLow == null) {
            if (other.fiftyTwoWeekLow != null) {
                return false;
            }
        } else if (!fiftyTwoWeekLow.equals(other.fiftyTwoWeekLow)) {
            return false;
        }
        if (longName == null) {
            if (other.longName != null) {
                return false;
            }
        } else if (!longName.equals(other.longName)) {
            return false;
        }
        return true;
    }
    
}
