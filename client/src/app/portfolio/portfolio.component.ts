import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Portfolio } from "../portfolio";
import { PortfolioService } from "../portfolio.service";
import { AuthenticationService } from "../authentication.service";
import { Holding } from "../holding";
import { HoldingsTableRowComponent } from "../holdings-table-row/holdings-table-row.component";
import { CommonModule } from "@angular/common";
import { StockDetailsData } from "../stock-details-data";

@Component({
    selector: "app-portfolio",
    imports: [RouterModule, HoldingsTableRowComponent, CommonModule],
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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private portfolioService: PortfolioService,
        private authService: AuthenticationService
    ) {
        this.portfolioId = Number(this.route.snapshot.params["id"]);
        this.portfolio = this.router.getCurrentNavigation()?.extras
            .state as Portfolio | null;
        if (!this.portfolio) {
            this.setPortfolio();
        } else {
            this.loadingPortfolio = false;
        }
        this.userId = this.authService.getUserId();
        this.setHoldings();
        this.stockDetailsData = {
            portfolioToActUpon: this.portfolioId,
            action: true
        }
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
    }
}
