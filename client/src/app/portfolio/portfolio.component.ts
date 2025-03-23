import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Portfolio } from "../portfolio";
import { PortfolioService } from "../portfolio.service";

@Component({
    selector: "app-portfolio",
    imports: [RouterModule],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.css",
})
export class PortfolioComponent {
    portfolioId = 0;
    portfolio: Portfolio | null = null;
    loadingPortfolio = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private portfolioService: PortfolioService
    ) {
        this.portfolioId = Number(this.route.snapshot.params["id"]);
        this.portfolio = this.router.getCurrentNavigation()?.extras
            .state as Portfolio | null;
        if (!this.portfolio) {
            this.setPortfolio();
        } else {
            this.loadingPortfolio = false;
        }
    }

    async setPortfolio() {
        const fetchedPortfolio = await this.portfolioService.getPortfolioById(this.portfolioId);
        if (fetchedPortfolio) {
            this.portfolio = fetchedPortfolio;
        }
        this.loadingPortfolio = false;
    }
}
