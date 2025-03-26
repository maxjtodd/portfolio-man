import { Component } from '@angular/core';
import { StockSearchSuggestionComponent } from '../stock-search-suggestion/stock-search-suggestion.component';
import { StockService } from '../stock.service';
import { StockSearch } from '../stock-search';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PortfolioService } from '../portfolio.service';
import { Holding } from '../holding';

@Component({
  selector: 'app-stock-search',
  imports: [StockSearchSuggestionComponent, CommonModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './stock-search.component.html',
  styleUrl: './stock-search.component.css'
})
export class StockSearchComponent {

    searchResults: StockSearch[] = [];
    portfolioToActUpon = -1;
    loadingSearchResults = false;
    buying?: boolean;

    searchForm = new FormGroup({
        searchTerm: new FormControl("")
    })

    constructor(
        private stockService: StockService,
        private route: ActivatedRoute,
        private portfolioService: PortfolioService
    ) {
        this.portfolioToActUpon = Number(this.route.snapshot.params["id"]);
        this.buying = this.route.snapshot.data['buy'];
    }

    async setBuyingSearchResults(searchTerm: string) {

        this.loadingSearchResults = true;
        console.log(this.loadingSearchResults);

        const fetchedSearchResults: StockSearch[] | null = await this.stockService.search(searchTerm);

        this.loadingSearchResults = false;
        console.log(this.loadingSearchResults);

        if (fetchedSearchResults === null) {
            console.log("No search results or error")
        } else {
            this.searchResults = fetchedSearchResults;
        }
        console.log('done');
    }

    async setSellingSearchResults(searchTerm: string) {
        this.loadingSearchResults = true;

        const holdings: Holding[] | null = await this.portfolioService.getHoldings(this.portfolioToActUpon);
        if (holdings === null) {
            return;
        }

        const holdingsToStockSearch: StockSearch[] = holdings.map(h => {
            return {
                shortname: h.stock.companyName,
                quoteType: '',
                symbol: h.stock.tickerSymbol,
                index: '',
                score: '',
                typeDisp: '',
                longname: h.stock.companyName,
                exchDisp: '',
                sector: '',
                sectorDisp: '',
                industry: '',
                industryDisp: '',
                dispSecIndFlag: ''
            }
        })

        this.loadingSearchResults = false;

        this.searchResults = holdingsToStockSearch;
    }

    search() {
        if (this.buying === true || this.buying === undefined) {
            this.setBuyingSearchResults(this.searchForm.value.searchTerm ?? '');
        } else if (this.buying === false) {
            this.setSellingSearchResults(this.searchForm.value.searchTerm ?? '');
        }
    }
}
