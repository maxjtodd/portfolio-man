package learn.portfolio_man.models.YahooFinance;

import java.util.Map;

public class PriceHistory {

    private Map<String, PriceHistoryMoment> body;
    private PriceHistoryMeta meta;

    public PriceHistory() {
    }

    public PriceHistory(Map<String, PriceHistoryMoment> body, PriceHistoryMeta meta) {
        this.body = body;
        this.meta = meta;
    }

    public Map<String, PriceHistoryMoment> getBody() {
        return body;
    }

    public void setBody(Map<String, PriceHistoryMoment> body) {
        this.body = body;
    }

    public PriceHistoryMeta getMeta() {
        return meta;
    }

    public void setMeta(PriceHistoryMeta meta) {
        this.meta = meta;
    }

    @Override
    public String toString() {
        return "PriceHistory{body=" + body + ", meta=" + meta + "}";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((body == null) ? 0 : body.hashCode());
        result = prime * result + ((meta == null) ? 0 : meta.hashCode());
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
        PriceHistory other = (PriceHistory) obj;
        if (body == null) {
            if (other.body != null) {
                return false;
            }
        } else if (!body.equals(other.body)) {
            return false;
        }
        if (meta == null) {
            if (other.meta != null) {
                return false;
            }
        } else if (!meta.equals(other.meta)) {
            return false;
        }
        return true;
    }
    
}
