import { Component, Input } from '@angular/core';
import { StockSearch } from '../stock-search';

@Component({
  selector: 'app-stock-search-suggestion',
  imports: [],
  templateUrl: './stock-search-suggestion.component.html',
  styleUrl: './stock-search-suggestion.component.css'
})
export class StockSearchSuggestionComponent {
    @Input() stockSearch!: StockSearch;
}
