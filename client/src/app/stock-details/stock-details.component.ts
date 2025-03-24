import { Component } from '@angular/core';
import { StockSearch } from '../stock-search';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';

@Component({
  selector: 'app-stock-details',
  imports: [],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.css'
})
export class StockDetailsComponent {

    ticker = "";
    portfolioToActUpon: number | null = null;
    stockSearchData: StockSearch | null = null;
    loadingData = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.ticker = String(this.route.snapshot.params["ticker"]);
        const recievedState: StockDetailsData | null = this.router.getCurrentNavigation()?.extras
            .state as StockDetailsData | null;
        if (!recievedState) {
            // TODO: get the stock search data
        } else {
            this.stockSearchData = recievedState.stockSearchData;
            this.portfolioToActUpon = recievedState.portfolioToActUpon;
        }
    }

}
