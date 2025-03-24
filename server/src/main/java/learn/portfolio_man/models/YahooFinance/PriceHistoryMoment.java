package learn.portfolio_man.models.YahooFinance;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PriceHistoryMoment {

    private BigDecimal close;
    private String date;
    private int date_utc;
    private BigDecimal high;
    private BigDecimal low;
    private BigDecimal open;
    private int volume;

    public PriceHistoryMoment() {
    }

    public PriceHistoryMoment(BigDecimal close, String date, int date_utc, BigDecimal high, int volume, BigDecimal open,
            BigDecimal low) {
        this.close = close;
        this.date = date;
        this.date_utc = date_utc;
        this.high = high;
        this.volume = volume;
        this.open = open;
        this.low = low;
    }

    public BigDecimal getClose() {
        return close;
    }

    public void setClose(BigDecimal close) {
        this.close = close;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getDate_utc() {
        return date_utc;
    }

    public void setDate_utc(int date_utc) {
        this.date_utc = date_utc;
    }

    public BigDecimal getHigh() {
        return high;
    }

    public void setHigh(BigDecimal high) {
        this.high = high;
    }

    public BigDecimal getLow() {
        return low;
    }

    public void setLow(BigDecimal low) {
        this.low = low;
    }

    public BigDecimal getOpen() {
        return open;
    }

    public void setOpen(BigDecimal open) {
        this.open = open;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    @Override
    public String toString() {
        return "PriceHistoryMoment{close=" + close + ", date=" + date + ", date_utc=" + date_utc + ", high=" + high
                + ", low=" + low + ", open=" + open + ", volume=" + volume + "}";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((close == null) ? 0 : close.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        result = prime * result + date_utc;
        result = prime * result + ((high == null) ? 0 : high.hashCode());
        result = prime * result + ((low == null) ? 0 : low.hashCode());
        result = prime * result + ((open == null) ? 0 : open.hashCode());
        result = prime * result + volume;
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
        PriceHistoryMoment other = (PriceHistoryMoment) obj;
        if (close == null) {
            if (other.close != null) {
                return false;
            }
        } else if (!close.equals(other.close)) {
            return false;
        }
        if (date == null) {
            if (other.date != null) {
                return false;
            }
        } else if (!date.equals(other.date)) {
            return false;
        }
        if (date_utc != other.date_utc) {
            return false;
        }
        if (high == null) {
            if (other.high != null) {
                return false;
            }
        } else if (!high.equals(other.high)) {
            return false;
        }
        if (low == null) {
            if (other.low != null) {
                return false;
            }
        } else if (!low.equals(other.low)) {
            return false;
        }
        if (open == null) {
            if (other.open != null) {
                return false;
            }
        } else if (!open.equals(other.open)) {
            return false;
        }
        if (volume != other.volume) {
            return false;
        }
        return true;
    }

}
