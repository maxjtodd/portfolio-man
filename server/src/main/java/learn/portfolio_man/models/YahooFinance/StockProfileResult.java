package learn.portfolio_man.models.YahooFinance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StockProfileResult {

    private StockProfile body;

    public StockProfileResult() {
    }

    public StockProfileResult(StockProfile body) {
        this.body = body;
    }

    public StockProfile getBody() {
        return body;
    }

    public void setBody(StockProfile body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "StockProfileResult{body=" + body + "}";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((body == null) ? 0 : body.hashCode());
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
        StockProfileResult other = (StockProfileResult) obj;
        if (body == null) {
            if (other.body != null) {
                return false;
            }
        } else if (!body.equals(other.body)) {
            return false;
        }
        return true;
    }

}
