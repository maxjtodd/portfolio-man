import { Component } from '@angular/core';
import { StockSearchSuggestionComponent } from '../stock-search-suggestion/stock-search-suggestion.component';
import { StockService } from '../stock.service';
import { StockSearch } from '../stock-search';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-search',
  imports: [StockSearchSuggestionComponent, CommonModule],
  templateUrl: './stock-search.component.html',
  styleUrl: './stock-search.component.css'
})
export class StockSearchComponent {

    searchResults: StockSearch[] = [];

    constructor(
        private stockService: StockService
    ) { }

    ngOnInit() {
        this.setSearchResults();
    }

    async setSearchResults() {
        const fetchedSearchResults: StockSearch[] | null = await this.stockService.search('AA');

        if (fetchedSearchResults === null) {
            console.log("No search results or error")
        } else {
            this.searchResults = fetchedSearchResults;
        }
        console.log('done');
    }
}
