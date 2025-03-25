package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentPriceKeyStats {

    private CurrentPriceStats fiftyTwoWeekHighLow;
    private CurrentPriceStats dayrange;

    public CurrentPriceKeyStats() {
    }

    public CurrentPriceKeyStats(CurrentPriceStats fiftyTwoWeekHighLow, CurrentPriceStats dayrange) {
        this.fiftyTwoWeekHighLow = fiftyTwoWeekHighLow;
        this.dayrange = dayrange;
    }

    @Override
    public String toString() {
        return "CurrentPriceKeyStats{fiftyTwoWeekHighLow=" + fiftyTwoWeekHighLow + ", dayrange=" + dayrange + "}";
    }

    public CurrentPriceStats getFiftyTwoWeekHighLow() {
        return fiftyTwoWeekHighLow;
    }

    public void setFiftyTwoWeekHighLow(CurrentPriceStats fiftyTwoWeekHighLow) {
        this.fiftyTwoWeekHighLow = fiftyTwoWeekHighLow;
    }

    public CurrentPriceStats getDayrange() {
        return dayrange;
    }

    public void setDayrange(CurrentPriceStats dayrange) {
        this.dayrange = dayrange;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fiftyTwoWeekHighLow == null) ? 0 : fiftyTwoWeekHighLow.hashCode());
        result = prime * result + ((dayrange == null) ? 0 : dayrange.hashCode());
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
        CurrentPriceKeyStats other = (CurrentPriceKeyStats) obj;
        if (fiftyTwoWeekHighLow == null) {
            if (other.fiftyTwoWeekHighLow != null) {
                return false;
            }
        } else if (!fiftyTwoWeekHighLow.equals(other.fiftyTwoWeekHighLow)) {
            return false;
        }
        if (dayrange == null) {
            if (other.dayrange != null) {
                return false;
            }
        } else if (!dayrange.equals(other.dayrange)) {
            return false;
        }
        return true;
    }
    
}
