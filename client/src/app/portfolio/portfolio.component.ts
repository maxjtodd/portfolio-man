import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Portfolio } from "../portfolio";
import { PortfolioService } from "../portfolio.service";
import { AuthenticationService } from "../authentication.service";
import { Holding } from "../holding";
import { HoldingsTableRowComponent } from "../holdings-table-row/holdings-table-row.component";
import { CommonModule } from "@angular/common";
import { StockDetailsData } from "../stock-details-data";
import { PriceHistory } from "../price-history";
import { StockService } from "../stock.service";
import { GraphComponent } from "../graph/graph.component";

@Component({
    selector: "app-portfolio",
    imports: [RouterModule, HoldingsTableRowComponent, CommonModule, GraphComponent],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.css",
})
export class PortfolioComponent {
    portfolioId = 0;
    portfolio: Portfolio | null = null;
    loadingPortfolio = true;
    userId: number | null = null;
    holdings: Holding[] | null = null;
    stockDetailsData?: StockDetailsData;

    loadingGraph = true;
    priceHistories: PriceHistory[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public portfolioService: PortfolioService,
        private stockService: StockService,
        private authService: AuthenticationService
    ) {
        this.portfolioId = Number(this.route.snapshot.params["id"]);
        this.portfolio = this.router.getCurrentNavigation()?.extras
            .state as Portfolio | null;
        this.setPortfolio();
        this.userId = this.authService.getUserId();
        this.setHoldings();
        this.stockDetailsData = {
            portfolioToActUpon: this.portfolioId,
            action: true
        }
    }

    isMyPortfolio(): boolean {
        if (this.userId == null || this.portfolio == null) {
            return false;
        }
        return this.userId === this.portfolio.userId;
    }

    async setPortfolio() {
        const fetchedPortfolio = await this.portfolioService.getPortfolioById(this.portfolioId);
        if (fetchedPortfolio) {
            this.portfolio = fetchedPortfolio;
        }
        this.loadingPortfolio = false;
    }

    async setHoldings() {
        this.holdings = await this.portfolioService.getHoldings(this.portfolioId);
        this.portfolioService.setReload(false);
        this.drawGraph();
    }

    async drawGraph() {
        const tickers = this.holdings!.map(h => h.stock.tickerSymbol);
        const amounts = this.holdings!.map(h => h.amount);
        if (tickers.length != amounts.length) {
            return;
        }
        for (let i = 0; i < tickers.length; i++) {
            const ph: PriceHistory = await this.stockService.priceHistory(tickers[i]);
            const labels = Object.keys(ph!.body);
            // const data = labels.map((l) => ph!.body[l].open);
            for (const label of labels) {
                ph.body[label].open = ph.body[label].open * amounts[i];
            }
            this.priceHistories.push(ph);
        }
        console.log(this.priceHistories);
        this.loadingGraph = false;
    }

}
