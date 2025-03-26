import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HoldingRequest } from '../holding-request';
import { StockService } from '../stock.service';
import { Holding } from '../holding';

@Component({
  selector: 'app-stock-search-suggestion',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './stock-search-suggestion.component.html',
  styleUrl: './stock-search-suggestion.component.css'
})
export class StockSearchSuggestionComponent {
    @Input() portfolioToActUpon: number | null = null;
    @Input() stockSearchData?: StockSearch;
    @Input() buying?: boolean = undefined;

    loadingStockSearchData = true;
    showForm = false;

    amountForm = new FormGroup({
        amount: new FormControl(0)
    });

    constructor(
        private stockService: StockService,
        private router: Router,
        private  route: ActivatedRoute
    ) {
        if (!this.stockSearchData) {
            this.setStockSearchData();
        } else {
            this.loadingStockSearchData = false;
        }
    }

    setShowForm(toSet: boolean) {
        this.showForm = toSet;
    }

    async submit() {
        if (this.portfolioToActUpon === null || !this.amountForm.value.amount) {
            return;
        }

        if (!this.stockSearchData) {
            await this.setStockSearchData();
        }

        const holdingRequest: HoldingRequest = {
            portfolioId: this.portfolioToActUpon,
            ticker: this.stockSearchData!.symbol,
            amount: this.amountForm.value.amount
        }

        console.log('buying...')
        const res: Holding | null = await this.stockService.buy(holdingRequest);
        console.log('done')

        this.router.navigate(["/portfolios", this.portfolioToActUpon])

        console.log(res);
    }


    async setStockSearchData() {

        const ticker: string = this.route.snapshot.params["ticker"];
        if (!ticker) {
            return;
        }

        const searchResults = await this.stockService.search(ticker);
        if (!searchResults) {
            return;
        }

        for (const sr of searchResults) {
            if (sr.symbol === ticker) {
                this.stockSearchData = sr;
                this.loadingStockSearchData = false;
                return;
            } 
        }

    }
}
