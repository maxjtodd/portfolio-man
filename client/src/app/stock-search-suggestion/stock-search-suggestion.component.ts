import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';
import { RouterModule } from '@angular/router';
import { StockDetailsData } from '../stock-details-data';

@Component({
  selector: 'app-stock-search-suggestion',
  imports: [RouterModule],
  templateUrl: './stock-search-suggestion.component.html',
  styleUrl: './stock-search-suggestion.component.css'
})
export class StockSearchSuggestionComponent {
    @Input() portfolioToActUpon: number | null = null;
    @Input() stockSearchData!: StockSearch;
}
