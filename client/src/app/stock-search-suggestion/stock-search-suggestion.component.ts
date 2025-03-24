import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';
import { RouterModule } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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

    setShowForm(toSet: boolean) {
        this.showForm = toSet;
    }

    submit() {
        console.log("submit");
    }
}
