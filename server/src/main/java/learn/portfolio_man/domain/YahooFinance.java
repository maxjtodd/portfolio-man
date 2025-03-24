package learn.portfolio_man.domain;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import learn.portfolio_man.models.Stock;
import learn.portfolio_man.models.YahooFinance.Search;
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

    public StockProfile getStockProfile(String ticker) {
        StockProfileResult fetchedProfile = this.restClient.get().uri("/v1/markets/stock/modules?ticker={ticker}&module=asset-profile", ticker)
            .retrieve().body(StockProfileResult.class);
        System.out.println(fetchedProfile);
        return fetchedProfile != null ? fetchedProfile.getBody() : null;
    }

    private String getApiKey() {
        return environment.getProperty("portfolio-man.apiKey");
    }

}
