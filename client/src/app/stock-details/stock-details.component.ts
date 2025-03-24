import { Component } from '@angular/core';
import { StockSearch } from '../stock-search';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';
import { StockService } from '../stock.service';

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
        private router: Router,
        private stockService: StockService
    ) {
        this.ticker = String(this.route.snapshot.params["ticker"]);
        const recievedState: StockDetailsData | null = this.router.getCurrentNavigation()?.extras
            .state as StockDetailsData | null;
        if (!recievedState) {
            this.setStockSearchData();
        } else {
            this.stockSearchData = recievedState.stockSearchData;
            this.portfolioToActUpon = recievedState.portfolioToActUpon;
        }
    }

    async setStockSearchData() {
        this.stockSearchData = await this.stockService.getSpecificStock(this.ticker);
    }

}
