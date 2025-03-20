import { Component } from "@angular/core";
import { PortfolioService } from "../portfolio.service";
import { Router } from "@angular/router";
import { Portfolio } from "../portfolio";

@Component({
    selector: "app-portfolio-list",
    imports: [],
    templateUrl: "./portfolio-list.component.html",
    styleUrl: "./portfolio-list.component.css",
})
export class PortfolioListComponent {

    portfolios: Portfolio[] = [];

    constructor(
        private portfolioService: PortfolioService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.getPortfolios();
    }

    async getPortfolios() {
        const fetchedPortfolios: Portfolio[] | null = await this.portfolioService.myPortfolios();
        if (fetchedPortfolios === null) {
            console.log("No portfolios or error");
        } else {
            this.portfolios = fetchedPortfolios;
        }
    }
}
