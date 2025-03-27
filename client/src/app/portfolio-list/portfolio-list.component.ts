import { Component } from "@angular/core";
import { PortfolioService } from "../portfolio.service";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Portfolio } from "../portfolio";
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-portfolio-list",
    imports: [PortfolioCardComponent, CommonModule, RouterModule],
    templateUrl: "./portfolio-list.component.html",
    styleUrl: "./portfolio-list.component.css",
})
export class PortfolioListComponent {

    portfolios: Portfolio[] = [];
    myPortfolios: boolean = false;

    constructor(
        private portfolioService: PortfolioService,
        private route: ActivatedRoute
    ) {
        this.myPortfolios = this.route.snapshot.data['myPortfolios'];
    }

    ngOnInit() {
        this.getPortfolios();
    }

    async getPortfolios() {
        let fetchedPortfolios: Portfolio[] | null = null;;

        if (this.myPortfolios) {
            fetchedPortfolios = await this.portfolioService.myPortfolios();
        } else {
            fetchedPortfolios = await this.portfolioService.getPublicPortfolios();
        }

        if (fetchedPortfolios === null) {
            console.log("No portfolios or error");
        } else {
            this.portfolios = fetchedPortfolios;
        }
    }
}
