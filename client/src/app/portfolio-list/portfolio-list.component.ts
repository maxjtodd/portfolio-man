import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { PortfolioService } from "../portfolio.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-portfolio-list",
    imports: [],
    templateUrl: "./portfolio-list.component.html",
    styleUrl: "./portfolio-list.component.css",
})
export class PortfolioListComponent {


    constructor(
        private portfolioService: PortfolioService,
        private router: Router,
    ) { }

    ngOnInit() {
        const portfolios = this.portfolioService.myPortfolios();
        console.log(portfolios);
    }
}
