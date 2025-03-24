package learn.portfolio_man.models.YahooFinance;

import java.util.List;

public class Search {

    private List<SearchResult> body;

    public Search() {
    }

    public Search(List<SearchResult> body) {
        this.body = body;
    }

    public List<SearchResult> getBody() {
        return body;
    }

    public void setBody(List<SearchResult> body) {
        this.body = body;
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
        Search other = (Search) obj;
        if (body == null) {
            if (other.body != null) {
                return false;
            }
        } else if (!body.equals(other.body)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Search{body=" + body + "}";
    }
    
}
