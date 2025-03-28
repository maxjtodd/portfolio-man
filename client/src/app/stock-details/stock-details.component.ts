import { Component } from '@angular/core';
import { StockSearch } from '../stock-search';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';
import { StockService } from '../stock.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HoldingRequest } from '../holding-request';
import { Holding } from '../holding';
import { PriceHistory } from '../price-history';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-stock-details',
  imports: [ReactiveFormsModule, GraphComponent],
  templateUrl: './stock-details.component.html',
  styleUrl: './stock-details.component.css'
})
export class StockDetailsComponent {

    ticker = "";
    portfolioToActUpon: number | null = null;
    stockSearchData: StockSearch | null = null;
    loadingData = true;
    acting = false;
    buyingForm: boolean | null = null;
    priceHistory: PriceHistory | null = null;

    actionForm = new FormGroup({
        amount: new FormControl(0)
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stockService: StockService
    ) {
        this.ticker = String(this.route.snapshot.params["ticker"]);
        const recievedState: StockDetailsData | null = this.router.getCurrentNavigation()?.extras
            .state as StockDetailsData | null;
        console.log(recievedState);
        if (recievedState?.stockSearchData === undefined) {
            this.setStockSearchData();
        } else {
            this.stockSearchData = recievedState.stockSearchData;
        }
        if (recievedState) {
            this.portfolioToActUpon = recievedState!.portfolioToActUpon;

            if (recievedState!.action) {
                this.acting = true;
            }
        }
        this.setPriceHistory();
    }

    async setStockSearchData() {
        this.stockSearchData = await this.stockService.getSpecificStock(this.ticker);
    }

    async setPriceHistory() {
        this.priceHistory = await this.stockService.priceHistory(this.ticker);
        console.log(this.priceHistory);
    }


    async submit() {
        if (this.stockSearchData == null || this.portfolioToActUpon === null || !this.actionForm.value.amount) {
            return;
        }

        const holdingRequest: HoldingRequest = {
            portfolioId: this.portfolioToActUpon,
            ticker: this.stockSearchData.symbol,
            amount: this.actionForm.value.amount
        }

        let res: Holding | null = null;
        if (this.buyingForm === true) {
            res = await this.stockService.buy(holdingRequest);
        } else if (this.buyingForm === false) {
            res = await this.stockService.sell(holdingRequest);
        }

        this.router.navigate(["/portfolios", this.portfolioToActUpon])

    }

}
