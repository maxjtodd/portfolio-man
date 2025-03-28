package learn.portfolio_man.domain;

import java.util.List;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import learn.portfolio_man.models.YahooFinance.CurrentPrice;
import learn.portfolio_man.models.YahooFinance.CurrentPriceContainer;
import learn.portfolio_man.models.YahooFinance.PriceHistory;
import learn.portfolio_man.models.YahooFinance.Search;
import learn.portfolio_man.models.YahooFinance.SearchResult;
import learn.portfolio_man.models.YahooFinance.StockProfile;
import learn.portfolio_man.models.YahooFinance.StockProfileResult;

@Component
public class YahooFinance {

    private Environment environment;
    private final RestClient restClient;

    public YahooFinance(Environment environment) {
        this.environment = environment;
        this.restClient = RestClient.builder()
            .baseUrl("https://yahoo-finance15.p.rapidapi.com/api")
            .defaultHeader("x-rapidapi-host", "yahoo-finance15.p.rapidapi.com")
            .defaultHeader("x-rapidapi-key", this.environment.getProperty("portfolio-man.apiKey"))
            .build();
    }

    public Search search(String ticker) {
        return this.restClient.get().uri("/v1/markets/search?search={ticker}", ticker)
            .retrieve().body(Search.class);
    }

    public SearchResult searchSpecificStock(String ticker) {
        List<SearchResult> search = search(ticker).getBody();

        for (SearchResult searchResult : search) {
            if (searchResult.getSymbol().equals(ticker)) {
                return searchResult;
            }
        }

        return null;
    }

    public StockProfile getStockProfile(String ticker) {
        StockProfileResult fetchedProfile = this.restClient.get().uri("/v1/markets/stock/modules?ticker={ticker}&module=asset-profile", ticker)
            .retrieve().body(StockProfileResult.class);
        System.out.println(fetchedProfile);
        return fetchedProfile != null ? fetchedProfile.getBody() : null;
    }

    public PriceHistory getPriceHistory(String ticker) {
        return this.restClient.get().uri("/v1/markets/stock/history?symbol={ticker}&interval=5m&diffandsplits=false", ticker)
            .retrieve().body(PriceHistory.class);
    }

    public CurrentPrice getCurrentPrice(String ticker) {
        CurrentPriceContainer container = this.restClient.get()
            .uri("/v1/markets/quote?ticker={ticker}&type=STOCKS", ticker)
            .retrieve().body(CurrentPriceContainer.class);
        return container.getBody();
    }

    private String getApiKey() {
        return environment.getProperty("portfolio-man.apiKey");
    }

}
