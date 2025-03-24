import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';
import { RouterModule, Router } from '@angular/router';
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
    @Input() stockSearchData!: StockSearch;

    showForm = false;

    amountForm = new FormGroup({
        amount: new FormControl(0)
    });

    constructor(
        private stockService: StockService,
        private router: Router
    ) { }

    setShowForm(toSet: boolean) {
        this.showForm = toSet;
    }

    async submit() {
        if (this.portfolioToActUpon === null || !this.amountForm.value.amount) {
            return;
        }

        const holdingRequest: HoldingRequest = {
            portfolioId: this.portfolioToActUpon,
            ticker: this.stockSearchData.symbol,
            amount: this.amountForm.value.amount
        }

        console.log('buying...')
        const res: Holding | null = await this.stockService.buy(holdingRequest);
        console.log('done')

        this.router.navigate(["/portfolios", this.portfolioToActUpon])

        console.log(res);
    }
}
