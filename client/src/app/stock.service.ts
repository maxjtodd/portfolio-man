import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { StockSearch } from './stock-search';
import { HoldingRequest } from './holding-request';
import { Holding } from './holding';
import { PortfolioService } from './portfolio.service';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(
        private authService: AuthenticationService,
        private portfolioService: PortfolioService
    ) { }

    async search(searchTerm: string): Promise<StockSearch[] | null> {
        const res = await fetch(`http://localhost:8080/api/stock/search/${searchTerm}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            }
        });

        const content = await res.json();

        if (res.status >= 400) {
            return null;
        }

        return content;

    }

    async getSpecificStock(searchTerm: string): Promise<StockSearch | null> {
        const res = await fetch(`http://localhost:8080/api/stock/searchOne/${searchTerm}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            }
        });

        const content = await res.json();

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

        if (res.status >= 400) {
            return null;
        }

        this.portfolioService.setReload(true);

        return content;
    }

    async sell(holdingRequest: HoldingRequest): Promise<Holding | null> {
        const res = await fetch("http://localhost:8080/api/holding/sell", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authService.getJwt(),
            },
            body: JSON.stringify(holdingRequest)
        });

        const content = await res.json();

        if (res.status >= 400) {
            return null;
        }

        this.portfolioService.setReload(true);

        return content;
    }


    // get price history
    async priceHistory(ticker: string) {
        const res = await fetch(`http://localhost:8080/api/stock/priceHistory/${ticker}`, {
            method: "GET",
            headers: {
                Authorization: this.authService.getJwt(),
            },
        });

        const content = await res.json();
        console.log(content);

        if (res.status >= 400) {
            return null;
        }

        return content;
    }
}
