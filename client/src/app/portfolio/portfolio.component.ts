import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

    portfolioId = 0;
    portfolio: Portfolio | null = null;
    loadingPortfolio = true;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.portfolioId = Number(this.route.snapshot.params["id"]);
        this.portfolio = this.router.getCurrentNavigation()?.extras.state as Portfolio | null;
        if (!this.portfolio) {
            this.setPortfolio();
        } else {
            this.loadingPortfolio = false;
        }
    }

    async setPortfolio() {
        console.log("TODO SET PORTFOLIO VIA THE PORTFOLIO ID AND BACKEND ENDPOINT")
        this.loadingPortfolio = false;
    }

}
