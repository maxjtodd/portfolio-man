import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { StockSearch } from './stock-search';
import { HoldingRequest } from './holding-request';
import { Holding } from './holding';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(
        private authService: AuthenticationService
    ) { }

    async search(searchTerm: string): Promise<StockSearch[] | null> {
        // const res = await fetch(`http://localhost:8080/api/stock/search/${searchTerm}`, {
        //     method: "GET",
        //     headers: {
        //         Authorization: this.authService.getJwt(),
        //     }
        // });
        //
        // const content = await res.json();
        // console.log(content);
        //
        // if (res.status >= 400) {
        //     return null;
        // }
        //
        // return content;

            const result1: StockSearch = {
                "shortname": "Alcoa Corporation",
                "quoteType": "EQUITY",
                "symbol": "AA",
                "index": "quotes",
                "score": "2006200",
                "typeDisp": "Equity",
                "longname": "Alcoa Corporation",
                "exchDisp": "NYSE",
                "sector": "Basic Materials",
                "sectorDisp": "Basic Materials",
                "industry": "Aluminum",
                "industryDisp": "Aluminum",
                "dispSecIndFlag": "false"
            }
            const result2: StockSearch = {
                "shortname": "Apple Inc.",
                "quoteType": "EQUITY",
                "symbol": "AAPL",
                "index": "quotes",
                "score": "27056",
                "typeDisp": "Equity",
                "longname": "Apple Inc.",
                "exchDisp": "NASDAQ",
                "sector": "Technology",
                "sectorDisp": "Technology",
                "industry": "Consumer Electronics",
                "industryDisp": "Consumer Electronics",
                "dispSecIndFlag": ""
            }
            const result3: StockSearch = {
                "shortname": "American Airlines Group, Inc.",
                "quoteType": "EQUITY",
                "symbol": "AAL",
                "index": "quotes",
                "score": "20230",
                "typeDisp": "Equity",
                "longname": "American Airlines Group Inc.",
                "exchDisp": "NASDAQ",
                "sector": "Industrials",
                "sectorDisp": "Industrials",
                "industry": "Airlines",
                "industryDisp": "Airlines",
                "dispSecIndFlag": ""
            }
            const result4: StockSearch = {
                "shortname": "Applied Optoelectronics, Inc.",
                "quoteType": "EQUITY",
                "symbol": "AAOI",
                "index": "quotes",
                "score": "20052",
                "typeDisp": "Equity",
                "longname": "Applied Optoelectronics, Inc.",
                "exchDisp": "NASDAQ",
                "sector": "Technology",
                "sectorDisp": "Technology",
                "industry": "Communication Equipment",
                "industryDisp": "Communication Equipment",
                "dispSecIndFlag": ""
            }
            const result5: StockSearch = {
                "shortname": "Advance Auto Parts Inc.",
                "quoteType": "EQUITY",
                "symbol": "AAP",
                "index": "quotes",
                "score": "20046",
                "typeDisp": "Equity",
                "longname": "Advance Auto Parts, Inc.",
                "exchDisp": "NYSE",
                "sector": "Consumer Cyclical",
                "sectorDisp": "Consumer Cyclical",
                "industry": "Specialty Retail",
                "industryDisp": "Specialty Retail",
                "dispSecIndFlag": ""
            }
            const result6: StockSearch = {
                "shortname": "AAV_ASIA AVIATION",
                "quoteType": "EQUITY",
                "symbol": "AAV.BK",
                "index": "quotes",
                "score": "20024",
                "typeDisp": "Equity",
                "longname": "Asia Aviation Public Company Limited",
                "exchDisp": "SET",
                "sector": "Industrials",
                "sectorDisp": "Industrials",
                "industry": "Airlines",
                "industryDisp": "Airlines",
                "dispSecIndFlag": ""
            }
            const result7: StockSearch = {
                "shortname": "AAON, Inc.",
                "quoteType": "EQUITY",
                "symbol": "AAON",
                "index": "quotes",
                "score": "20017",
                "typeDisp": "Equity",
                "longname": "AAON, Inc.",
                "exchDisp": "NASDAQ",
                "sector": "Industrials",
                "sectorDisp": "Industrials",
                "industry": "Building Products & Equipment",
                "industryDisp": "Building Products & Equipment",
                "dispSecIndFlag": ""
            }
            

        return [result1, result2, result3, result4, result5, result6, result7];
    }

    async getSpecificStock(searchTerm: string): Promise<StockSearch | null> {
        const res = await fetch(`http://localhost:8080/api/stock/searchOne/${searchTerm}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            }
        });

        const content = await res.json();
        console.log(content);

        if (res.status >= 400) {
            return null;
        }

        return content;
    }

    // async buy(holdingRequest: HoldingRequest): Promise<StockSearch[] | null> {
    async buy(holdingRequest: HoldingRequest): Promise<Holding | null> {
        const res = await fetch("http://localhost:8080/api/holding/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authService.getJwt(),
            },
            body: JSON.stringify(holdingRequest)
        });

        const content = await res.json();
        console.log(content);

        if (res.status >= 400) {
            return null;
        }

        return content;
    }

}
