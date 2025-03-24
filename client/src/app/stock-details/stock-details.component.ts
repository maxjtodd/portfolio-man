import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';
import { ActivatedRoute, Router } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';
import { StockService } from '../stock.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HoldingRequest } from '../holding-request';
import { Holding } from '../holding';

@Component({
  selector: 'app-stock-details',
  imports: [ReactiveFormsModule],
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
        if (!recievedState) {
            this.setStockSearchData();
        } else {
            this.stockSearchData = recievedState.stockSearchData;
            this.portfolioToActUpon = recievedState.portfolioToActUpon;
            if (recievedState.action) {
                this.acting = true;
            }
        }
    }

    async setStockSearchData() {
        this.stockSearchData = await this.stockService.getSpecificStock(this.ticker);
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

        if (this.buyingForm) {

            console.log('buying...')
            const res: Holding | null = await this.stockService.buy(holdingRequest);
            console.log('done')
            console.log(res);

        }
        // TODO: Sell

        this.router.navigate(["/portfolios", this.portfolioToActUpon])

    }

}
