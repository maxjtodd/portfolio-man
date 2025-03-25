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

        return content;
    }


    // get price history
    async priceHistory(ticker: string) {
    //     const res = await fetch(`http://localhost:8080/api/stock/priceHistory/${ticker}`, {
    //         method: "GET",
    //         headers: {
    //             Authorization: this.authService.getJwt(),
    //         },
    //     });
    //
    //     const content = await res.json();
    //     console.log(content);
    //
    //     if (res.status >= 400) {
    //         return null;
    //     }
    //
    //     return content;
    // }
        return {
    "body": {
        "1740501900": {
            "close": 34.09,
            "date": "25-02-2025",
            "date_utc": 1740501900,
            "high": 34.09,
            "low": 33.95,
            "open": 33.96,
            "volume": 0
        },
        "1740502200": {
            "close": 34.2,
            "date": "25-02-2025",
            "date_utc": 1740502200,
            "high": 34.2,
            "low": 34.09,
            "open": 34.09,
            "volume": 36060
        },
        "1740502500": {
            "close": 34.2,
            "date": "25-02-2025",
            "date_utc": 1740502500,
            "high": 34.29,
            "low": 34.16,
            "open": 34.2,
            "volume": 44301
        },
        "1740502800": {
            "close": 34.17,
            "date": "25-02-2025",
            "date_utc": 1740502800,
            "high": 34.23,
            "low": 34.15,
            "open": 34.2,
            "volume": 28018
        },
        "1740503100": {
            "close": 34.13,
            "date": "25-02-2025",
            "date_utc": 1740503100,
            "high": 34.16,
            "low": 34.1,
            "open": 34.16,
            "volume": 26371
        },
        "1740503400": {
            "close": 34.16,
            "date": "25-02-2025",
            "date_utc": 1740503400,
            "high": 34.21,
            "low": 34.14,
            "open": 34.14,
            "volume": 48034
        },
        "1740503700": {
            "close": 34.16,
            "date": "25-02-2025",
            "date_utc": 1740503700,
            "high": 34.19,
            "low": 34.16,
            "open": 34.16,
            "volume": 23885
        },
        "1740504000": {
            "close": 34.1,
            "date": "25-02-2025",
            "date_utc": 1740504000,
            "high": 34.13,
            "low": 34.06,
            "open": 34.13,
            "volume": 29526
        },
        "1740504300": {
            "close": 34.13,
            "date": "25-02-2025",
            "date_utc": 1740504300,
            "high": 34.15,
            "low": 34.08,
            "open": 34.09,
            "volume": 20092
        },
        "1740504600": {
            "close": 34.14,
            "date": "25-02-2025",
            "date_utc": 1740504600,
            "high": 34.18,
            "low": 34.12,
            "open": 34.12,
            "volume": 28492
        },
        "1740504900": {
            "close": 34.21,
            "date": "25-02-2025",
            "date_utc": 1740504900,
            "high": 34.21,
            "low": 34.1,
            "open": 34.14,
            "volume": 31953
        },
        "1740505200": {
            "close": 34.26,
            "date": "25-02-2025",
            "date_utc": 1740505200,
            "high": 34.27,
            "low": 34.2,
            "open": 34.2,
            "volume": 35618
        },
        "1740505500": {
            "close": 34.29,
            "date": "25-02-2025",
            "date_utc": 1740505500,
            "high": 34.29,
            "low": 34.24,
            "open": 34.26,
            "volume": 22583
        },
        "1740505800": {
            "close": 34.39,
            "date": "25-02-2025",
            "date_utc": 1740505800,
            "high": 34.41,
            "low": 34.29,
            "open": 34.29,
            "volume": 23412
        },
        "1740506100": {
            "close": 34.47,
            "date": "25-02-2025",
            "date_utc": 1740506100,
            "high": 34.49,
            "low": 34.39,
            "open": 34.39,
            "volume": 23443
        },
        "1740506400": {
            "close": 34.63,
            "date": "25-02-2025",
            "date_utc": 1740506400,
            "high": 34.63,
            "low": 34.48,
            "open": 34.48,
            "volume": 45684
        },
        "1740506700": {
            "close": 34.47,
            "date": "25-02-2025",
            "date_utc": 1740506700,
            "high": 34.65,
            "low": 34.47,
            "open": 34.63,
            "volume": 52600
        },
        "1740507000": {
            "close": 34.49,
            "date": "25-02-2025",
            "date_utc": 1740507000,
            "high": 34.53,
            "low": 34.46,
            "open": 34.47,
            "volume": 31072
        },
        "1740507300": {
            "close": 34.37,
            "date": "25-02-2025",
            "date_utc": 1740507300,
            "high": 34.5,
            "low": 34.37,
            "open": 34.47,
            "volume": 19576
        },
        "1740507600": {
            "close": 34.4,
            "date": "25-02-2025",
            "date_utc": 1740507600,
            "high": 34.43,
            "low": 34.37,
            "open": 34.37,
            "volume": 18554
        },
        "1740507900": {
            "close": 34.29,
            "date": "25-02-2025",
            "date_utc": 1740507900,
            "high": 34.41,
            "low": 34.28,
            "open": 34.39,
            "volume": 30750
        },
        "1740508200": {
            "close": 34.36,
            "date": "25-02-2025",
            "date_utc": 1740508200,
            "high": 34.38,
            "low": 34.27,
            "open": 34.28,
            "volume": 28722
        },
        "1740508500": {
            "close": 34.42,
            "date": "25-02-2025",
            "date_utc": 1740508500,
            "high": 34.43,
            "low": 34.32,
            "open": 34.36,
            "volume": 28288
        },
        "1740508800": {
            "close": 34.47,
            "date": "25-02-2025",
            "date_utc": 1740508800,
            "high": 34.48,
            "low": 34.4,
            "open": 34.41,
            "volume": 28578
        },
        "1740509100": {
            "close": 34.48,
            "date": "25-02-2025",
            "date_utc": 1740509100,
            "high": 34.48,
            "low": 34.44,
            "open": 34.47,
            "volume": 18819
        },
        "1740509400": {
            "close": 34.49,
            "date": "25-02-2025",
            "date_utc": 1740509400,
            "high": 34.53,
            "low": 34.46,
            "open": 34.48,
            "volume": 28362
        },
        "1740509700": {
            "close": 34.46,
            "date": "25-02-2025",
            "date_utc": 1740509700,
            "high": 34.49,
            "low": 34.46,
            "open": 34.49,
            "volume": 19406
        },
        "1740510000": {
            "close": 34.47,
            "date": "25-02-2025",
            "date_utc": 1740510000,
            "high": 34.48,
            "low": 34.44,
            "open": 34.46,
            "volume": 21258
        },
        "1740510300": {
            "close": 34.42,
            "date": "25-02-2025",
            "date_utc": 1740510300,
            "high": 34.5,
            "low": 34.42,
            "open": 34.48,
            "volume": 16703
        },
        "1740510600": {
            "close": 34.38,
            "date": "25-02-2025",
            "date_utc": 1740510600,
            "high": 34.42,
            "low": 34.38,
            "open": 34.42,
            "volume": 19625
        },
        "1740510900": {
            "close": 34.28,
            "date": "25-02-2025",
            "date_utc": 1740510900,
            "high": 34.37,
            "low": 34.26,
            "open": 34.37,
            "volume": 40383
        },
        "1740511200": {
            "close": 34.24,
            "date": "25-02-2025",
            "date_utc": 1740511200,
            "high": 34.27,
            "low": 34.22,
            "open": 34.27,
            "volume": 21948
        },
        "1740511500": {
            "close": 34.24,
            "date": "25-02-2025",
            "date_utc": 1740511500,
            "high": 34.27,
            "low": 34.24,
            "open": 34.25,
            "volume": 21136
        },
        "1740511800": {
            "close": 34.39,
            "date": "25-02-2025",
            "date_utc": 1740511800,
            "high": 34.39,
            "low": 34.24,
            "open": 34.24,
            "volume": 21205
        },
        "1740512100": {
            "close": 34.46,
            "date": "25-02-2025",
            "date_utc": 1740512100,
            "high": 34.46,
            "low": 34.36,
            "open": 34.39,
            "volume": 28952
        },
        "1740512400": {
            "close": 34.51,
            "date": "25-02-2025",
            "date_utc": 1740512400,
            "high": 34.54,
            "low": 34.44,
            "open": 34.45,
            "volume": 40869
        },
        "1740512700": {
            "close": 34.48,
            "date": "25-02-2025",
            "date_utc": 1740512700,
            "high": 34.52,
            "low": 34.42,
            "open": 34.52,
            "volume": 38502
        },
        "1740513000": {
            "close": 34.44,
            "date": "25-02-2025",
            "date_utc": 1740513000,
            "high": 34.48,
            "low": 34.38,
            "open": 34.48,
            "volume": 32396
        },
        "1740513300": {
            "close": 34.43,
            "date": "25-02-2025",
            "date_utc": 1740513300,
            "high": 34.48,
            "low": 34.41,
            "open": 34.44,
            "volume": 32549
        },
        "1740513600": {
            "close": 34.47,
            "date": "25-02-2025",
            "date_utc": 1740513600,
            "high": 34.49,
            "low": 34.4,
            "open": 34.43,
            "volume": 40035
        },
        "1740513900": {
            "close": 34.54,
            "date": "25-02-2025",
            "date_utc": 1740513900,
            "high": 34.54,
            "low": 34.45,
            "open": 34.47,
            "volume": 19457
        },
        "1740514200": {
            "close": 34.55,
            "date": "25-02-2025",
            "date_utc": 1740514200,
            "high": 34.57,
            "low": 34.51,
            "open": 34.54,
            "volume": 29236
        },
        "1740514500": {
            "close": 34.66,
            "date": "25-02-2025",
            "date_utc": 1740514500,
            "high": 34.67,
            "low": 34.55,
            "open": 34.55,
            "volume": 60584
        },
        "1740514800": {
            "close": 34.76,
            "date": "25-02-2025",
            "date_utc": 1740514800,
            "high": 34.76,
            "low": 34.67,
            "open": 34.67,
            "volume": 60167
        },
        "1740515100": {
            "close": 34.61,
            "date": "25-02-2025",
            "date_utc": 1740515100,
            "high": 34.76,
            "low": 34.58,
            "open": 34.76,
            "volume": 37938
        },
        "1740515400": {
            "close": 34.6,
            "date": "25-02-2025",
            "date_utc": 1740515400,
            "high": 34.6,
            "low": 34.55,
            "open": 34.6,
            "volume": 119028
        },
        "1740515700": {
            "close": 34.5,
            "date": "25-02-2025",
            "date_utc": 1740515700,
            "high": 34.61,
            "low": 34.49,
            "open": 34.6,
            "volume": 54915
        },
        "1740516000": {
            "close": 34.42,
            "date": "25-02-2025",
            "date_utc": 1740516000,
            "high": 34.49,
            "low": 34.42,
            "open": 34.49,
            "volume": 46436
        },
        "1740516300": {
            "close": 34.4,
            "date": "25-02-2025",
            "date_utc": 1740516300,
            "high": 34.46,
            "low": 34.4,
            "open": 34.42,
            "volume": 70462
        },
        "1740516600": {
            "close": 34.35,
            "date": "25-02-2025",
            "date_utc": 1740516600,
            "high": 34.48,
            "low": 34.34,
            "open": 34.4,
            "volume": 156864
        },
        "1740516900": {
            "close": 34.38,
            "date": "25-02-2025",
            "date_utc": 1740516900,
            "high": 34.41,
            "low": 34.33,
            "open": 34.36,
            "volume": 340524
        },
        "1740580200": {
            "close": 34.2,
            "date": "26-02-2025",
            "date_utc": 1740580200,
            "high": 34.79,
            "low": 34.2,
            "open": 34.7,
            "volume": 179916
        },
        "1740580500": {
            "close": 34.21,
            "date": "26-02-2025",
            "date_utc": 1740580500,
            "high": 34.33,
            "low": 34.12,
            "open": 34.2,
            "volume": 57764
        },
        "1740580800": {
            "close": 34.42,
            "date": "26-02-2025",
            "date_utc": 1740580800,
            "high": 34.48,
            "low": 34.19,
            "open": 34.19,
            "volume": 66175
        },
        "1740581100": {
            "close": 34.64,
            "date": "26-02-2025",
            "date_utc": 1740581100,
            "high": 34.65,
            "low": 34.41,
            "open": 34.43,
            "volume": 72432
        },
        "1740581400": {
            "close": 34.77,
            "date": "26-02-2025",
            "date_utc": 1740581400,
            "high": 34.77,
            "low": 34.6,
            "open": 34.65,
            "volume": 80423
        },
        "1740581700": {
            "close": 34.77,
            "date": "26-02-2025",
            "date_utc": 1740581700,
            "high": 34.81,
            "low": 34.63,
            "open": 34.76,
            "volume": 57675
        },
        "1740582000": {
            "close": 34.47,
            "date": "26-02-2025",
            "date_utc": 1740582000,
            "high": 34.76,
            "low": 34.45,
            "open": 34.76,
            "volume": 35513
        },
        "1740582300": {
            "close": 34.48,
            "date": "26-02-2025",
            "date_utc": 1740582300,
            "high": 34.51,
            "low": 34.26,
            "open": 34.47,
            "volume": 79032
        },
        "1740582600": {
            "close": 34.55,
            "date": "26-02-2025",
            "date_utc": 1740582600,
            "high": 34.6,
            "low": 34.47,
            "open": 34.49,
            "volume": 51381
        },
        "1740582900": {
            "close": 34.41,
            "date": "26-02-2025",
            "date_utc": 1740582900,
            "high": 34.56,
            "low": 34.38,
            "open": 34.56,
            "volume": 60372
        },
        "1740583200": {
            "close": 34.42,
            "date": "26-02-2025",
            "date_utc": 1740583200,
            "high": 34.43,
            "low": 34.34,
            "open": 34.4,
            "volume": 49278
        },
        "1740583500": {
            "close": 34.32,
            "date": "26-02-2025",
            "date_utc": 1740583500,
            "high": 34.42,
            "low": 34.29,
            "open": 34.42,
            "volume": 56520
        },
        "1740583800": {
            "close": 34.28,
            "date": "26-02-2025",
            "date_utc": 1740583800,
            "high": 34.4,
            "low": 34.27,
            "open": 34.33,
            "volume": 33570
        },
        "1740584100": {
            "close": 34.21,
            "date": "26-02-2025",
            "date_utc": 1740584100,
            "high": 34.31,
            "low": 34.21,
            "open": 34.29,
            "volume": 71687
        },
        "1740584400": {
            "close": 34.37,
            "date": "26-02-2025",
            "date_utc": 1740584400,
            "high": 34.38,
            "low": 34.21,
            "open": 34.21,
            "volume": 34879
        },
        "1740584700": {
            "close": 34.35,
            "date": "26-02-2025",
            "date_utc": 1740584700,
            "high": 34.4,
            "low": 34.3,
            "open": 34.35,
            "volume": 39076
        },
        "1740585000": {
            "close": 34.38,
            "date": "26-02-2025",
            "date_utc": 1740585000,
            "high": 34.46,
            "low": 34.33,
            "open": 34.39,
            "volume": 31660
        },
        "1740585300": {
            "close": 34.41,
            "date": "26-02-2025",
            "date_utc": 1740585300,
            "high": 34.42,
            "low": 34.36,
            "open": 34.36,
            "volume": 16072
        },
        "1740585600": {
            "close": 34.54,
            "date": "26-02-2025",
            "date_utc": 1740585600,
            "high": 34.55,
            "low": 34.42,
            "open": 34.42,
            "volume": 39477
        },
        "1740585900": {
            "close": 34.47,
            "date": "26-02-2025",
            "date_utc": 1740585900,
            "high": 34.54,
            "low": 34.4,
            "open": 34.54,
            "volume": 22762
        },
        "1740586200": {
            "close": 34.49,
            "date": "26-02-2025",
            "date_utc": 1740586200,
            "high": 34.5,
            "low": 34.43,
            "open": 34.47,
            "volume": 15786
        },
        "1740586500": {
            "close": 34.52,
            "date": "26-02-2025",
            "date_utc": 1740586500,
            "high": 34.54,
            "low": 34.47,
            "open": 34.5,
            "volume": 19839
        },
        "1740586800": {
            "close": 34.51,
            "date": "26-02-2025",
            "date_utc": 1740586800,
            "high": 34.56,
            "low": 34.49,
            "open": 34.53,
            "volume": 25405
        },
        "1740587100": {
            "close": 34.51,
            "date": "26-02-2025",
            "date_utc": 1740587100,
            "high": 34.55,
            "low": 34.46,
            "open": 34.52,
            "volume": 42125
        },
        "1740587400": {
            "close": 34.44,
            "date": "26-02-2025",
            "date_utc": 1740587400,
            "high": 34.54,
            "low": 34.42,
            "open": 34.52,
            "volume": 44123
        },
        "1740587700": {
            "close": 34.46,
            "date": "26-02-2025",
            "date_utc": 1740587700,
            "high": 34.53,
            "low": 34.39,
            "open": 34.44,
            "volume": 35806
        },
        "1740588000": {
            "close": 34.41,
            "date": "26-02-2025",
            "date_utc": 1740588000,
            "high": 34.47,
            "low": 34.37,
            "open": 34.46,
            "volume": 14040
        },
        "1740588300": {
            "close": 34.37,
            "date": "26-02-2025",
            "date_utc": 1740588300,
            "high": 34.45,
            "low": 34.37,
            "open": 34.43,
            "volume": 19879
        },
        "1740588600": {
            "close": 34.38,
            "date": "26-02-2025",
            "date_utc": 1740588600,
            "high": 34.43,
            "low": 34.36,
            "open": 34.36,
            "volume": 17302
        },
        "1740588900": {
            "close": 34.27,
            "date": "26-02-2025",
            "date_utc": 1740588900,
            "high": 34.39,
            "low": 34.27,
            "open": 34.38,
            "volume": 26985
        },
        "1740589200": {
            "close": 34.31,
            "date": "26-02-2025",
            "date_utc": 1740589200,
            "high": 34.32,
            "low": 34.21,
            "open": 34.27,
            "volume": 57527
        },
        "1740589500": {
            "close": 34.28,
            "date": "26-02-2025",
            "date_utc": 1740589500,
            "high": 34.35,
            "low": 34.26,
            "open": 34.33,
            "volume": 23250
        },
        "1740589800": {
            "close": 34.29,
            "date": "26-02-2025",
            "date_utc": 1740589800,
            "high": 34.3,
            "low": 34.28,
            "open": 34.28,
            "volume": 14440
        },
        "1740590100": {
            "close": 34.26,
            "date": "26-02-2025",
            "date_utc": 1740590100,
            "high": 34.3,
            "low": 34.18,
            "open": 34.29,
            "volume": 61171
        },
        "1740590400": {
            "close": 34.21,
            "date": "26-02-2025",
            "date_utc": 1740590400,
            "high": 34.27,
            "low": 34.19,
            "open": 34.25,
            "volume": 24788
        },
        "1740590700": {
            "close": 34.31,
            "date": "26-02-2025",
            "date_utc": 1740590700,
            "high": 34.34,
            "low": 34.16,
            "open": 34.21,
            "volume": 40076
        },
        "1740591000": {
            "close": 34.25,
            "date": "26-02-2025",
            "date_utc": 1740591000,
            "high": 34.35,
            "low": 34.22,
            "open": 34.32,
            "volume": 18104
        },
        "1740591300": {
            "close": 34.19,
            "date": "26-02-2025",
            "date_utc": 1740591300,
            "high": 34.26,
            "low": 34.18,
            "open": 34.26,
            "volume": 27022
        },
        "1740591600": {
            "close": 34.27,
            "date": "26-02-2025",
            "date_utc": 1740591600,
            "high": 34.27,
            "low": 34.15,
            "open": 34.19,
            "volume": 21498
        },
        "1740591900": {
            "close": 34.34,
            "date": "26-02-2025",
            "date_utc": 1740591900,
            "high": 34.34,
            "low": 34.25,
            "open": 34.28,
            "volume": 17707
        },
        "1740592200": {
            "close": 34.3,
            "date": "26-02-2025",
            "date_utc": 1740592200,
            "high": 34.34,
            "low": 34.24,
            "open": 34.34,
            "volume": 12416
        },
        "1740592500": {
            "close": 34.22,
            "date": "26-02-2025",
            "date_utc": 1740592500,
            "high": 34.28,
            "low": 34.19,
            "open": 34.28,
            "volume": 20556
        },
        "1740592800": {
            "close": 34.24,
            "date": "26-02-2025",
            "date_utc": 1740592800,
            "high": 34.24,
            "low": 34.19,
            "open": 34.21,
            "volume": 10537
        },
        "1740593100": {
            "close": 34.27,
            "date": "26-02-2025",
            "date_utc": 1740593100,
            "high": 34.27,
            "low": 34.21,
            "open": 34.25,
            "volume": 22679
        },
        "1740593400": {
            "close": 34.22,
            "date": "26-02-2025",
            "date_utc": 1740593400,
            "high": 34.29,
            "low": 34.2,
            "open": 34.28,
            "volume": 13894
        },
        "1740593700": {
            "close": 34.14,
            "date": "26-02-2025",
            "date_utc": 1740593700,
            "high": 34.21,
            "low": 34.12,
            "open": 34.21,
            "volume": 30381
        },
        "1740594000": {
            "close": 34.13,
            "date": "26-02-2025",
            "date_utc": 1740594000,
            "high": 34.16,
            "low": 34.12,
            "open": 34.13,
            "volume": 19234
        },
        "1740594300": {
            "close": 34.04,
            "date": "26-02-2025",
            "date_utc": 1740594300,
            "high": 34.14,
            "low": 34.04,
            "open": 34.13,
            "volume": 26007
        },
        "1740594600": {
            "close": 34.09,
            "date": "26-02-2025",
            "date_utc": 1740594600,
            "high": 34.11,
            "low": 34.03,
            "open": 34.05,
            "volume": 14379
        },
        "1740594900": {
            "close": 34.09,
            "date": "26-02-2025",
            "date_utc": 1740594900,
            "high": 34.11,
            "low": 34.06,
            "open": 34.08,
            "volume": 18207
        },
        "1740595200": {
            "close": 34.06,
            "date": "26-02-2025",
            "date_utc": 1740595200,
            "high": 34.11,
            "low": 34.05,
            "open": 34.11,
            "volume": 13402
        },
        "1740595500": {
            "close": 33.98,
            "date": "26-02-2025",
            "date_utc": 1740595500,
            "high": 34.12,
            "low": 33.98,
            "open": 34.05,
            "volume": 42760
        },
        "1740595800": {
            "close": 33.9,
            "date": "26-02-2025",
            "date_utc": 1740595800,
            "high": 33.98,
            "low": 33.9,
            "open": 33.98,
            "volume": 69368
        },
        "1740596100": {
            "close": 33.88,
            "date": "26-02-2025",
            "date_utc": 1740596100,
            "high": 33.91,
            "low": 33.86,
            "open": 33.91,
            "volume": 29329
        },
        "1740596400": {
            "close": 33.81,
            "date": "26-02-2025",
            "date_utc": 1740596400,
            "high": 33.9,
            "low": 33.81,
            "open": 33.87,
            "volume": 34456
        },
        "1740596700": {
            "close": 33.74,
            "date": "26-02-2025",
            "date_utc": 1740596700,
            "high": 33.81,
            "low": 33.72,
            "open": 33.81,
            "volume": 47077
        },
        "1740597000": {
            "close": 33.72,
            "date": "26-02-2025",
            "date_utc": 1740597000,
            "high": 33.74,
            "low": 33.68,
            "open": 33.74,
            "volume": 32444
        },
        "1740597300": {
            "close": 33.86,
            "date": "26-02-2025",
            "date_utc": 1740597300,
            "high": 33.86,
            "low": 33.69,
            "open": 33.72,
            "volume": 44561
        },
        "1740597600": {
            "close": 33.76,
            "date": "26-02-2025",
            "date_utc": 1740597600,
            "high": 33.88,
            "low": 33.73,
            "open": 33.87,
            "volume": 34792
        },
        "1740597900": {
            "close": 33.77,
            "date": "26-02-2025",
            "date_utc": 1740597900,
            "high": 33.81,
            "low": 33.73,
            "open": 33.74,
            "volume": 28304
        },
        "1740598200": {
            "close": 33.79,
            "date": "26-02-2025",
            "date_utc": 1740598200,
            "high": 33.86,
            "low": 33.76,
            "open": 33.77,
            "volume": 32317
        },
        "1740598500": {
            "close": 33.79,
            "date": "26-02-2025",
            "date_utc": 1740598500,
            "high": 33.8,
            "low": 33.78,
            "open": 33.79,
            "volume": 22781
        },
        "1740598800": {
            "close": 33.74,
            "date": "26-02-2025",
            "date_utc": 1740598800,
            "high": 33.83,
            "low": 33.74,
            "open": 33.79,
            "volume": 27638
        },
        "1740599100": {
            "close": 33.74,
            "date": "26-02-2025",
            "date_utc": 1740599100,
            "high": 33.79,
            "low": 33.74,
            "open": 33.75,
            "volume": 23683
        },
        "1740599400": {
            "close": 33.72,
            "date": "26-02-2025",
            "date_utc": 1740599400,
            "high": 33.75,
            "low": 33.7,
            "open": 33.74,
            "volume": 29151
        },
        "1740599700": {
            "close": 33.6,
            "date": "26-02-2025",
            "date_utc": 1740599700,
            "high": 33.72,
            "low": 33.59,
            "open": 33.72,
            "volume": 37465
        },
        "1740600000": {
            "close": 33.62,
            "date": "26-02-2025",
            "date_utc": 1740600000,
            "high": 33.65,
            "low": 33.58,
            "open": 33.6,
            "volume": 21899
        },
        "1740600300": {
            "close": 33.66,
            "date": "26-02-2025",
            "date_utc": 1740600300,
            "high": 33.68,
            "low": 33.62,
            "open": 33.62,
            "volume": 36612
        },
        "1740600600": {
            "close": 33.61,
            "date": "26-02-2025",
            "date_utc": 1740600600,
            "high": 33.67,
            "low": 33.61,
            "open": 33.67,
            "volume": 32678
        },
        "1740600900": {
            "close": 33.59,
            "date": "26-02-2025",
            "date_utc": 1740600900,
            "high": 33.62,
            "low": 33.56,
            "open": 33.6,
            "volume": 46677
        },
        "1740601200": {
            "close": 33.58,
            "date": "26-02-2025",
            "date_utc": 1740601200,
            "high": 33.6,
            "low": 33.57,
            "open": 33.59,
            "volume": 33215
        },
        "1740601500": {
            "close": 33.64,
            "date": "26-02-2025",
            "date_utc": 1740601500,
            "high": 33.65,
            "low": 33.6,
            "open": 33.6,
            "volume": 50029
        },
        "1740601800": {
            "close": 33.58,
            "date": "26-02-2025",
            "date_utc": 1740601800,
            "high": 33.63,
            "low": 33.53,
            "open": 33.63,
            "volume": 67189
        },
        "1740602100": {
            "close": 33.55,
            "date": "26-02-2025",
            "date_utc": 1740602100,
            "high": 33.61,
            "low": 33.53,
            "open": 33.58,
            "volume": 79900
        },
        "1740602400": {
            "close": 33.55,
            "date": "26-02-2025",
            "date_utc": 1740602400,
            "high": 33.56,
            "low": 33.5,
            "open": 33.56,
            "volume": 157842
        },
        "1740602700": {
            "close": 33.59,
            "date": "26-02-2025",
            "date_utc": 1740602700,
            "high": 33.62,
            "low": 33.55,
            "open": 33.55,
            "volume": 121819
        },
        "1740603000": {
            "close": 33.6,
            "date": "26-02-2025",
            "date_utc": 1740603000,
            "high": 33.63,
            "low": 33.56,
            "open": 33.6,
            "volume": 130058
        },
        "1740603300": {
            "close": 33.66,
            "date": "26-02-2025",
            "date_utc": 1740603300,
            "high": 33.69,
            "low": 33.6,
            "open": 33.61,
            "volume": 389629
        },
        "1740666600": {
            "close": 33.8,
            "date": "27-02-2025",
            "date_utc": 1740666600,
            "high": 34.02,
            "low": 33.78,
            "open": 33.78,
            "volume": 157225
        },
        "1740666900": {
            "close": 33.74,
            "date": "27-02-2025",
            "date_utc": 1740666900,
            "high": 33.82,
            "low": 33.66,
            "open": 33.8,
            "volume": 58641
        },
        "1740667200": {
            "close": 33.74,
            "date": "27-02-2025",
            "date_utc": 1740667200,
            "high": 33.75,
            "low": 33.58,
            "open": 33.72,
            "volume": 42716
        },
        "1740667500": {
            "close": 33.93,
            "date": "27-02-2025",
            "date_utc": 1740667500,
            "high": 33.97,
            "low": 33.77,
            "open": 33.77,
            "volume": 67823
        },
        "1740667800": {
            "close": 33.8,
            "date": "27-02-2025",
            "date_utc": 1740667800,
            "high": 33.98,
            "low": 33.79,
            "open": 33.93,
            "volume": 69184
        },
        "1740668100": {
            "close": 33.57,
            "date": "27-02-2025",
            "date_utc": 1740668100,
            "high": 33.82,
            "low": 33.53,
            "open": 33.79,
            "volume": 56506
        },
        "1740668400": {
            "close": 33.64,
            "date": "27-02-2025",
            "date_utc": 1740668400,
            "high": 33.64,
            "low": 33.4,
            "open": 33.56,
            "volume": 137251
        },
        "1740668700": {
            "close": 33.71,
            "date": "27-02-2025",
            "date_utc": 1740668700,
            "high": 33.83,
            "low": 33.63,
            "open": 33.64,
            "volume": 52564
        },
        "1740669000": {
            "close": 33.92,
            "date": "27-02-2025",
            "date_utc": 1740669000,
            "high": 33.92,
            "low": 33.67,
            "open": 33.67,
            "volume": 67093
        },
        "1740669300": {
            "close": 33.9,
            "date": "27-02-2025",
            "date_utc": 1740669300,
            "high": 34.01,
            "low": 33.86,
            "open": 33.9,
            "volume": 91462
        },
        "1740669600": {
            "close": 33.92,
            "date": "27-02-2025",
            "date_utc": 1740669600,
            "high": 34,
            "low": 33.75,
            "open": 33.89,
            "volume": 87099
        },
        "1740669900": {
            "close": 33.92,
            "date": "27-02-2025",
            "date_utc": 1740669900,
            "high": 33.94,
            "low": 33.85,
            "open": 33.91,
            "volume": 36366
        },
        "1740670200": {
            "close": 33.77,
            "date": "27-02-2025",
            "date_utc": 1740670200,
            "high": 33.93,
            "low": 33.73,
            "open": 33.92,
            "volume": 38327
        },
        "1740670500": {
            "close": 33.88,
            "date": "27-02-2025",
            "date_utc": 1740670500,
            "high": 33.92,
            "low": 33.71,
            "open": 33.76,
            "volume": 28531
        },
        "1740670800": {
            "close": 33.85,
            "date": "27-02-2025",
            "date_utc": 1740670800,
            "high": 33.89,
            "low": 33.8,
            "open": 33.88,
            "volume": 21087
        },
        "1740671100": {
            "close": 33.93,
            "date": "27-02-2025",
            "date_utc": 1740671100,
            "high": 33.99,
            "low": 33.79,
            "open": 33.84,
            "volume": 42314
        },
        "1740671400": {
            "close": 33.87,
            "date": "27-02-2025",
            "date_utc": 1740671400,
            "high": 33.97,
            "low": 33.87,
            "open": 33.94,
            "volume": 28172
        },
        "1740671700": {
            "close": 33.71,
            "date": "27-02-2025",
            "date_utc": 1740671700,
            "high": 33.89,
            "low": 33.71,
            "open": 33.88,
            "volume": 35877
        },
        "1740672000": {
            "close": 33.79,
            "date": "27-02-2025",
            "date_utc": 1740672000,
            "high": 33.86,
            "low": 33.72,
            "open": 33.72,
            "volume": 27499
        },
        "1740672300": {
            "close": 33.84,
            "date": "27-02-2025",
            "date_utc": 1740672300,
            "high": 33.87,
            "low": 33.78,
            "open": 33.79,
            "volume": 24368
        },
        "1740672600": {
            "close": 33.9,
            "date": "27-02-2025",
            "date_utc": 1740672600,
            "high": 33.92,
            "low": 33.84,
            "open": 33.85,
            "volume": 31611
        },
        "1740672900": {
            "close": 33.96,
            "date": "27-02-2025",
            "date_utc": 1740672900,
            "high": 33.97,
            "low": 33.91,
            "open": 33.91,
            "volume": 21770
        },
        "1740673200": {
            "close": 33.92,
            "date": "27-02-2025",
            "date_utc": 1740673200,
            "high": 33.98,
            "low": 33.92,
            "open": 33.96,
            "volume": 21262
        },
        "1740673500": {
            "close": 33.88,
            "date": "27-02-2025",
            "date_utc": 1740673500,
            "high": 33.92,
            "low": 33.84,
            "open": 33.92,
            "volume": 36499
        },
        "1740673800": {
            "close": 34.02,
            "date": "27-02-2025",
            "date_utc": 1740673800,
            "high": 34.05,
            "low": 33.87,
            "open": 33.88,
            "volume": 35011
        },
        "1740674100": {
            "close": 34.06,
            "date": "27-02-2025",
            "date_utc": 1740674100,
            "high": 34.07,
            "low": 33.98,
            "open": 34.01,
            "volume": 64684
        },
        "1740674400": {
            "close": 34.07,
            "date": "27-02-2025",
            "date_utc": 1740674400,
            "high": 34.08,
            "low": 34.01,
            "open": 34.05,
            "volume": 24379
        },
        "1740674700": {
            "close": 34.1,
            "date": "27-02-2025",
            "date_utc": 1740674700,
            "high": 34.14,
            "low": 34.03,
            "open": 34.08,
            "volume": 33499
        },
        "1740675000": {
            "close": 34.1,
            "date": "27-02-2025",
            "date_utc": 1740675000,
            "high": 34.15,
            "low": 34.04,
            "open": 34.11,
            "volume": 37237
        },
        "1740675300": {
            "close": 33.99,
            "date": "27-02-2025",
            "date_utc": 1740675300,
            "high": 34.1,
            "low": 33.98,
            "open": 34.1,
            "volume": 26915
        },
        "1740675600": {
            "close": 34.01,
            "date": "27-02-2025",
            "date_utc": 1740675600,
            "high": 34.05,
            "low": 33.96,
            "open": 33.99,
            "volume": 29034
        },
        "1740675900": {
            "close": 33.94,
            "date": "27-02-2025",
            "date_utc": 1740675900,
            "high": 34.04,
            "low": 33.94,
            "open": 34.01,
            "volume": 26989
        },
        "1740676200": {
            "close": 33.97,
            "date": "27-02-2025",
            "date_utc": 1740676200,
            "high": 33.98,
            "low": 33.94,
            "open": 33.94,
            "volume": 23555
        },
        "1740676500": {
            "close": 33.88,
            "date": "27-02-2025",
            "date_utc": 1740676500,
            "high": 33.97,
            "low": 33.87,
            "open": 33.97,
            "volume": 20707
        },
        "1740676800": {
            "close": 33.93,
            "date": "27-02-2025",
            "date_utc": 1740676800,
            "high": 33.93,
            "low": 33.83,
            "open": 33.87,
            "volume": 16922
        },
        "1740677100": {
            "close": 34.03,
            "date": "27-02-2025",
            "date_utc": 1740677100,
            "high": 34.03,
            "low": 33.92,
            "open": 33.93,
            "volume": 16831
        },
        "1740677400": {
            "close": 34.02,
            "date": "27-02-2025",
            "date_utc": 1740677400,
            "high": 34.06,
            "low": 33.99,
            "open": 34.02,
            "volume": 16533
        },
        "1740677700": {
            "close": 34.1,
            "date": "27-02-2025",
            "date_utc": 1740677700,
            "high": 34.1,
            "low": 34.02,
            "open": 34.02,
            "volume": 29245
        },
        "1740678000": {
            "close": 33.95,
            "date": "27-02-2025",
            "date_utc": 1740678000,
            "high": 34.12,
            "low": 33.95,
            "open": 34.1,
            "volume": 28996
        },
        "1740678300": {
            "close": 33.96,
            "date": "27-02-2025",
            "date_utc": 1740678300,
            "high": 33.99,
            "low": 33.94,
            "open": 33.95,
            "volume": 15832
        },
        "1740678600": {
            "close": 33.96,
            "date": "27-02-2025",
            "date_utc": 1740678600,
            "high": 33.99,
            "low": 33.91,
            "open": 33.94,
            "volume": 17029
        },
        "1740678900": {
            "close": 33.96,
            "date": "27-02-2025",
            "date_utc": 1740678900,
            "high": 34,
            "low": 33.94,
            "open": 33.97,
            "volume": 29359
        },
        "1740679200": {
            "close": 34.02,
            "date": "27-02-2025",
            "date_utc": 1740679200,
            "high": 34.08,
            "low": 33.96,
            "open": 33.96,
            "volume": 15274
        },
        "1740679500": {
            "close": 34.04,
            "date": "27-02-2025",
            "date_utc": 1740679500,
            "high": 34.05,
            "low": 34,
            "open": 34.02,
            "volume": 17183
        },
        "1740679800": {
            "close": 34.11,
            "date": "27-02-2025",
            "date_utc": 1740679800,
            "high": 34.13,
            "low": 34.03,
            "open": 34.03,
            "volume": 18338
        },
        "1740680100": {
            "close": 34.13,
            "date": "27-02-2025",
            "date_utc": 1740680100,
            "high": 34.15,
            "low": 34.1,
            "open": 34.11,
            "volume": 17190
        },
        "1740680400": {
            "close": 34.17,
            "date": "27-02-2025",
            "date_utc": 1740680400,
            "high": 34.18,
            "low": 34.12,
            "open": 34.13,
            "volume": 19813
        },
        "1740680700": {
            "close": 34.15,
            "date": "27-02-2025",
            "date_utc": 1740680700,
            "high": 34.21,
            "low": 34.15,
            "open": 34.18,
            "volume": 30070
        },
        "1740681000": {
            "close": 34.2,
            "date": "27-02-2025",
            "date_utc": 1740681000,
            "high": 34.21,
            "low": 34.15,
            "open": 34.16,
            "volume": 18468
        },
        "1740681300": {
            "close": 34.14,
            "date": "27-02-2025",
            "date_utc": 1740681300,
            "high": 34.22,
            "low": 34.09,
            "open": 34.2,
            "volume": 53537
        },
        "1740681600": {
            "close": 34.07,
            "date": "27-02-2025",
            "date_utc": 1740681600,
            "high": 34.15,
            "low": 34.06,
            "open": 34.15,
            "volume": 40382
        },
        "1740681900": {
            "close": 34.03,
            "date": "27-02-2025",
            "date_utc": 1740681900,
            "high": 34.07,
            "low": 34.01,
            "open": 34.07,
            "volume": 48239
        },
        "1740682200": {
            "close": 34.04,
            "date": "27-02-2025",
            "date_utc": 1740682200,
            "high": 34.12,
            "low": 34.01,
            "open": 34.03,
            "volume": 99997
        },
        "1740682500": {
            "close": 33.97,
            "date": "27-02-2025",
            "date_utc": 1740682500,
            "high": 34.08,
            "low": 33.97,
            "open": 34.03,
            "volume": 35449
        },
        "1740682800": {
            "close": 33.99,
            "date": "27-02-2025",
            "date_utc": 1740682800,
            "high": 34.01,
            "low": 33.95,
            "open": 33.97,
            "volume": 70677
        },
        "1740683100": {
            "close": 33.99,
            "date": "27-02-2025",
            "date_utc": 1740683100,
            "high": 34.02,
            "low": 33.98,
            "open": 33.99,
            "volume": 25092
        },
        "1740683400": {
            "close": 33.91,
            "date": "27-02-2025",
            "date_utc": 1740683400,
            "high": 34.01,
            "low": 33.91,
            "open": 33.99,
            "volume": 23749
        },
        "1740683700": {
            "close": 33.98,
            "date": "27-02-2025",
            "date_utc": 1740683700,
            "high": 33.99,
            "low": 33.87,
            "open": 33.91,
            "volume": 93553
        },
        "1740684000": {
            "close": 33.88,
            "date": "27-02-2025",
            "date_utc": 1740684000,
            "high": 33.99,
            "low": 33.86,
            "open": 33.98,
            "volume": 36675
        },
        "1740684300": {
            "close": 33.78,
            "date": "27-02-2025",
            "date_utc": 1740684300,
            "high": 33.9,
            "low": 33.78,
            "open": 33.89,
            "volume": 30316
        },
        "1740684600": {
            "close": 33.56,
            "date": "27-02-2025",
            "date_utc": 1740684600,
            "high": 33.8,
            "low": 33.56,
            "open": 33.79,
            "volume": 67612
        },
        "1740684900": {
            "close": 33.6,
            "date": "27-02-2025",
            "date_utc": 1740684900,
            "high": 33.68,
            "low": 33.55,
            "open": 33.57,
            "volume": 76764
        },
        "1740685200": {
            "close": 33.57,
            "date": "27-02-2025",
            "date_utc": 1740685200,
            "high": 33.62,
            "low": 33.5,
            "open": 33.6,
            "volume": 25695
        },
        "1740685500": {
            "close": 33.56,
            "date": "27-02-2025",
            "date_utc": 1740685500,
            "high": 33.62,
            "low": 33.54,
            "open": 33.58,
            "volume": 51475
        },
        "1740685800": {
            "close": 33.63,
            "date": "27-02-2025",
            "date_utc": 1740685800,
            "high": 33.65,
            "low": 33.56,
            "open": 33.57,
            "volume": 33993
        },
        "1740686100": {
            "close": 33.58,
            "date": "27-02-2025",
            "date_utc": 1740686100,
            "high": 33.66,
            "low": 33.57,
            "open": 33.64,
            "volume": 23088
        },
        "1740686400": {
            "close": 33.56,
            "date": "27-02-2025",
            "date_utc": 1740686400,
            "high": 33.59,
            "low": 33.52,
            "open": 33.58,
            "volume": 34463
        },
        "1740686700": {
            "close": 33.49,
            "date": "27-02-2025",
            "date_utc": 1740686700,
            "high": 33.55,
            "low": 33.48,
            "open": 33.55,
            "volume": 28154
        },
        "1740687000": {
            "close": 33.46,
            "date": "27-02-2025",
            "date_utc": 1740687000,
            "high": 33.51,
            "low": 33.42,
            "open": 33.48,
            "volume": 39936
        },
        "1740687300": {
            "close": 33.37,
            "date": "27-02-2025",
            "date_utc": 1740687300,
            "high": 33.48,
            "low": 33.36,
            "open": 33.46,
            "volume": 48411
        },
        "1740687600": {
            "close": 33.4,
            "date": "27-02-2025",
            "date_utc": 1740687600,
            "high": 33.44,
            "low": 33.37,
            "open": 33.37,
            "volume": 37472
        },
        "1740687900": {
            "close": 33.35,
            "date": "27-02-2025",
            "date_utc": 1740687900,
            "high": 33.42,
            "low": 33.34,
            "open": 33.41,
            "volume": 43089
        },
        "1740688200": {
            "close": 33.49,
            "date": "27-02-2025",
            "date_utc": 1740688200,
            "high": 33.52,
            "low": 33.34,
            "open": 33.35,
            "volume": 48548
        },
        "1740688500": {
            "close": 33.63,
            "date": "27-02-2025",
            "date_utc": 1740688500,
            "high": 33.64,
            "low": 33.51,
            "open": 33.51,
            "volume": 66059
        },
        "1740688800": {
            "close": 33.53,
            "date": "27-02-2025",
            "date_utc": 1740688800,
            "high": 33.62,
            "low": 33.48,
            "open": 33.62,
            "volume": 61398
        },
        "1740689100": {
            "close": 33.56,
            "date": "27-02-2025",
            "date_utc": 1740689100,
            "high": 33.56,
            "low": 33.43,
            "open": 33.53,
            "volume": 93369
        },
        "1740689400": {
            "close": 33.53,
            "date": "27-02-2025",
            "date_utc": 1740689400,
            "high": 33.62,
            "low": 33.51,
            "open": 33.55,
            "volume": 102250
        },
        "1740689700": {
            "close": 33.44,
            "date": "27-02-2025",
            "date_utc": 1740689700,
            "high": 33.53,
            "low": 33.43,
            "open": 33.52,
            "volume": 260241
        },
        "1740753000": {
            "close": 32.69,
            "date": "28-02-2025",
            "date_utc": 1740753000,
            "high": 33.06,
            "low": 32.55,
            "open": 33,
            "volume": 171963
        },
        "1740753300": {
            "close": 32.92,
            "date": "28-02-2025",
            "date_utc": 1740753300,
            "high": 32.93,
            "low": 32.68,
            "open": 32.7,
            "volume": 66121
        },
        "1740753600": {
            "close": 32.95,
            "date": "28-02-2025",
            "date_utc": 1740753600,
            "high": 32.95,
            "low": 32.8,
            "open": 32.92,
            "volume": 37435
        },
        "1740753900": {
            "close": 32.8,
            "date": "28-02-2025",
            "date_utc": 1740753900,
            "high": 33.01,
            "low": 32.8,
            "open": 32.93,
            "volume": 45919
        },
        "1740754200": {
            "close": 32.83,
            "date": "28-02-2025",
            "date_utc": 1740754200,
            "high": 32.94,
            "low": 32.8,
            "open": 32.83,
            "volume": 51889
        },
        "1740754500": {
            "close": 32.86,
            "date": "28-02-2025",
            "date_utc": 1740754500,
            "high": 32.87,
            "low": 32.74,
            "open": 32.83,
            "volume": 41892
        },
        "1740754800": {
            "close": 32.79,
            "date": "28-02-2025",
            "date_utc": 1740754800,
            "high": 32.85,
            "low": 32.7,
            "open": 32.85,
            "volume": 78730
        },
        "1740755100": {
            "close": 32.85,
            "date": "28-02-2025",
            "date_utc": 1740755100,
            "high": 32.89,
            "low": 32.69,
            "open": 32.79,
            "volume": 56169
        },
        "1740755400": {
            "close": 32.98,
            "date": "28-02-2025",
            "date_utc": 1740755400,
            "high": 32.99,
            "low": 32.83,
            "open": 32.85,
            "volume": 32486
        },
        "1740755700": {
            "close": 32.93,
            "date": "28-02-2025",
            "date_utc": 1740755700,
            "high": 32.99,
            "low": 32.88,
            "open": 32.98,
            "volume": 40424
        },
        "1740756000": {
            "close": 33.07,
            "date": "28-02-2025",
            "date_utc": 1740756000,
            "high": 33.1,
            "low": 32.91,
            "open": 32.91,
            "volume": 38993
        },
        "1740756300": {
            "close": 33.19,
            "date": "28-02-2025",
            "date_utc": 1740756300,
            "high": 33.19,
            "low": 33.05,
            "open": 33.06,
            "volume": 32588
        },
        "1740756600": {
            "close": 33.22,
            "date": "28-02-2025",
            "date_utc": 1740756600,
            "high": 33.24,
            "low": 33.17,
            "open": 33.17,
            "volume": 18578
        },
        "1740756900": {
            "close": 33.14,
            "date": "28-02-2025",
            "date_utc": 1740756900,
            "high": 33.22,
            "low": 33.11,
            "open": 33.22,
            "volume": 36327
        },
        "1740757200": {
            "close": 33.1,
            "date": "28-02-2025",
            "date_utc": 1740757200,
            "high": 33.14,
            "low": 33.09,
            "open": 33.14,
            "volume": 20842
        },
        "1740757500": {
            "close": 33.12,
            "date": "28-02-2025",
            "date_utc": 1740757500,
            "high": 33.17,
            "low": 33.07,
            "open": 33.1,
            "volume": 28169
        },
        "1740757800": {
            "close": 33.18,
            "date": "28-02-2025",
            "date_utc": 1740757800,
            "high": 33.22,
            "low": 33.13,
            "open": 33.13,
            "volume": 25046
        },
        "1740758100": {
            "close": 33.2,
            "date": "28-02-2025",
            "date_utc": 1740758100,
            "high": 33.22,
            "low": 33.14,
            "open": 33.18,
            "volume": 31750
        },
        "1740758400": {
            "close": 33.27,
            "date": "28-02-2025",
            "date_utc": 1740758400,
            "high": 33.32,
            "low": 33.18,
            "open": 33.2,
            "volume": 21774
        },
        "1740758700": {
            "close": 33.27,
            "date": "28-02-2025",
            "date_utc": 1740758700,
            "high": 33.36,
            "low": 33.27,
            "open": 33.29,
            "volume": 27112
        },
        "1740759000": {
            "close": 33.22,
            "date": "28-02-2025",
            "date_utc": 1740759000,
            "high": 33.31,
            "low": 33.19,
            "open": 33.27,
            "volume": 60955
        },
        "1740759300": {
            "close": 33.13,
            "date": "28-02-2025",
            "date_utc": 1740759300,
            "high": 33.21,
            "low": 33.11,
            "open": 33.21,
            "volume": 39003
        },
        "1740759600": {
            "close": 33.15,
            "date": "28-02-2025",
            "date_utc": 1740759600,
            "high": 33.2,
            "low": 33.11,
            "open": 33.11,
            "volume": 18496
        },
        "1740759900": {
            "close": 33.02,
            "date": "28-02-2025",
            "date_utc": 1740759900,
            "high": 33.1,
            "low": 33.01,
            "open": 33.09,
            "volume": 41735
        },
        "1740760200": {
            "close": 33.18,
            "date": "28-02-2025",
            "date_utc": 1740760200,
            "high": 33.19,
            "low": 33.01,
            "open": 33.01,
            "volume": 53491
        },
        "1740760500": {
            "close": 33.21,
            "date": "28-02-2025",
            "date_utc": 1740760500,
            "high": 33.22,
            "low": 33.16,
            "open": 33.2,
            "volume": 29580
        },
        "1740760800": {
            "close": 33.2,
            "date": "28-02-2025",
            "date_utc": 1740760800,
            "high": 33.24,
            "low": 33.17,
            "open": 33.22,
            "volume": 35335
        },
        "1740761100": {
            "close": 33.23,
            "date": "28-02-2025",
            "date_utc": 1740761100,
            "high": 33.24,
            "low": 33.19,
            "open": 33.21,
            "volume": 14088
        },
        "1740761400": {
            "close": 33.19,
            "date": "28-02-2025",
            "date_utc": 1740761400,
            "high": 33.24,
            "low": 33.15,
            "open": 33.22,
            "volume": 20747
        },
        "1740761700": {
            "close": 33.12,
            "date": "28-02-2025",
            "date_utc": 1740761700,
            "high": 33.21,
            "low": 33.11,
            "open": 33.19,
            "volume": 24229
        },
        "1740762000": {
            "close": 33.13,
            "date": "28-02-2025",
            "date_utc": 1740762000,
            "high": 33.15,
            "low": 33.1,
            "open": 33.13,
            "volume": 15843
        },
        "1740762300": {
            "close": 33.13,
            "date": "28-02-2025",
            "date_utc": 1740762300,
            "high": 33.21,
            "low": 33.12,
            "open": 33.13,
            "volume": 19994
        },
        "1740762600": {
            "close": 33.19,
            "date": "28-02-2025",
            "date_utc": 1740762600,
            "high": 33.21,
            "low": 33.13,
            "open": 33.14,
            "volume": 15310
        },
        "1740762900": {
            "close": 33.27,
            "date": "28-02-2025",
            "date_utc": 1740762900,
            "high": 33.28,
            "low": 33.18,
            "open": 33.19,
            "volume": 11957
        },
        "1740763200": {
            "close": 33.2,
            "date": "28-02-2025",
            "date_utc": 1740763200,
            "high": 33.28,
            "low": 33.18,
            "open": 33.28,
            "volume": 22565
        },
        "1740763500": {
            "close": 33.19,
            "date": "28-02-2025",
            "date_utc": 1740763500,
            "high": 33.22,
            "low": 33.16,
            "open": 33.2,
            "volume": 15042
        },
        "1740763800": {
            "close": 33.14,
            "date": "28-02-2025",
            "date_utc": 1740763800,
            "high": 33.2,
            "low": 33.13,
            "open": 33.2,
            "volume": 16105
        },
        "1740764100": {
            "close": 33.11,
            "date": "28-02-2025",
            "date_utc": 1740764100,
            "high": 33.15,
            "low": 33.1,
            "open": 33.15,
            "volume": 37868
        },
        "1740764400": {
            "close": 33.04,
            "date": "28-02-2025",
            "date_utc": 1740764400,
            "high": 33.14,
            "low": 33.03,
            "open": 33.1,
            "volume": 28788
        },
        "1740764700": {
            "close": 32.94,
            "date": "28-02-2025",
            "date_utc": 1740764700,
            "high": 33.06,
            "low": 32.94,
            "open": 33.04,
            "volume": 46793
        },
        "1740765000": {
            "close": 32.98,
            "date": "28-02-2025",
            "date_utc": 1740765000,
            "high": 33.03,
            "low": 32.94,
            "open": 32.95,
            "volume": 29625
        },
        "1740765300": {
            "close": 32.88,
            "date": "28-02-2025",
            "date_utc": 1740765300,
            "high": 32.98,
            "low": 32.87,
            "open": 32.98,
            "volume": 31516
        },
        "1740765600": {
            "close": 32.87,
            "date": "28-02-2025",
            "date_utc": 1740765600,
            "high": 32.94,
            "low": 32.87,
            "open": 32.87,
            "volume": 17488
        },
        "1740765900": {
            "close": 32.86,
            "date": "28-02-2025",
            "date_utc": 1740765900,
            "high": 32.9,
            "low": 32.85,
            "open": 32.87,
            "volume": 19206
        },
        "1740766200": {
            "close": 32.9,
            "date": "28-02-2025",
            "date_utc": 1740766200,
            "high": 32.9,
            "low": 32.83,
            "open": 32.88,
            "volume": 18205
        },
        "1740766500": {
            "close": 32.83,
            "date": "28-02-2025",
            "date_utc": 1740766500,
            "high": 32.93,
            "low": 32.82,
            "open": 32.9,
            "volume": 36221
        },
        "1740766800": {
            "close": 32.87,
            "date": "28-02-2025",
            "date_utc": 1740766800,
            "high": 32.95,
            "low": 32.82,
            "open": 32.83,
            "volume": 31807
        },
        "1740767100": {
            "close": 32.98,
            "date": "28-02-2025",
            "date_utc": 1740767100,
            "high": 33,
            "low": 32.87,
            "open": 32.87,
            "volume": 35841
        },
        "1740767400": {
            "close": 33.08,
            "date": "28-02-2025",
            "date_utc": 1740767400,
            "high": 33.08,
            "low": 32.97,
            "open": 32.99,
            "volume": 27650
        },
        "1740767700": {
            "close": 33.22,
            "date": "28-02-2025",
            "date_utc": 1740767700,
            "high": 33.22,
            "low": 33.07,
            "open": 33.07,
            "volume": 43988
        },
        "1740768000": {
            "close": 33.16,
            "date": "28-02-2025",
            "date_utc": 1740768000,
            "high": 33.25,
            "low": 33.11,
            "open": 33.22,
            "volume": 23939
        },
        "1740768300": {
            "close": 33.15,
            "date": "28-02-2025",
            "date_utc": 1740768300,
            "high": 33.18,
            "low": 33.1,
            "open": 33.16,
            "volume": 23278
        },
        "1740768600": {
            "close": 33.09,
            "date": "28-02-2025",
            "date_utc": 1740768600,
            "high": 33.17,
            "low": 33.09,
            "open": 33.17,
            "volume": 20096
        },
        "1740768900": {
            "close": 32.93,
            "date": "28-02-2025",
            "date_utc": 1740768900,
            "high": 33.09,
            "low": 32.93,
            "open": 33.09,
            "volume": 24817
        },
        "1740769200": {
            "close": 32.92,
            "date": "28-02-2025",
            "date_utc": 1740769200,
            "high": 32.97,
            "low": 32.9,
            "open": 32.92,
            "volume": 25679
        },
        "1740769500": {
            "close": 32.9,
            "date": "28-02-2025",
            "date_utc": 1740769500,
            "high": 32.96,
            "low": 32.87,
            "open": 32.92,
            "volume": 21466
        },
        "1740769800": {
            "close": 32.89,
            "date": "28-02-2025",
            "date_utc": 1740769800,
            "high": 32.92,
            "low": 32.88,
            "open": 32.9,
            "volume": 12442
        },
        "1740770100": {
            "close": 32.93,
            "date": "28-02-2025",
            "date_utc": 1740770100,
            "high": 32.93,
            "low": 32.85,
            "open": 32.89,
            "volume": 22965
        },
        "1740770400": {
            "close": 32.9,
            "date": "28-02-2025",
            "date_utc": 1740770400,
            "high": 32.93,
            "low": 32.85,
            "open": 32.93,
            "volume": 22533
        },
        "1740770700": {
            "close": 32.89,
            "date": "28-02-2025",
            "date_utc": 1740770700,
            "high": 32.94,
            "low": 32.88,
            "open": 32.9,
            "volume": 20726
        },
        "1740771000": {
            "close": 32.97,
            "date": "28-02-2025",
            "date_utc": 1740771000,
            "high": 33,
            "low": 32.87,
            "open": 32.89,
            "volume": 16292
        },
        "1740771300": {
            "close": 33.03,
            "date": "28-02-2025",
            "date_utc": 1740771300,
            "high": 33.06,
            "low": 32.94,
            "open": 32.96,
            "volume": 19704
        },
        "1740771600": {
            "close": 33.06,
            "date": "28-02-2025",
            "date_utc": 1740771600,
            "high": 33.06,
            "low": 32.99,
            "open": 33.03,
            "volume": 22857
        },
        "1740771900": {
            "close": 33.06,
            "date": "28-02-2025",
            "date_utc": 1740771900,
            "high": 33.07,
            "low": 33.02,
            "open": 33.05,
            "volume": 24017
        },
        "1740772200": {
            "close": 33.06,
            "date": "28-02-2025",
            "date_utc": 1740772200,
            "high": 33.09,
            "low": 33.03,
            "open": 33.06,
            "volume": 22991
        },
        "1740772500": {
            "close": 33.09,
            "date": "28-02-2025",
            "date_utc": 1740772500,
            "high": 33.11,
            "low": 33.04,
            "open": 33.05,
            "volume": 39774
        },
        "1740772800": {
            "close": 33.09,
            "date": "28-02-2025",
            "date_utc": 1740772800,
            "high": 33.12,
            "low": 33.04,
            "open": 33.1,
            "volume": 38855
        },
        "1740773100": {
            "close": 33.08,
            "date": "28-02-2025",
            "date_utc": 1740773100,
            "high": 33.11,
            "low": 33.07,
            "open": 33.09,
            "volume": 19808
        },
        "1740773400": {
            "close": 33.1,
            "date": "28-02-2025",
            "date_utc": 1740773400,
            "high": 33.13,
            "low": 33.07,
            "open": 33.09,
            "volume": 37995
        },
        "1740773700": {
            "close": 33.08,
            "date": "28-02-2025",
            "date_utc": 1740773700,
            "high": 33.14,
            "low": 33.08,
            "open": 33.1,
            "volume": 25538
        },
        "1740774000": {
            "close": 33.07,
            "date": "28-02-2025",
            "date_utc": 1740774000,
            "high": 33.08,
            "low": 33,
            "open": 33.08,
            "volume": 56927
        },
        "1740774300": {
            "close": 33.09,
            "date": "28-02-2025",
            "date_utc": 1740774300,
            "high": 33.1,
            "low": 33.03,
            "open": 33.08,
            "volume": 28422
        },
        "1740774600": {
            "close": 32.96,
            "date": "28-02-2025",
            "date_utc": 1740774600,
            "high": 33.09,
            "low": 32.96,
            "open": 33.09,
            "volume": 57706
        },
        "1740774900": {
            "close": 32.95,
            "date": "28-02-2025",
            "date_utc": 1740774900,
            "high": 32.97,
            "low": 32.88,
            "open": 32.96,
            "volume": 77887
        },
        "1740775200": {
            "close": 32.85,
            "date": "28-02-2025",
            "date_utc": 1740775200,
            "high": 33,
            "low": 32.85,
            "open": 32.95,
            "volume": 99887
        },
        "1740775500": {
            "close": 33.01,
            "date": "28-02-2025",
            "date_utc": 1740775500,
            "high": 33.01,
            "low": 32.84,
            "open": 32.85,
            "volume": 136658
        },
        "1740775800": {
            "close": 33.12,
            "date": "28-02-2025",
            "date_utc": 1740775800,
            "high": 33.19,
            "low": 33.02,
            "open": 33.14,
            "volume": 282718
        },
        "1740776100": {
            "close": 33.24,
            "date": "28-02-2025",
            "date_utc": 1740776100,
            "high": 33.25,
            "low": 33.12,
            "open": 33.12,
            "volume": 554872
        },
        "1741012200": {
            "close": 33.98,
            "date": "03-03-2025",
            "date_utc": 1741012200,
            "high": 34.51,
            "low": 33.9,
            "open": 34.5,
            "volume": 253749
        },
        "1741012500": {
            "close": 33.86,
            "date": "03-03-2025",
            "date_utc": 1741012500,
            "high": 34.05,
            "low": 33.8,
            "open": 33.99,
            "volume": 57571
        },
        "1741012800": {
            "close": 33.69,
            "date": "03-03-2025",
            "date_utc": 1741012800,
            "high": 33.9,
            "low": 33.69,
            "open": 33.86,
            "volume": 36075
        },
        "1741013100": {
            "close": 33.6,
            "date": "03-03-2025",
            "date_utc": 1741013100,
            "high": 33.68,
            "low": 33.56,
            "open": 33.68,
            "volume": 42254
        },
        "1741013400": {
            "close": 33.54,
            "date": "03-03-2025",
            "date_utc": 1741013400,
            "high": 33.65,
            "low": 33.46,
            "open": 33.58,
            "volume": 47231
        },
        "1741013700": {
            "close": 33.27,
            "date": "03-03-2025",
            "date_utc": 1741013700,
            "high": 33.51,
            "low": 33.24,
            "open": 33.49,
            "volume": 78519
        },
        "1741014000": {
            "close": 33.26,
            "date": "03-03-2025",
            "date_utc": 1741014000,
            "high": 33.38,
            "low": 33.06,
            "open": 33.27,
            "volume": 62376
        },
        "1741014300": {
            "close": 33.28,
            "date": "03-03-2025",
            "date_utc": 1741014300,
            "high": 33.39,
            "low": 33.19,
            "open": 33.23,
            "volume": 35959
        },
        "1741014600": {
            "close": 33.25,
            "date": "03-03-2025",
            "date_utc": 1741014600,
            "high": 33.4,
            "low": 33.21,
            "open": 33.28,
            "volume": 44564
        },
        "1741014900": {
            "close": 33.34,
            "date": "03-03-2025",
            "date_utc": 1741014900,
            "high": 33.34,
            "low": 33.17,
            "open": 33.25,
            "volume": 39438
        },
        "1741015200": {
            "close": 33.37,
            "date": "03-03-2025",
            "date_utc": 1741015200,
            "high": 33.47,
            "low": 33.31,
            "open": 33.31,
            "volume": 37727
        },
        "1741015500": {
            "close": 33.46,
            "date": "03-03-2025",
            "date_utc": 1741015500,
            "high": 33.46,
            "low": 33.31,
            "open": 33.35,
            "volume": 20107
        },
        "1741015800": {
            "close": 33.4,
            "date": "03-03-2025",
            "date_utc": 1741015800,
            "high": 33.48,
            "low": 33.36,
            "open": 33.46,
            "volume": 26650
        },
        "1741016100": {
            "close": 33.35,
            "date": "03-03-2025",
            "date_utc": 1741016100,
            "high": 33.4,
            "low": 33.29,
            "open": 33.38,
            "volume": 34441
        },
        "1741016400": {
            "close": 33.53,
            "date": "03-03-2025",
            "date_utc": 1741016400,
            "high": 33.53,
            "low": 33.31,
            "open": 33.33,
            "volume": 31442
        },
        "1741016700": {
            "close": 33.37,
            "date": "03-03-2025",
            "date_utc": 1741016700,
            "high": 33.53,
            "low": 33.35,
            "open": 33.53,
            "volume": 27084
        },
        "1741017000": {
            "close": 33.42,
            "date": "03-03-2025",
            "date_utc": 1741017000,
            "high": 33.43,
            "low": 33.34,
            "open": 33.37,
            "volume": 31234
        },
        "1741017300": {
            "close": 33.29,
            "date": "03-03-2025",
            "date_utc": 1741017300,
            "high": 33.43,
            "low": 33.28,
            "open": 33.43,
            "volume": 21553
        },
        "1741017600": {
            "close": 33.3,
            "date": "03-03-2025",
            "date_utc": 1741017600,
            "high": 33.43,
            "low": 33.27,
            "open": 33.3,
            "volume": 37465
        },
        "1741017900": {
            "close": 33.19,
            "date": "03-03-2025",
            "date_utc": 1741017900,
            "high": 33.31,
            "low": 33.19,
            "open": 33.3,
            "volume": 16366
        },
        "1741018200": {
            "close": 33.14,
            "date": "03-03-2025",
            "date_utc": 1741018200,
            "high": 33.21,
            "low": 33.13,
            "open": 33.19,
            "volume": 33641
        },
        "1741018500": {
            "close": 33.17,
            "date": "03-03-2025",
            "date_utc": 1741018500,
            "high": 33.19,
            "low": 33.08,
            "open": 33.15,
            "volume": 81236
        },
        "1741018800": {
            "close": 33.16,
            "date": "03-03-2025",
            "date_utc": 1741018800,
            "high": 33.2,
            "low": 33.15,
            "open": 33.19,
            "volume": 17076
        },
        "1741019100": {
            "close": 33.07,
            "date": "03-03-2025",
            "date_utc": 1741019100,
            "high": 33.18,
            "low": 33.07,
            "open": 33.18,
            "volume": 21074
        },
        "1741019400": {
            "close": 33.03,
            "date": "03-03-2025",
            "date_utc": 1741019400,
            "high": 33.11,
            "low": 33.03,
            "open": 33.08,
            "volume": 33388
        },
        "1741019700": {
            "close": 33.03,
            "date": "03-03-2025",
            "date_utc": 1741019700,
            "high": 33.08,
            "low": 32.99,
            "open": 33.01,
            "volume": 35497
        },
        "1741020000": {
            "close": 32.96,
            "date": "03-03-2025",
            "date_utc": 1741020000,
            "high": 33.03,
            "low": 32.95,
            "open": 33.03,
            "volume": 16272
        },
        "1741020300": {
            "close": 33.11,
            "date": "03-03-2025",
            "date_utc": 1741020300,
            "high": 33.12,
            "low": 32.96,
            "open": 32.96,
            "volume": 45027
        },
        "1741020600": {
            "close": 33.04,
            "date": "03-03-2025",
            "date_utc": 1741020600,
            "high": 33.17,
            "low": 33.04,
            "open": 33.09,
            "volume": 26237
        },
        "1741020900": {
            "close": 33.01,
            "date": "03-03-2025",
            "date_utc": 1741020900,
            "high": 33.06,
            "low": 32.98,
            "open": 33.06,
            "volume": 92284
        },
        "1741021200": {
            "close": 33.09,
            "date": "03-03-2025",
            "date_utc": 1741021200,
            "high": 33.09,
            "low": 32.95,
            "open": 33,
            "volume": 36310
        },
        "1741021500": {
            "close": 33.17,
            "date": "03-03-2025",
            "date_utc": 1741021500,
            "high": 33.2,
            "low": 33.09,
            "open": 33.1,
            "volume": 38013
        },
        "1741021800": {
            "close": 33.19,
            "date": "03-03-2025",
            "date_utc": 1741021800,
            "high": 33.21,
            "low": 33.16,
            "open": 33.18,
            "volume": 31149
        },
        "1741022100": {
            "close": 33.24,
            "date": "03-03-2025",
            "date_utc": 1741022100,
            "high": 33.26,
            "low": 33.18,
            "open": 33.2,
            "volume": 20266
        },
        "1741022400": {
            "close": 33.22,
            "date": "03-03-2025",
            "date_utc": 1741022400,
            "high": 33.27,
            "low": 33.19,
            "open": 33.26,
            "volume": 18293
        },
        "1741022700": {
            "close": 33.17,
            "date": "03-03-2025",
            "date_utc": 1741022700,
            "high": 33.24,
            "low": 33.17,
            "open": 33.24,
            "volume": 15683
        },
        "1741023000": {
            "close": 33.17,
            "date": "03-03-2025",
            "date_utc": 1741023000,
            "high": 33.19,
            "low": 33.15,
            "open": 33.18,
            "volume": 15609
        },
        "1741023300": {
            "close": 33.15,
            "date": "03-03-2025",
            "date_utc": 1741023300,
            "high": 33.17,
            "low": 33.13,
            "open": 33.17,
            "volume": 20387
        },
        "1741023600": {
            "close": 33.07,
            "date": "03-03-2025",
            "date_utc": 1741023600,
            "high": 33.16,
            "low": 33.05,
            "open": 33.15,
            "volume": 22923
        },
        "1741023900": {
            "close": 33.08,
            "date": "03-03-2025",
            "date_utc": 1741023900,
            "high": 33.09,
            "low": 33.03,
            "open": 33.07,
            "volume": 17847
        },
        "1741024200": {
            "close": 33.01,
            "date": "03-03-2025",
            "date_utc": 1741024200,
            "high": 33.08,
            "low": 33.01,
            "open": 33.08,
            "volume": 15135
        },
        "1741024500": {
            "close": 32.92,
            "date": "03-03-2025",
            "date_utc": 1741024500,
            "high": 33.02,
            "low": 32.86,
            "open": 33,
            "volume": 33194
        },
        "1741024800": {
            "close": 32.83,
            "date": "03-03-2025",
            "date_utc": 1741024800,
            "high": 32.9,
            "low": 32.82,
            "open": 32.9,
            "volume": 32539
        },
        "1741025100": {
            "close": 32.67,
            "date": "03-03-2025",
            "date_utc": 1741025100,
            "high": 32.81,
            "low": 32.65,
            "open": 32.81,
            "volume": 48097
        },
        "1741025400": {
            "close": 32.51,
            "date": "03-03-2025",
            "date_utc": 1741025400,
            "high": 32.67,
            "low": 32.49,
            "open": 32.67,
            "volume": 52758
        },
        "1741025700": {
            "close": 32.53,
            "date": "03-03-2025",
            "date_utc": 1741025700,
            "high": 32.6,
            "low": 32.5,
            "open": 32.51,
            "volume": 65539
        },
        "1741026000": {
            "close": 32.46,
            "date": "03-03-2025",
            "date_utc": 1741026000,
            "high": 32.53,
            "low": 32.41,
            "open": 32.53,
            "volume": 94069
        },
        "1741026300": {
            "close": 32.27,
            "date": "03-03-2025",
            "date_utc": 1741026300,
            "high": 32.47,
            "low": 32.22,
            "open": 32.44,
            "volume": 112511
        },
        "1741026600": {
            "close": 32.22,
            "date": "03-03-2025",
            "date_utc": 1741026600,
            "high": 32.31,
            "low": 32.16,
            "open": 32.25,
            "volume": 37848
        },
        "1741026900": {
            "close": 32.18,
            "date": "03-03-2025",
            "date_utc": 1741026900,
            "high": 32.32,
            "low": 32.18,
            "open": 32.22,
            "volume": 54799
        },
        "1741027200": {
            "close": 32.21,
            "date": "03-03-2025",
            "date_utc": 1741027200,
            "high": 32.25,
            "low": 32.16,
            "open": 32.18,
            "volume": 34268
        },
        "1741027500": {
            "close": 32.29,
            "date": "03-03-2025",
            "date_utc": 1741027500,
            "high": 32.46,
            "low": 32.18,
            "open": 32.2,
            "volume": 67906
        },
        "1741027800": {
            "close": 32.19,
            "date": "03-03-2025",
            "date_utc": 1741027800,
            "high": 32.34,
            "low": 32.18,
            "open": 32.29,
            "volume": 31038
        },
        "1741028100": {
            "close": 32.22,
            "date": "03-03-2025",
            "date_utc": 1741028100,
            "high": 32.24,
            "low": 32.16,
            "open": 32.17,
            "volume": 38959
        },
        "1741028400": {
            "close": 32.22,
            "date": "03-03-2025",
            "date_utc": 1741028400,
            "high": 32.26,
            "low": 32.21,
            "open": 32.23,
            "volume": 20228
        },
        "1741028700": {
            "close": 32.24,
            "date": "03-03-2025",
            "date_utc": 1741028700,
            "high": 32.26,
            "low": 32.18,
            "open": 32.21,
            "volume": 29268
        },
        "1741029000": {
            "close": 32.17,
            "date": "03-03-2025",
            "date_utc": 1741029000,
            "high": 32.24,
            "low": 32.16,
            "open": 32.23,
            "volume": 16215
        },
        "1741029300": {
            "close": 32.1,
            "date": "03-03-2025",
            "date_utc": 1741029300,
            "high": 32.2,
            "low": 32.06,
            "open": 32.18,
            "volume": 36291
        },
        "1741029600": {
            "close": 32.1,
            "date": "03-03-2025",
            "date_utc": 1741029600,
            "high": 32.15,
            "low": 32.07,
            "open": 32.1,
            "volume": 22949
        },
        "1741029900": {
            "close": 32.04,
            "date": "03-03-2025",
            "date_utc": 1741029900,
            "high": 32.11,
            "low": 32.01,
            "open": 32.11,
            "volume": 45432
        },
        "1741030200": {
            "close": 32.06,
            "date": "03-03-2025",
            "date_utc": 1741030200,
            "high": 32.13,
            "low": 32.04,
            "open": 32.04,
            "volume": 59039
        },
        "1741030500": {
            "close": 32.04,
            "date": "03-03-2025",
            "date_utc": 1741030500,
            "high": 32.06,
            "low": 31.97,
            "open": 32.05,
            "volume": 48121
        },
        "1741030800": {
            "close": 32.06,
            "date": "03-03-2025",
            "date_utc": 1741030800,
            "high": 32.11,
            "low": 32.03,
            "open": 32.04,
            "volume": 22157
        },
        "1741031100": {
            "close": 32.03,
            "date": "03-03-2025",
            "date_utc": 1741031100,
            "high": 32.06,
            "low": 31.99,
            "open": 32.06,
            "volume": 21488
        },
        "1741031400": {
            "close": 31.93,
            "date": "03-03-2025",
            "date_utc": 1741031400,
            "high": 32.06,
            "low": 31.88,
            "open": 32.02,
            "volume": 44076
        },
        "1741031700": {
            "close": 31.86,
            "date": "03-03-2025",
            "date_utc": 1741031700,
            "high": 31.96,
            "low": 31.84,
            "open": 31.96,
            "volume": 48854
        },
        "1741032000": {
            "close": 31.75,
            "date": "03-03-2025",
            "date_utc": 1741032000,
            "high": 31.86,
            "low": 31.73,
            "open": 31.86,
            "volume": 85504
        },
        "1741032300": {
            "close": 31.7,
            "date": "03-03-2025",
            "date_utc": 1741032300,
            "high": 31.82,
            "low": 31.68,
            "open": 31.76,
            "volume": 107030
        },
        "1741032600": {
            "close": 31.62,
            "date": "03-03-2025",
            "date_utc": 1741032600,
            "high": 31.71,
            "low": 31.56,
            "open": 31.68,
            "volume": 76283
        },
        "1741032900": {
            "close": 31.67,
            "date": "03-03-2025",
            "date_utc": 1741032900,
            "high": 31.76,
            "low": 31.63,
            "open": 31.63,
            "volume": 83083
        },
        "1741033200": {
            "close": 31.48,
            "date": "03-03-2025",
            "date_utc": 1741033200,
            "high": 31.67,
            "low": 31.47,
            "open": 31.67,
            "volume": 77704
        },
        "1741033500": {
            "close": 31.46,
            "date": "03-03-2025",
            "date_utc": 1741033500,
            "high": 31.51,
            "low": 31.44,
            "open": 31.48,
            "volume": 93042
        },
        "1741033800": {
            "close": 31.52,
            "date": "03-03-2025",
            "date_utc": 1741033800,
            "high": 31.55,
            "low": 31.43,
            "open": 31.47,
            "volume": 107174
        },
        "1741034100": {
            "close": 31.49,
            "date": "03-03-2025",
            "date_utc": 1741034100,
            "high": 31.55,
            "low": 31.47,
            "open": 31.53,
            "volume": 101856
        },
        "1741034400": {
            "close": 31.47,
            "date": "03-03-2025",
            "date_utc": 1741034400,
            "high": 31.51,
            "low": 31.44,
            "open": 31.5,
            "volume": 99089
        },
        "1741034700": {
            "close": 31.51,
            "date": "03-03-2025",
            "date_utc": 1741034700,
            "high": 31.51,
            "low": 31.35,
            "open": 31.48,
            "volume": 179732
        },
        "1741035000": {
            "close": 31.45,
            "date": "03-03-2025",
            "date_utc": 1741035000,
            "high": 31.53,
            "low": 31.43,
            "open": 31.52,
            "volume": 171362
        },
        "1741035300": {
            "close": 31.34,
            "date": "03-03-2025",
            "date_utc": 1741035300,
            "high": 31.45,
            "low": 31.3,
            "open": 31.44,
            "volume": 497277
        },
        "1741098600": {
            "close": 30.95,
            "date": "04-03-2025",
            "date_utc": 1741098600,
            "high": 31.35,
            "low": 30.7,
            "open": 31.35,
            "volume": 269673
        },
        "1741098900": {
            "close": 30.81,
            "date": "04-03-2025",
            "date_utc": 1741098900,
            "high": 30.95,
            "low": 30.71,
            "open": 30.92,
            "volume": 92296
        },
        "1741099200": {
            "close": 30.67,
            "date": "04-03-2025",
            "date_utc": 1741099200,
            "high": 30.99,
            "low": 30.46,
            "open": 30.81,
            "volume": 106376
        },
        "1741099500": {
            "close": 30.58,
            "date": "04-03-2025",
            "date_utc": 1741099500,
            "high": 30.73,
            "low": 30.5,
            "open": 30.66,
            "volume": 91355
        },
        "1741099800": {
            "close": 30.57,
            "date": "04-03-2025",
            "date_utc": 1741099800,
            "high": 30.75,
            "low": 30.51,
            "open": 30.6,
            "volume": 65766
        },
        "1741100100": {
            "close": 30.49,
            "date": "04-03-2025",
            "date_utc": 1741100100,
            "high": 30.68,
            "low": 30.47,
            "open": 30.58,
            "volume": 66885
        },
        "1741100400": {
            "close": 30.33,
            "date": "04-03-2025",
            "date_utc": 1741100400,
            "high": 30.48,
            "low": 30.2,
            "open": 30.48,
            "volume": 109395
        },
        "1741100700": {
            "close": 30.26,
            "date": "04-03-2025",
            "date_utc": 1741100700,
            "high": 30.38,
            "low": 30.2,
            "open": 30.33,
            "volume": 64100
        },
        "1741101000": {
            "close": 30.39,
            "date": "04-03-2025",
            "date_utc": 1741101000,
            "high": 30.49,
            "low": 30.21,
            "open": 30.25,
            "volume": 67572
        },
        "1741101300": {
            "close": 30.17,
            "date": "04-03-2025",
            "date_utc": 1741101300,
            "high": 30.41,
            "low": 30.15,
            "open": 30.39,
            "volume": 80707
        },
        "1741101600": {
            "close": 30.24,
            "date": "04-03-2025",
            "date_utc": 1741101600,
            "high": 30.26,
            "low": 30.15,
            "open": 30.18,
            "volume": 62832
        },
        "1741101900": {
            "close": 30.45,
            "date": "04-03-2025",
            "date_utc": 1741101900,
            "high": 30.56,
            "low": 30.21,
            "open": 30.23,
            "volume": 60289
        },
        "1741102200": {
            "close": 30.62,
            "date": "04-03-2025",
            "date_utc": 1741102200,
            "high": 30.67,
            "low": 30.45,
            "open": 30.45,
            "volume": 57138
        },
        "1741102500": {
            "close": 30.58,
            "date": "04-03-2025",
            "date_utc": 1741102500,
            "high": 30.71,
            "low": 30.54,
            "open": 30.66,
            "volume": 69883
        },
        "1741102800": {
            "close": 30.53,
            "date": "04-03-2025",
            "date_utc": 1741102800,
            "high": 30.58,
            "low": 30.44,
            "open": 30.57,
            "volume": 36822
        },
        "1741103100": {
            "close": 30.5,
            "date": "04-03-2025",
            "date_utc": 1741103100,
            "high": 30.64,
            "low": 30.48,
            "open": 30.52,
            "volume": 41998
        },
        "1741103400": {
            "close": 30.5,
            "date": "04-03-2025",
            "date_utc": 1741103400,
            "high": 30.51,
            "low": 30.42,
            "open": 30.48,
            "volume": 23930
        },
        "1741103700": {
            "close": 30.48,
            "date": "04-03-2025",
            "date_utc": 1741103700,
            "high": 30.49,
            "low": 30.43,
            "open": 30.49,
            "volume": 37263
        },
        "1741104000": {
            "close": 30.41,
            "date": "04-03-2025",
            "date_utc": 1741104000,
            "high": 30.53,
            "low": 30.41,
            "open": 30.43,
            "volume": 40445
        },
        "1741104300": {
            "close": 30.31,
            "date": "04-03-2025",
            "date_utc": 1741104300,
            "high": 30.44,
            "low": 30.29,
            "open": 30.44,
            "volume": 36154
        },
        "1741104600": {
            "close": 30.49,
            "date": "04-03-2025",
            "date_utc": 1741104600,
            "high": 30.51,
            "low": 30.31,
            "open": 30.32,
            "volume": 51736
        },
        "1741104900": {
            "close": 30.43,
            "date": "04-03-2025",
            "date_utc": 1741104900,
            "high": 30.56,
            "low": 30.42,
            "open": 30.51,
            "volume": 33027
        },
        "1741105200": {
            "close": 30.44,
            "date": "04-03-2025",
            "date_utc": 1741105200,
            "high": 30.53,
            "low": 30.41,
            "open": 30.43,
            "volume": 39643
        },
        "1741105500": {
            "close": 30.39,
            "date": "04-03-2025",
            "date_utc": 1741105500,
            "high": 30.45,
            "low": 30.34,
            "open": 30.42,
            "volume": 93591
        },
        "1741105800": {
            "close": 30.52,
            "date": "04-03-2025",
            "date_utc": 1741105800,
            "high": 30.58,
            "low": 30.38,
            "open": 30.39,
            "volume": 62602
        },
        "1741106100": {
            "close": 30.75,
            "date": "04-03-2025",
            "date_utc": 1741106100,
            "high": 30.75,
            "low": 30.49,
            "open": 30.53,
            "volume": 177863
        },
        "1741106400": {
            "close": 30.92,
            "date": "04-03-2025",
            "date_utc": 1741106400,
            "high": 30.93,
            "low": 30.7,
            "open": 30.73,
            "volume": 77823
        },
        "1741106700": {
            "close": 30.82,
            "date": "04-03-2025",
            "date_utc": 1741106700,
            "high": 30.93,
            "low": 30.77,
            "open": 30.92,
            "volume": 90015
        },
        "1741107000": {
            "close": 30.85,
            "date": "04-03-2025",
            "date_utc": 1741107000,
            "high": 30.92,
            "low": 30.81,
            "open": 30.82,
            "volume": 93882
        },
        "1741107300": {
            "close": 30.86,
            "date": "04-03-2025",
            "date_utc": 1741107300,
            "high": 31.01,
            "low": 30.84,
            "open": 30.87,
            "volume": 88140
        },
        "1741107600": {
            "close": 30.77,
            "date": "04-03-2025",
            "date_utc": 1741107600,
            "high": 30.89,
            "low": 30.69,
            "open": 30.88,
            "volume": 58538
        },
        "1741107900": {
            "close": 30.81,
            "date": "04-03-2025",
            "date_utc": 1741107900,
            "high": 30.84,
            "low": 30.75,
            "open": 30.77,
            "volume": 22926
        },
        "1741108200": {
            "close": 30.82,
            "date": "04-03-2025",
            "date_utc": 1741108200,
            "high": 30.89,
            "low": 30.82,
            "open": 30.82,
            "volume": 32988
        },
        "1741108500": {
            "close": 30.73,
            "date": "04-03-2025",
            "date_utc": 1741108500,
            "high": 30.82,
            "low": 30.69,
            "open": 30.79,
            "volume": 59634
        },
        "1741108800": {
            "close": 30.74,
            "date": "04-03-2025",
            "date_utc": 1741108800,
            "high": 30.8,
            "low": 30.67,
            "open": 30.72,
            "volume": 51446
        },
        "1741109100": {
            "close": 30.81,
            "date": "04-03-2025",
            "date_utc": 1741109100,
            "high": 30.86,
            "low": 30.76,
            "open": 30.76,
            "volume": 28069
        },
        "1741109400": {
            "close": 30.75,
            "date": "04-03-2025",
            "date_utc": 1741109400,
            "high": 30.8,
            "low": 30.68,
            "open": 30.8,
            "volume": 19074
        },
        "1741109700": {
            "close": 30.84,
            "date": "04-03-2025",
            "date_utc": 1741109700,
            "high": 30.88,
            "low": 30.73,
            "open": 30.73,
            "volume": 26868
        },
        "1741110000": {
            "close": 30.78,
            "date": "04-03-2025",
            "date_utc": 1741110000,
            "high": 30.85,
            "low": 30.73,
            "open": 30.83,
            "volume": 61490
        },
        "1741110300": {
            "close": 30.77,
            "date": "04-03-2025",
            "date_utc": 1741110300,
            "high": 30.88,
            "low": 30.76,
            "open": 30.77,
            "volume": 22769
        },
        "1741110600": {
            "close": 30.78,
            "date": "04-03-2025",
            "date_utc": 1741110600,
            "high": 30.81,
            "low": 30.72,
            "open": 30.77,
            "volume": 32610
        },
        "1741110900": {
            "close": 30.72,
            "date": "04-03-2025",
            "date_utc": 1741110900,
            "high": 30.78,
            "low": 30.68,
            "open": 30.78,
            "volume": 58900
        },
        "1741111200": {
            "close": 30.76,
            "date": "04-03-2025",
            "date_utc": 1741111200,
            "high": 30.78,
            "low": 30.7,
            "open": 30.71,
            "volume": 28331
        },
        "1741111500": {
            "close": 30.95,
            "date": "04-03-2025",
            "date_utc": 1741111500,
            "high": 30.95,
            "low": 30.73,
            "open": 30.74,
            "volume": 37490
        },
        "1741111800": {
            "close": 31.14,
            "date": "04-03-2025",
            "date_utc": 1741111800,
            "high": 31.14,
            "low": 30.95,
            "open": 30.95,
            "volume": 42981
        },
        "1741112100": {
            "close": 31.05,
            "date": "04-03-2025",
            "date_utc": 1741112100,
            "high": 31.16,
            "low": 30.99,
            "open": 31.16,
            "volume": 36910
        },
        "1741112400": {
            "close": 31.01,
            "date": "04-03-2025",
            "date_utc": 1741112400,
            "high": 31.07,
            "low": 30.96,
            "open": 31.05,
            "volume": 19182
        },
        "1741112700": {
            "close": 30.95,
            "date": "04-03-2025",
            "date_utc": 1741112700,
            "high": 31.03,
            "low": 30.93,
            "open": 31.01,
            "volume": 19890
        },
        "1741113000": {
            "close": 31.03,
            "date": "04-03-2025",
            "date_utc": 1741113000,
            "high": 31.06,
            "low": 30.93,
            "open": 30.94,
            "volume": 18853
        },
        "1741113300": {
            "close": 31.1,
            "date": "04-03-2025",
            "date_utc": 1741113300,
            "high": 31.12,
            "low": 31,
            "open": 31.03,
            "volume": 21275
        },
        "1741113600": {
            "close": 31.1,
            "date": "04-03-2025",
            "date_utc": 1741113600,
            "high": 31.16,
            "low": 31.09,
            "open": 31.11,
            "volume": 24068
        },
        "1741113900": {
            "close": 31.08,
            "date": "04-03-2025",
            "date_utc": 1741113900,
            "high": 31.14,
            "low": 31.08,
            "open": 31.11,
            "volume": 21001
        },
        "1741114200": {
            "close": 31.21,
            "date": "04-03-2025",
            "date_utc": 1741114200,
            "high": 31.23,
            "low": 31.07,
            "open": 31.08,
            "volume": 24663
        },
        "1741114500": {
            "close": 31.46,
            "date": "04-03-2025",
            "date_utc": 1741114500,
            "high": 31.48,
            "low": 31.18,
            "open": 31.19,
            "volume": 97648
        },
        "1741114800": {
            "close": 31.57,
            "date": "04-03-2025",
            "date_utc": 1741114800,
            "high": 31.6,
            "low": 31.46,
            "open": 31.46,
            "volume": 89542
        },
        "1741115100": {
            "close": 31.59,
            "date": "04-03-2025",
            "date_utc": 1741115100,
            "high": 31.73,
            "low": 31.53,
            "open": 31.56,
            "volume": 40912
        },
        "1741115400": {
            "close": 31.5,
            "date": "04-03-2025",
            "date_utc": 1741115400,
            "high": 31.61,
            "low": 31.48,
            "open": 31.58,
            "volume": 27746
        },
        "1741115700": {
            "close": 31.47,
            "date": "04-03-2025",
            "date_utc": 1741115700,
            "high": 31.54,
            "low": 31.47,
            "open": 31.49,
            "volume": 17648
        },
        "1741116000": {
            "close": 31.71,
            "date": "04-03-2025",
            "date_utc": 1741116000,
            "high": 31.72,
            "low": 31.47,
            "open": 31.47,
            "volume": 72648
        },
        "1741116300": {
            "close": 31.52,
            "date": "04-03-2025",
            "date_utc": 1741116300,
            "high": 31.75,
            "low": 31.51,
            "open": 31.73,
            "volume": 51365
        },
        "1741116600": {
            "close": 31.41,
            "date": "04-03-2025",
            "date_utc": 1741116600,
            "high": 31.54,
            "low": 31.37,
            "open": 31.53,
            "volume": 32839
        },
        "1741116900": {
            "close": 31.46,
            "date": "04-03-2025",
            "date_utc": 1741116900,
            "high": 31.49,
            "low": 31.41,
            "open": 31.41,
            "volume": 30902
        },
        "1741117200": {
            "close": 31.46,
            "date": "04-03-2025",
            "date_utc": 1741117200,
            "high": 31.51,
            "low": 31.42,
            "open": 31.45,
            "volume": 27669
        },
        "1741117500": {
            "close": 31.58,
            "date": "04-03-2025",
            "date_utc": 1741117500,
            "high": 31.59,
            "low": 31.47,
            "open": 31.47,
            "volume": 37214
        },
        "1741117800": {
            "close": 31.58,
            "date": "04-03-2025",
            "date_utc": 1741117800,
            "high": 31.63,
            "low": 31.58,
            "open": 31.59,
            "volume": 28207
        },
        "1741118100": {
            "close": 31.67,
            "date": "04-03-2025",
            "date_utc": 1741118100,
            "high": 31.7,
            "low": 31.59,
            "open": 31.59,
            "volume": 94267
        },
        "1741118400": {
            "close": 31.74,
            "date": "04-03-2025",
            "date_utc": 1741118400,
            "high": 31.77,
            "low": 31.67,
            "open": 31.67,
            "volume": 37239
        },
        "1741118700": {
            "close": 31.77,
            "date": "04-03-2025",
            "date_utc": 1741118700,
            "high": 31.79,
            "low": 31.72,
            "open": 31.76,
            "volume": 90982
        },
        "1741119000": {
            "close": 31.75,
            "date": "04-03-2025",
            "date_utc": 1741119000,
            "high": 31.78,
            "low": 31.74,
            "open": 31.75,
            "volume": 43665
        },
        "1741119300": {
            "close": 31.71,
            "date": "04-03-2025",
            "date_utc": 1741119300,
            "high": 31.76,
            "low": 31.68,
            "open": 31.75,
            "volume": 35519
        },
        "1741119600": {
            "close": 31.81,
            "date": "04-03-2025",
            "date_utc": 1741119600,
            "high": 31.83,
            "low": 31.69,
            "open": 31.71,
            "volume": 73579
        },
        "1741119900": {
            "close": 31.79,
            "date": "04-03-2025",
            "date_utc": 1741119900,
            "high": 31.86,
            "low": 31.74,
            "open": 31.81,
            "volume": 109409
        },
        "1741120200": {
            "close": 31.4,
            "date": "04-03-2025",
            "date_utc": 1741120200,
            "high": 31.8,
            "low": 31.35,
            "open": 31.79,
            "volume": 102279
        },
        "1741120500": {
            "close": 31.38,
            "date": "04-03-2025",
            "date_utc": 1741120500,
            "high": 31.44,
            "low": 31.32,
            "open": 31.4,
            "volume": 55634
        },
        "1741120800": {
            "close": 31.32,
            "date": "04-03-2025",
            "date_utc": 1741120800,
            "high": 31.39,
            "low": 31.27,
            "open": 31.39,
            "volume": 79447
        },
        "1741121100": {
            "close": 31.24,
            "date": "04-03-2025",
            "date_utc": 1741121100,
            "high": 31.37,
            "low": 31.22,
            "open": 31.33,
            "volume": 58062
        },
        "1741121400": {
            "close": 31.07,
            "date": "04-03-2025",
            "date_utc": 1741121400,
            "high": 31.25,
            "low": 30.98,
            "open": 31.23,
            "volume": 150058
        },
        "1741121700": {
            "close": 31.12,
            "date": "04-03-2025",
            "date_utc": 1741121700,
            "high": 31.2,
            "low": 31.07,
            "open": 31.07,
            "volume": 267773
        },
        "1741185000": {
            "close": 31.99,
            "date": "05-03-2025",
            "date_utc": 1741185000,
            "high": 32.68,
            "low": 31.81,
            "open": 32.48,
            "volume": 282874
        },
        "1741185300": {
            "close": 32.17,
            "date": "05-03-2025",
            "date_utc": 1741185300,
            "high": 32.23,
            "low": 31.84,
            "open": 31.99,
            "volume": 83134
        },
        "1741185600": {
            "close": 32.42,
            "date": "05-03-2025",
            "date_utc": 1741185600,
            "high": 32.67,
            "low": 32.21,
            "open": 32.24,
            "volume": 128473
        },
        "1741185900": {
            "close": 32.26,
            "date": "05-03-2025",
            "date_utc": 1741185900,
            "high": 32.49,
            "low": 32.19,
            "open": 32.42,
            "volume": 72019
        },
        "1741186200": {
            "close": 32.42,
            "date": "05-03-2025",
            "date_utc": 1741186200,
            "high": 32.57,
            "low": 32.2,
            "open": 32.22,
            "volume": 49402
        },
        "1741186500": {
            "close": 32.3,
            "date": "05-03-2025",
            "date_utc": 1741186500,
            "high": 32.5,
            "low": 32.26,
            "open": 32.42,
            "volume": 63843
        },
        "1741186800": {
            "close": 32.37,
            "date": "05-03-2025",
            "date_utc": 1741186800,
            "high": 32.68,
            "low": 32.22,
            "open": 32.33,
            "volume": 89977
        },
        "1741187100": {
            "close": 32.28,
            "date": "05-03-2025",
            "date_utc": 1741187100,
            "high": 32.39,
            "low": 32.27,
            "open": 32.39,
            "volume": 105673
        },
        "1741187400": {
            "close": 32.16,
            "date": "05-03-2025",
            "date_utc": 1741187400,
            "high": 32.28,
            "low": 32.06,
            "open": 32.26,
            "volume": 62988
        },
        "1741187700": {
            "close": 32.08,
            "date": "05-03-2025",
            "date_utc": 1741187700,
            "high": 32.17,
            "low": 32.03,
            "open": 32.16,
            "volume": 46775
        },
        "1741188000": {
            "close": 32.13,
            "date": "05-03-2025",
            "date_utc": 1741188000,
            "high": 32.27,
            "low": 32.05,
            "open": 32.11,
            "volume": 63815
        },
        "1741188300": {
            "close": 32.15,
            "date": "05-03-2025",
            "date_utc": 1741188300,
            "high": 32.22,
            "low": 32.11,
            "open": 32.13,
            "volume": 50624
        },
        "1741188600": {
            "close": 32.13,
            "date": "05-03-2025",
            "date_utc": 1741188600,
            "high": 32.19,
            "low": 32.09,
            "open": 32.12,
            "volume": 34330
        },
        "1741188900": {
            "close": 32.15,
            "date": "05-03-2025",
            "date_utc": 1741188900,
            "high": 32.2,
            "low": 32.11,
            "open": 32.12,
            "volume": 48821
        },
        "1741189200": {
            "close": 32.12,
            "date": "05-03-2025",
            "date_utc": 1741189200,
            "high": 32.16,
            "low": 32.07,
            "open": 32.15,
            "volume": 51940
        },
        "1741189500": {
            "close": 32.08,
            "date": "05-03-2025",
            "date_utc": 1741189500,
            "high": 32.15,
            "low": 32.04,
            "open": 32.1,
            "volume": 28381
        },
        "1741189800": {
            "close": 32.13,
            "date": "05-03-2025",
            "date_utc": 1741189800,
            "high": 32.18,
            "low": 32.04,
            "open": 32.09,
            "volume": 39007
        },
        "1741190100": {
            "close": 32.08,
            "date": "05-03-2025",
            "date_utc": 1741190100,
            "high": 32.17,
            "low": 32.06,
            "open": 32.13,
            "volume": 32213
        },
        "1741190400": {
            "close": 32.1,
            "date": "05-03-2025",
            "date_utc": 1741190400,
            "high": 32.12,
            "low": 31.98,
            "open": 32.06,
            "volume": 56025
        },
        "1741190700": {
            "close": 31.97,
            "date": "05-03-2025",
            "date_utc": 1741190700,
            "high": 32.12,
            "low": 31.97,
            "open": 32.1,
            "volume": 90510
        },
        "1741191000": {
            "close": 31.94,
            "date": "05-03-2025",
            "date_utc": 1741191000,
            "high": 32.01,
            "low": 31.86,
            "open": 31.97,
            "volume": 39945
        },
        "1741191300": {
            "close": 31.89,
            "date": "05-03-2025",
            "date_utc": 1741191300,
            "high": 31.98,
            "low": 31.88,
            "open": 31.94,
            "volume": 42714
        },
        "1741191600": {
            "close": 31.86,
            "date": "05-03-2025",
            "date_utc": 1741191600,
            "high": 31.92,
            "low": 31.81,
            "open": 31.88,
            "volume": 73239
        },
        "1741191900": {
            "close": 31.81,
            "date": "05-03-2025",
            "date_utc": 1741191900,
            "high": 31.86,
            "low": 31.72,
            "open": 31.86,
            "volume": 42986
        },
        "1741192200": {
            "close": 31.73,
            "date": "05-03-2025",
            "date_utc": 1741192200,
            "high": 31.87,
            "low": 31.66,
            "open": 31.79,
            "volume": 80835
        },
        "1741192500": {
            "close": 31.82,
            "date": "05-03-2025",
            "date_utc": 1741192500,
            "high": 31.89,
            "low": 31.7,
            "open": 31.74,
            "volume": 64222
        },
        "1741192800": {
            "close": 31.85,
            "date": "05-03-2025",
            "date_utc": 1741192800,
            "high": 31.87,
            "low": 31.76,
            "open": 31.82,
            "volume": 30172
        },
        "1741193100": {
            "close": 31.92,
            "date": "05-03-2025",
            "date_utc": 1741193100,
            "high": 31.92,
            "low": 31.83,
            "open": 31.85,
            "volume": 21437
        },
        "1741193400": {
            "close": 31.92,
            "date": "05-03-2025",
            "date_utc": 1741193400,
            "high": 31.92,
            "low": 31.85,
            "open": 31.91,
            "volume": 20350
        },
        "1741193700": {
            "close": 32.08,
            "date": "05-03-2025",
            "date_utc": 1741193700,
            "high": 32.15,
            "low": 31.88,
            "open": 31.93,
            "volume": 56498
        },
        "1741194000": {
            "close": 31.94,
            "date": "05-03-2025",
            "date_utc": 1741194000,
            "high": 32.17,
            "low": 31.91,
            "open": 32.09,
            "volume": 44914
        },
        "1741194300": {
            "close": 31.99,
            "date": "05-03-2025",
            "date_utc": 1741194300,
            "high": 32,
            "low": 31.93,
            "open": 31.93,
            "volume": 17477
        },
        "1741194600": {
            "close": 31.94,
            "date": "05-03-2025",
            "date_utc": 1741194600,
            "high": 32.08,
            "low": 31.93,
            "open": 31.99,
            "volume": 38293
        },
        "1741194900": {
            "close": 31.95,
            "date": "05-03-2025",
            "date_utc": 1741194900,
            "high": 32,
            "low": 31.91,
            "open": 31.97,
            "volume": 20719
        },
        "1741195200": {
            "close": 31.97,
            "date": "05-03-2025",
            "date_utc": 1741195200,
            "high": 31.99,
            "low": 31.93,
            "open": 31.93,
            "volume": 26938
        },
        "1741195500": {
            "close": 31.95,
            "date": "05-03-2025",
            "date_utc": 1741195500,
            "high": 31.99,
            "low": 31.91,
            "open": 31.95,
            "volume": 20227
        },
        "1741195800": {
            "close": 31.99,
            "date": "05-03-2025",
            "date_utc": 1741195800,
            "high": 32.03,
            "low": 31.95,
            "open": 31.97,
            "volume": 21761
        },
        "1741196100": {
            "close": 32.01,
            "date": "05-03-2025",
            "date_utc": 1741196100,
            "high": 32.01,
            "low": 31.94,
            "open": 31.99,
            "volume": 16586
        },
        "1741196400": {
            "close": 31.99,
            "date": "05-03-2025",
            "date_utc": 1741196400,
            "high": 32.02,
            "low": 31.98,
            "open": 32.02,
            "volume": 19145
        },
        "1741196700": {
            "close": 31.94,
            "date": "05-03-2025",
            "date_utc": 1741196700,
            "high": 32.01,
            "low": 31.88,
            "open": 32,
            "volume": 19120
        },
        "1741197000": {
            "close": 31.98,
            "date": "05-03-2025",
            "date_utc": 1741197000,
            "high": 32.03,
            "low": 31.93,
            "open": 31.95,
            "volume": 20214
        },
        "1741197300": {
            "close": 31.97,
            "date": "05-03-2025",
            "date_utc": 1741197300,
            "high": 32,
            "low": 31.94,
            "open": 31.97,
            "volume": 14196
        },
        "1741197600": {
            "close": 31.93,
            "date": "05-03-2025",
            "date_utc": 1741197600,
            "high": 31.99,
            "low": 31.92,
            "open": 31.96,
            "volume": 18561
        },
        "1741197900": {
            "close": 31.65,
            "date": "05-03-2025",
            "date_utc": 1741197900,
            "high": 31.96,
            "low": 31.6,
            "open": 31.92,
            "volume": 44344
        },
        "1741198200": {
            "close": 31.73,
            "date": "05-03-2025",
            "date_utc": 1741198200,
            "high": 31.79,
            "low": 31.65,
            "open": 31.65,
            "volume": 37756
        },
        "1741198500": {
            "close": 31.8,
            "date": "05-03-2025",
            "date_utc": 1741198500,
            "high": 31.81,
            "low": 31.71,
            "open": 31.72,
            "volume": 40452
        },
        "1741198800": {
            "close": 31.85,
            "date": "05-03-2025",
            "date_utc": 1741198800,
            "high": 31.85,
            "low": 31.78,
            "open": 31.83,
            "volume": 35764
        },
        "1741199100": {
            "close": 31.79,
            "date": "05-03-2025",
            "date_utc": 1741199100,
            "high": 31.85,
            "low": 31.78,
            "open": 31.85,
            "volume": 23776
        },
        "1741199400": {
            "close": 31.81,
            "date": "05-03-2025",
            "date_utc": 1741199400,
            "high": 31.89,
            "low": 31.73,
            "open": 31.81,
            "volume": 30778
        },
        "1741199700": {
            "close": 31.87,
            "date": "05-03-2025",
            "date_utc": 1741199700,
            "high": 31.87,
            "low": 31.78,
            "open": 31.79,
            "volume": 28098
        },
        "1741200000": {
            "close": 31.82,
            "date": "05-03-2025",
            "date_utc": 1741200000,
            "high": 31.89,
            "low": 31.8,
            "open": 31.89,
            "volume": 23575
        },
        "1741200300": {
            "close": 31.97,
            "date": "05-03-2025",
            "date_utc": 1741200300,
            "high": 32,
            "low": 31.8,
            "open": 31.81,
            "volume": 24567
        },
        "1741200600": {
            "close": 31.98,
            "date": "05-03-2025",
            "date_utc": 1741200600,
            "high": 32,
            "low": 31.94,
            "open": 31.97,
            "volume": 38293
        },
        "1741200900": {
            "close": 32.07,
            "date": "05-03-2025",
            "date_utc": 1741200900,
            "high": 32.07,
            "low": 31.98,
            "open": 31.98,
            "volume": 14741
        },
        "1741201200": {
            "close": 32.13,
            "date": "05-03-2025",
            "date_utc": 1741201200,
            "high": 32.13,
            "low": 32.04,
            "open": 32.06,
            "volume": 46999
        },
        "1741201500": {
            "close": 32.16,
            "date": "05-03-2025",
            "date_utc": 1741201500,
            "high": 32.19,
            "low": 32.11,
            "open": 32.13,
            "volume": 52911
        },
        "1741201800": {
            "close": 32.2,
            "date": "05-03-2025",
            "date_utc": 1741201800,
            "high": 32.24,
            "low": 32.12,
            "open": 32.15,
            "volume": 79879
        },
        "1741202100": {
            "close": 32.21,
            "date": "05-03-2025",
            "date_utc": 1741202100,
            "high": 32.35,
            "low": 32.17,
            "open": 32.2,
            "volume": 50148
        },
        "1741202400": {
            "close": 32.23,
            "date": "05-03-2025",
            "date_utc": 1741202400,
            "high": 32.27,
            "low": 32.17,
            "open": 32.17,
            "volume": 15376
        },
        "1741202700": {
            "close": 32.19,
            "date": "05-03-2025",
            "date_utc": 1741202700,
            "high": 32.25,
            "low": 32.18,
            "open": 32.24,
            "volume": 27369
        },
        "1741203000": {
            "close": 32.26,
            "date": "05-03-2025",
            "date_utc": 1741203000,
            "high": 32.28,
            "low": 32.18,
            "open": 32.18,
            "volume": 53800
        },
        "1741203300": {
            "close": 32.26,
            "date": "05-03-2025",
            "date_utc": 1741203300,
            "high": 32.29,
            "low": 32.16,
            "open": 32.25,
            "volume": 39692
        },
        "1741203600": {
            "close": 32.24,
            "date": "05-03-2025",
            "date_utc": 1741203600,
            "high": 32.29,
            "low": 32.22,
            "open": 32.26,
            "volume": 23862
        },
        "1741203900": {
            "close": 32.26,
            "date": "05-03-2025",
            "date_utc": 1741203900,
            "high": 32.26,
            "low": 32.21,
            "open": 32.24,
            "volume": 23828
        },
        "1741204200": {
            "close": 32.32,
            "date": "05-03-2025",
            "date_utc": 1741204200,
            "high": 32.34,
            "low": 32.25,
            "open": 32.25,
            "volume": 60272
        },
        "1741204500": {
            "close": 32.33,
            "date": "05-03-2025",
            "date_utc": 1741204500,
            "high": 32.37,
            "low": 32.32,
            "open": 32.32,
            "volume": 28960
        },
        "1741204800": {
            "close": 32.4,
            "date": "05-03-2025",
            "date_utc": 1741204800,
            "high": 32.49,
            "low": 32.3,
            "open": 32.32,
            "volume": 53736
        },
        "1741205100": {
            "close": 32.51,
            "date": "05-03-2025",
            "date_utc": 1741205100,
            "high": 32.52,
            "low": 32.39,
            "open": 32.4,
            "volume": 44584
        },
        "1741205400": {
            "close": 32.55,
            "date": "05-03-2025",
            "date_utc": 1741205400,
            "high": 32.57,
            "low": 32.49,
            "open": 32.5,
            "volume": 35405
        },
        "1741205700": {
            "close": 32.37,
            "date": "05-03-2025",
            "date_utc": 1741205700,
            "high": 32.58,
            "low": 32.33,
            "open": 32.55,
            "volume": 92521
        },
        "1741206000": {
            "close": 32.34,
            "date": "05-03-2025",
            "date_utc": 1741206000,
            "high": 32.38,
            "low": 32.31,
            "open": 32.37,
            "volume": 29462
        },
        "1741206300": {
            "close": 32.45,
            "date": "05-03-2025",
            "date_utc": 1741206300,
            "high": 32.47,
            "low": 32.32,
            "open": 32.34,
            "volume": 38289
        },
        "1741206600": {
            "close": 32.32,
            "date": "05-03-2025",
            "date_utc": 1741206600,
            "high": 32.44,
            "low": 32.3,
            "open": 32.44,
            "volume": 39395
        },
        "1741206900": {
            "close": 32.35,
            "date": "05-03-2025",
            "date_utc": 1741206900,
            "high": 32.35,
            "low": 32.29,
            "open": 32.33,
            "volume": 52714
        },
        "1741207200": {
            "close": 32.43,
            "date": "05-03-2025",
            "date_utc": 1741207200,
            "high": 32.44,
            "low": 32.33,
            "open": 32.35,
            "volume": 52209
        },
        "1741207500": {
            "close": 32.35,
            "date": "05-03-2025",
            "date_utc": 1741207500,
            "high": 32.44,
            "low": 32.34,
            "open": 32.44,
            "volume": 74724
        },
        "1741207800": {
            "close": 32.32,
            "date": "05-03-2025",
            "date_utc": 1741207800,
            "high": 32.36,
            "low": 32.22,
            "open": 32.35,
            "volume": 133380
        },
        "1741208100": {
            "close": 32.38,
            "date": "05-03-2025",
            "date_utc": 1741208100,
            "high": 32.41,
            "low": 32.31,
            "open": 32.32,
            "volume": 327762
        },
        "1741271400": {
            "close": 32.6,
            "date": "06-03-2025",
            "date_utc": 1741271400,
            "high": 32.7,
            "low": 32.31,
            "open": 32.4,
            "volume": 227695
        },
        "1741271700": {
            "close": 32.34,
            "date": "06-03-2025",
            "date_utc": 1741271700,
            "high": 32.79,
            "low": 32.32,
            "open": 32.58,
            "volume": 110771
        },
        "1741272000": {
            "close": 32.37,
            "date": "06-03-2025",
            "date_utc": 1741272000,
            "high": 32.42,
            "low": 32.28,
            "open": 32.38,
            "volume": 96188
        },
        "1741272300": {
            "close": 32.48,
            "date": "06-03-2025",
            "date_utc": 1741272300,
            "high": 32.58,
            "low": 32.36,
            "open": 32.38,
            "volume": 70097
        },
        "1741272600": {
            "close": 32.76,
            "date": "06-03-2025",
            "date_utc": 1741272600,
            "high": 32.79,
            "low": 32.48,
            "open": 32.49,
            "volume": 80409
        },
        "1741272900": {
            "close": 32.64,
            "date": "06-03-2025",
            "date_utc": 1741272900,
            "high": 32.81,
            "low": 32.57,
            "open": 32.75,
            "volume": 61222
        },
        "1741273200": {
            "close": 32.85,
            "date": "06-03-2025",
            "date_utc": 1741273200,
            "high": 32.9,
            "low": 32.56,
            "open": 32.63,
            "volume": 71561
        },
        "1741273500": {
            "close": 33.02,
            "date": "06-03-2025",
            "date_utc": 1741273500,
            "high": 33.04,
            "low": 32.81,
            "open": 32.81,
            "volume": 92975
        },
        "1741273800": {
            "close": 33.04,
            "date": "06-03-2025",
            "date_utc": 1741273800,
            "high": 33.08,
            "low": 32.94,
            "open": 33.01,
            "volume": 108873
        },
        "1741274100": {
            "close": 33.33,
            "date": "06-03-2025",
            "date_utc": 1741274100,
            "high": 33.33,
            "low": 32.99,
            "open": 33.01,
            "volume": 309907
        },
        "1741274400": {
            "close": 33.31,
            "date": "06-03-2025",
            "date_utc": 1741274400,
            "high": 33.67,
            "low": 33.31,
            "open": 33.33,
            "volume": 352032
        },
        "1741274700": {
            "close": 33.31,
            "date": "06-03-2025",
            "date_utc": 1741274700,
            "high": 33.38,
            "low": 33.19,
            "open": 33.33,
            "volume": 130125
        },
        "1741275000": {
            "close": 33.33,
            "date": "06-03-2025",
            "date_utc": 1741275000,
            "high": 33.35,
            "low": 33.17,
            "open": 33.31,
            "volume": 65312
        },
        "1741275300": {
            "close": 33.5,
            "date": "06-03-2025",
            "date_utc": 1741275300,
            "high": 33.52,
            "low": 33.31,
            "open": 33.33,
            "volume": 51300
        },
        "1741275600": {
            "close": 33.67,
            "date": "06-03-2025",
            "date_utc": 1741275600,
            "high": 33.72,
            "low": 33.5,
            "open": 33.5,
            "volume": 77147
        },
        "1741275900": {
            "close": 33.59,
            "date": "06-03-2025",
            "date_utc": 1741275900,
            "high": 33.7,
            "low": 33.58,
            "open": 33.65,
            "volume": 72689
        },
        "1741276200": {
            "close": 33.46,
            "date": "06-03-2025",
            "date_utc": 1741276200,
            "high": 33.63,
            "low": 33.41,
            "open": 33.61,
            "volume": 114120
        },
        "1741276500": {
            "close": 33.51,
            "date": "06-03-2025",
            "date_utc": 1741276500,
            "high": 33.55,
            "low": 33.42,
            "open": 33.47,
            "volume": 56231
        },
        "1741276800": {
            "close": 33.56,
            "date": "06-03-2025",
            "date_utc": 1741276800,
            "high": 33.62,
            "low": 33.52,
            "open": 33.53,
            "volume": 48760
        },
        "1741277100": {
            "close": 33.7,
            "date": "06-03-2025",
            "date_utc": 1741277100,
            "high": 33.7,
            "low": 33.55,
            "open": 33.57,
            "volume": 53975
        },
        "1741277400": {
            "close": 33.75,
            "date": "06-03-2025",
            "date_utc": 1741277400,
            "high": 33.84,
            "low": 33.69,
            "open": 33.7,
            "volume": 82599
        },
        "1741277700": {
            "close": 33.58,
            "date": "06-03-2025",
            "date_utc": 1741277700,
            "high": 33.8,
            "low": 33.57,
            "open": 33.75,
            "volume": 89434
        },
        "1741278000": {
            "close": 33.42,
            "date": "06-03-2025",
            "date_utc": 1741278000,
            "high": 33.6,
            "low": 33.4,
            "open": 33.58,
            "volume": 38745
        },
        "1741278300": {
            "close": 33.48,
            "date": "06-03-2025",
            "date_utc": 1741278300,
            "high": 33.59,
            "low": 33.27,
            "open": 33.44,
            "volume": 80338
        },
        "1741278600": {
            "close": 33.47,
            "date": "06-03-2025",
            "date_utc": 1741278600,
            "high": 33.6,
            "low": 33.33,
            "open": 33.46,
            "volume": 64727
        },
        "1741278900": {
            "close": 33.49,
            "date": "06-03-2025",
            "date_utc": 1741278900,
            "high": 33.53,
            "low": 33.41,
            "open": 33.48,
            "volume": 73333
        },
        "1741279200": {
            "close": 33.62,
            "date": "06-03-2025",
            "date_utc": 1741279200,
            "high": 33.63,
            "low": 33.46,
            "open": 33.51,
            "volume": 73368
        },
        "1741279500": {
            "close": 33.65,
            "date": "06-03-2025",
            "date_utc": 1741279500,
            "high": 33.7,
            "low": 33.59,
            "open": 33.62,
            "volume": 54657
        },
        "1741279800": {
            "close": 33.54,
            "date": "06-03-2025",
            "date_utc": 1741279800,
            "high": 33.65,
            "low": 33.5,
            "open": 33.65,
            "volume": 62229
        },
        "1741280100": {
            "close": 33.43,
            "date": "06-03-2025",
            "date_utc": 1741280100,
            "high": 33.57,
            "low": 33.42,
            "open": 33.53,
            "volume": 30643
        },
        "1741280400": {
            "close": 33.33,
            "date": "06-03-2025",
            "date_utc": 1741280400,
            "high": 33.49,
            "low": 33.29,
            "open": 33.46,
            "volume": 33889
        },
        "1741280700": {
            "close": 33.38,
            "date": "06-03-2025",
            "date_utc": 1741280700,
            "high": 33.4,
            "low": 33.21,
            "open": 33.31,
            "volume": 46988
        },
        "1741281000": {
            "close": 33.3,
            "date": "06-03-2025",
            "date_utc": 1741281000,
            "high": 33.41,
            "low": 33.26,
            "open": 33.38,
            "volume": 42655
        },
        "1741281300": {
            "close": 33.19,
            "date": "06-03-2025",
            "date_utc": 1741281300,
            "high": 33.35,
            "low": 33.15,
            "open": 33.29,
            "volume": 74106
        },
        "1741281600": {
            "close": 33.14,
            "date": "06-03-2025",
            "date_utc": 1741281600,
            "high": 33.27,
            "low": 33.13,
            "open": 33.19,
            "volume": 65173
        },
        "1741281900": {
            "close": 33.06,
            "date": "06-03-2025",
            "date_utc": 1741281900,
            "high": 33.16,
            "low": 33.02,
            "open": 33.12,
            "volume": 52084
        },
        "1741282200": {
            "close": 33.03,
            "date": "06-03-2025",
            "date_utc": 1741282200,
            "high": 33.22,
            "low": 33,
            "open": 33.06,
            "volume": 50412
        },
        "1741282500": {
            "close": 32.9,
            "date": "06-03-2025",
            "date_utc": 1741282500,
            "high": 33.04,
            "low": 32.9,
            "open": 33.01,
            "volume": 31370
        },
        "1741282800": {
            "close": 32.96,
            "date": "06-03-2025",
            "date_utc": 1741282800,
            "high": 33.02,
            "low": 32.88,
            "open": 32.89,
            "volume": 29472
        },
        "1741283100": {
            "close": 32.87,
            "date": "06-03-2025",
            "date_utc": 1741283100,
            "high": 32.98,
            "low": 32.81,
            "open": 32.97,
            "volume": 29706
        },
        "1741283400": {
            "close": 32.77,
            "date": "06-03-2025",
            "date_utc": 1741283400,
            "high": 32.87,
            "low": 32.74,
            "open": 32.85,
            "volume": 35113
        },
        "1741283700": {
            "close": 32.74,
            "date": "06-03-2025",
            "date_utc": 1741283700,
            "high": 32.82,
            "low": 32.69,
            "open": 32.77,
            "volume": 28325
        },
        "1741284000": {
            "close": 32.65,
            "date": "06-03-2025",
            "date_utc": 1741284000,
            "high": 32.74,
            "low": 32.62,
            "open": 32.74,
            "volume": 31094
        },
        "1741284300": {
            "close": 32.65,
            "date": "06-03-2025",
            "date_utc": 1741284300,
            "high": 32.66,
            "low": 32.58,
            "open": 32.65,
            "volume": 44571
        },
        "1741284600": {
            "close": 32.68,
            "date": "06-03-2025",
            "date_utc": 1741284600,
            "high": 32.69,
            "low": 32.59,
            "open": 32.65,
            "volume": 40173
        },
        "1741284900": {
            "close": 32.87,
            "date": "06-03-2025",
            "date_utc": 1741284900,
            "high": 32.9,
            "low": 32.67,
            "open": 32.67,
            "volume": 49199
        },
        "1741285200": {
            "close": 32.85,
            "date": "06-03-2025",
            "date_utc": 1741285200,
            "high": 32.98,
            "low": 32.83,
            "open": 32.87,
            "volume": 26652
        },
        "1741285500": {
            "close": 32.79,
            "date": "06-03-2025",
            "date_utc": 1741285500,
            "high": 32.87,
            "low": 32.76,
            "open": 32.83,
            "volume": 25169
        },
        "1741285800": {
            "close": 32.8,
            "date": "06-03-2025",
            "date_utc": 1741285800,
            "high": 32.86,
            "low": 32.76,
            "open": 32.79,
            "volume": 13202
        },
        "1741286100": {
            "close": 32.7,
            "date": "06-03-2025",
            "date_utc": 1741286100,
            "high": 32.82,
            "low": 32.7,
            "open": 32.82,
            "volume": 24723
        },
        "1741286400": {
            "close": 32.57,
            "date": "06-03-2025",
            "date_utc": 1741286400,
            "high": 32.68,
            "low": 32.52,
            "open": 32.67,
            "volume": 35196
        },
        "1741286700": {
            "close": 32.64,
            "date": "06-03-2025",
            "date_utc": 1741286700,
            "high": 32.71,
            "low": 32.56,
            "open": 32.56,
            "volume": 15642
        },
        "1741287000": {
            "close": 32.7,
            "date": "06-03-2025",
            "date_utc": 1741287000,
            "high": 32.76,
            "low": 32.63,
            "open": 32.63,
            "volume": 17163
        },
        "1741287300": {
            "close": 32.67,
            "date": "06-03-2025",
            "date_utc": 1741287300,
            "high": 32.7,
            "low": 32.65,
            "open": 32.7,
            "volume": 35905
        },
        "1741287600": {
            "close": 32.62,
            "date": "06-03-2025",
            "date_utc": 1741287600,
            "high": 32.72,
            "low": 32.61,
            "open": 32.68,
            "volume": 22485
        },
        "1741287900": {
            "close": 32.67,
            "date": "06-03-2025",
            "date_utc": 1741287900,
            "high": 32.69,
            "low": 32.62,
            "open": 32.64,
            "volume": 19221
        },
        "1741288200": {
            "close": 32.83,
            "date": "06-03-2025",
            "date_utc": 1741288200,
            "high": 32.83,
            "low": 32.69,
            "open": 32.69,
            "volume": 38107
        },
        "1741288500": {
            "close": 32.69,
            "date": "06-03-2025",
            "date_utc": 1741288500,
            "high": 32.87,
            "low": 32.68,
            "open": 32.85,
            "volume": 33375
        },
        "1741288800": {
            "close": 32.67,
            "date": "06-03-2025",
            "date_utc": 1741288800,
            "high": 32.71,
            "low": 32.62,
            "open": 32.7,
            "volume": 28040
        },
        "1741289100": {
            "close": 32.62,
            "date": "06-03-2025",
            "date_utc": 1741289100,
            "high": 32.66,
            "low": 32.58,
            "open": 32.66,
            "volume": 22973
        },
        "1741289400": {
            "close": 32.67,
            "date": "06-03-2025",
            "date_utc": 1741289400,
            "high": 32.69,
            "low": 32.6,
            "open": 32.62,
            "volume": 30463
        },
        "1741289700": {
            "close": 32.72,
            "date": "06-03-2025",
            "date_utc": 1741289700,
            "high": 32.75,
            "low": 32.66,
            "open": 32.68,
            "volume": 23901
        },
        "1741290000": {
            "close": 32.8,
            "date": "06-03-2025",
            "date_utc": 1741290000,
            "high": 32.87,
            "low": 32.71,
            "open": 32.72,
            "volume": 29260
        },
        "1741290300": {
            "close": 33.15,
            "date": "06-03-2025",
            "date_utc": 1741290300,
            "high": 33.17,
            "low": 32.82,
            "open": 32.82,
            "volume": 40784
        },
        "1741290600": {
            "close": 33.22,
            "date": "06-03-2025",
            "date_utc": 1741290600,
            "high": 33.35,
            "low": 33.13,
            "open": 33.14,
            "volume": 49049
        },
        "1741290900": {
            "close": 32.69,
            "date": "06-03-2025",
            "date_utc": 1741290900,
            "high": 33.22,
            "low": 32.69,
            "open": 33.2,
            "volume": 60711
        },
        "1741291200": {
            "close": 32.71,
            "date": "06-03-2025",
            "date_utc": 1741291200,
            "high": 32.77,
            "low": 32.6,
            "open": 32.68,
            "volume": 152358
        },
        "1741291500": {
            "close": 32.78,
            "date": "06-03-2025",
            "date_utc": 1741291500,
            "high": 32.8,
            "low": 32.68,
            "open": 32.7,
            "volume": 39404
        },
        "1741291800": {
            "close": 32.88,
            "date": "06-03-2025",
            "date_utc": 1741291800,
            "high": 32.9,
            "low": 32.8,
            "open": 32.8,
            "volume": 44117
        },
        "1741292100": {
            "close": 33.15,
            "date": "06-03-2025",
            "date_utc": 1741292100,
            "high": 33.15,
            "low": 32.85,
            "open": 32.85,
            "volume": 82061
        },
        "1741292400": {
            "close": 32.99,
            "date": "06-03-2025",
            "date_utc": 1741292400,
            "high": 33.16,
            "low": 32.95,
            "open": 33.1,
            "volume": 102918
        },
        "1741292700": {
            "close": 33.04,
            "date": "06-03-2025",
            "date_utc": 1741292700,
            "high": 33.09,
            "low": 32.96,
            "open": 32.98,
            "volume": 46667
        },
        "1741293000": {
            "close": 33.12,
            "date": "06-03-2025",
            "date_utc": 1741293000,
            "high": 33.19,
            "low": 33.03,
            "open": 33.04,
            "volume": 56858
        },
        "1741293300": {
            "close": 33.02,
            "date": "06-03-2025",
            "date_utc": 1741293300,
            "high": 33.14,
            "low": 33.01,
            "open": 33.1,
            "volume": 55742
        },
        "1741293600": {
            "close": 32.81,
            "date": "06-03-2025",
            "date_utc": 1741293600,
            "high": 33.03,
            "low": 32.79,
            "open": 33.02,
            "volume": 72050
        },
        "1741293900": {
            "close": 33.02,
            "date": "06-03-2025",
            "date_utc": 1741293900,
            "high": 33.03,
            "low": 32.81,
            "open": 32.81,
            "volume": 90794
        },
        "1741294200": {
            "close": 33.02,
            "date": "06-03-2025",
            "date_utc": 1741294200,
            "high": 33.11,
            "low": 32.97,
            "open": 33.03,
            "volume": 150847
        },
        "1741294500": {
            "close": 32.83,
            "date": "06-03-2025",
            "date_utc": 1741294500,
            "high": 33.03,
            "low": 32.82,
            "open": 33.03,
            "volume": 377338
        },
        "1741357800": {
            "close": 32.55,
            "date": "07-03-2025",
            "date_utc": 1741357800,
            "high": 32.62,
            "low": 32.08,
            "open": 32.25,
            "volume": 146798
        },
        "1741358100": {
            "close": 32.49,
            "date": "07-03-2025",
            "date_utc": 1741358100,
            "high": 32.57,
            "low": 32.32,
            "open": 32.56,
            "volume": 44692
        },
        "1741358400": {
            "close": 32.62,
            "date": "07-03-2025",
            "date_utc": 1741358400,
            "high": 32.68,
            "low": 32.47,
            "open": 32.54,
            "volume": 66554
        },
        "1741358700": {
            "close": 32.82,
            "date": "07-03-2025",
            "date_utc": 1741358700,
            "high": 32.92,
            "low": 32.54,
            "open": 32.54,
            "volume": 53440
        },
        "1741359000": {
            "close": 33.19,
            "date": "07-03-2025",
            "date_utc": 1741359000,
            "high": 33.19,
            "low": 32.81,
            "open": 32.83,
            "volume": 59088
        },
        "1741359300": {
            "close": 33.07,
            "date": "07-03-2025",
            "date_utc": 1741359300,
            "high": 33.28,
            "low": 32.99,
            "open": 33.2,
            "volume": 79015
        },
        "1741359600": {
            "close": 33.34,
            "date": "07-03-2025",
            "date_utc": 1741359600,
            "high": 33.38,
            "low": 32.98,
            "open": 33.04,
            "volume": 143108
        },
        "1741359900": {
            "close": 33.31,
            "date": "07-03-2025",
            "date_utc": 1741359900,
            "high": 33.36,
            "low": 33.19,
            "open": 33.36,
            "volume": 78158
        },
        "1741360200": {
            "close": 33.03,
            "date": "07-03-2025",
            "date_utc": 1741360200,
            "high": 33.38,
            "low": 33,
            "open": 33.35,
            "volume": 76276
        },
        "1741360500": {
            "close": 32.71,
            "date": "07-03-2025",
            "date_utc": 1741360500,
            "high": 33.03,
            "low": 32.71,
            "open": 32.98,
            "volume": 45342
        },
        "1741360800": {
            "close": 32.92,
            "date": "07-03-2025",
            "date_utc": 1741360800,
            "high": 32.97,
            "low": 32.66,
            "open": 32.72,
            "volume": 35051
        },
        "1741361100": {
            "close": 32.74,
            "date": "07-03-2025",
            "date_utc": 1741361100,
            "high": 32.9,
            "low": 32.72,
            "open": 32.9,
            "volume": 29941
        },
        "1741361400": {
            "close": 32.63,
            "date": "07-03-2025",
            "date_utc": 1741361400,
            "high": 32.73,
            "low": 32.54,
            "open": 32.73,
            "volume": 39861
        },
        "1741361700": {
            "close": 32.55,
            "date": "07-03-2025",
            "date_utc": 1741361700,
            "high": 32.63,
            "low": 32.45,
            "open": 32.63,
            "volume": 45342
        },
        "1741362000": {
            "close": 32.61,
            "date": "07-03-2025",
            "date_utc": 1741362000,
            "high": 32.63,
            "low": 32.47,
            "open": 32.51,
            "volume": 25441
        },
        "1741362300": {
            "close": 32.97,
            "date": "07-03-2025",
            "date_utc": 1741362300,
            "high": 33.01,
            "low": 32.58,
            "open": 32.61,
            "volume": 79887
        },
        "1741362600": {
            "close": 32.74,
            "date": "07-03-2025",
            "date_utc": 1741362600,
            "high": 32.95,
            "low": 32.7,
            "open": 32.94,
            "volume": 34416
        },
        "1741362900": {
            "close": 32.81,
            "date": "07-03-2025",
            "date_utc": 1741362900,
            "high": 32.86,
            "low": 32.72,
            "open": 32.77,
            "volume": 32890
        },
        "1741363200": {
            "close": 32.8,
            "date": "07-03-2025",
            "date_utc": 1741363200,
            "high": 32.82,
            "low": 32.7,
            "open": 32.75,
            "volume": 31151
        },
        "1741363500": {
            "close": 32.7,
            "date": "07-03-2025",
            "date_utc": 1741363500,
            "high": 32.85,
            "low": 32.7,
            "open": 32.79,
            "volume": 62836
        },
        "1741363800": {
            "close": 32.71,
            "date": "07-03-2025",
            "date_utc": 1741363800,
            "high": 32.74,
            "low": 32.7,
            "open": 32.73,
            "volume": 15282
        },
        "1741364100": {
            "close": 32.58,
            "date": "07-03-2025",
            "date_utc": 1741364100,
            "high": 32.71,
            "low": 32.58,
            "open": 32.71,
            "volume": 46205
        },
        "1741364400": {
            "close": 32.49,
            "date": "07-03-2025",
            "date_utc": 1741364400,
            "high": 32.62,
            "low": 32.46,
            "open": 32.59,
            "volume": 26509
        },
        "1741364700": {
            "close": 32.31,
            "date": "07-03-2025",
            "date_utc": 1741364700,
            "high": 32.5,
            "low": 32.31,
            "open": 32.49,
            "volume": 34980
        },
        "1741365000": {
            "close": 32.35,
            "date": "07-03-2025",
            "date_utc": 1741365000,
            "high": 32.36,
            "low": 32.24,
            "open": 32.32,
            "volume": 38789
        },
        "1741365300": {
            "close": 32.18,
            "date": "07-03-2025",
            "date_utc": 1741365300,
            "high": 32.35,
            "low": 32.14,
            "open": 32.35,
            "volume": 61753
        },
        "1741365600": {
            "close": 32.24,
            "date": "07-03-2025",
            "date_utc": 1741365600,
            "high": 32.24,
            "low": 32.1,
            "open": 32.17,
            "volume": 53372
        },
        "1741365900": {
            "close": 32.12,
            "date": "07-03-2025",
            "date_utc": 1741365900,
            "high": 32.24,
            "low": 32.11,
            "open": 32.24,
            "volume": 57508
        },
        "1741366200": {
            "close": 32.12,
            "date": "07-03-2025",
            "date_utc": 1741366200,
            "high": 32.16,
            "low": 32.05,
            "open": 32.16,
            "volume": 48018
        },
        "1741366500": {
            "close": 32.14,
            "date": "07-03-2025",
            "date_utc": 1741366500,
            "high": 32.16,
            "low": 32.04,
            "open": 32.14,
            "volume": 44392
        },
        "1741366800": {
            "close": 32.11,
            "date": "07-03-2025",
            "date_utc": 1741366800,
            "high": 32.19,
            "low": 32.09,
            "open": 32.13,
            "volume": 68989
        },
        "1741367100": {
            "close": 31.96,
            "date": "07-03-2025",
            "date_utc": 1741367100,
            "high": 32.16,
            "low": 31.96,
            "open": 32.14,
            "volume": 46896
        },
        "1741367400": {
            "close": 31.96,
            "date": "07-03-2025",
            "date_utc": 1741367400,
            "high": 32,
            "low": 31.83,
            "open": 31.97,
            "volume": 55336
        },
        "1741367700": {
            "close": 31.94,
            "date": "07-03-2025",
            "date_utc": 1741367700,
            "high": 31.98,
            "low": 31.91,
            "open": 31.95,
            "volume": 24735
        },
        "1741368000": {
            "close": 32.09,
            "date": "07-03-2025",
            "date_utc": 1741368000,
            "high": 32.1,
            "low": 31.89,
            "open": 31.94,
            "volume": 17017
        },
        "1741368300": {
            "close": 32.06,
            "date": "07-03-2025",
            "date_utc": 1741368300,
            "high": 32.11,
            "low": 32.02,
            "open": 32.1,
            "volume": 15769
        },
        "1741368600": {
            "close": 32.15,
            "date": "07-03-2025",
            "date_utc": 1741368600,
            "high": 32.15,
            "low": 31.92,
            "open": 32.05,
            "volume": 64688
        },
        "1741368900": {
            "close": 32.22,
            "date": "07-03-2025",
            "date_utc": 1741368900,
            "high": 32.23,
            "low": 32.12,
            "open": 32.14,
            "volume": 17334
        },
        "1741369200": {
            "close": 32.39,
            "date": "07-03-2025",
            "date_utc": 1741369200,
            "high": 32.4,
            "low": 32.18,
            "open": 32.19,
            "volume": 42257
        },
        "1741369500": {
            "close": 32.39,
            "date": "07-03-2025",
            "date_utc": 1741369500,
            "high": 32.52,
            "low": 32.38,
            "open": 32.38,
            "volume": 24554
        },
        "1741369800": {
            "close": 32.5,
            "date": "07-03-2025",
            "date_utc": 1741369800,
            "high": 32.54,
            "low": 32.36,
            "open": 32.4,
            "volume": 23189
        },
        "1741370100": {
            "close": 32.14,
            "date": "07-03-2025",
            "date_utc": 1741370100,
            "high": 32.49,
            "low": 32.1,
            "open": 32.45,
            "volume": 30105
        },
        "1741370400": {
            "close": 32.3,
            "date": "07-03-2025",
            "date_utc": 1741370400,
            "high": 32.32,
            "low": 32.11,
            "open": 32.13,
            "volume": 60237
        },
        "1741370700": {
            "close": 32.23,
            "date": "07-03-2025",
            "date_utc": 1741370700,
            "high": 32.41,
            "low": 32.19,
            "open": 32.32,
            "volume": 34495
        },
        "1741371000": {
            "close": 32.44,
            "date": "07-03-2025",
            "date_utc": 1741371000,
            "high": 32.44,
            "low": 32.21,
            "open": 32.21,
            "volume": 22633
        },
        "1741371300": {
            "close": 32.44,
            "date": "07-03-2025",
            "date_utc": 1741371300,
            "high": 32.49,
            "low": 32.4,
            "open": 32.41,
            "volume": 32856
        },
        "1741371600": {
            "close": 32.43,
            "date": "07-03-2025",
            "date_utc": 1741371600,
            "high": 32.54,
            "low": 32.41,
            "open": 32.43,
            "volume": 39449
        },
        "1741371900": {
            "close": 32.31,
            "date": "07-03-2025",
            "date_utc": 1741371900,
            "high": 32.44,
            "low": 32.29,
            "open": 32.43,
            "volume": 58252
        },
        "1741372200": {
            "close": 32.28,
            "date": "07-03-2025",
            "date_utc": 1741372200,
            "high": 32.35,
            "low": 32.22,
            "open": 32.3,
            "volume": 12793
        },
        "1741372500": {
            "close": 32.48,
            "date": "07-03-2025",
            "date_utc": 1741372500,
            "high": 32.49,
            "low": 32.27,
            "open": 32.28,
            "volume": 20817
        },
        "1741372800": {
            "close": 32.46,
            "date": "07-03-2025",
            "date_utc": 1741372800,
            "high": 32.5,
            "low": 32.39,
            "open": 32.47,
            "volume": 31439
        },
        "1741373100": {
            "close": 32.41,
            "date": "07-03-2025",
            "date_utc": 1741373100,
            "high": 32.49,
            "low": 32.41,
            "open": 32.44,
            "volume": 33073
        },
        "1741373400": {
            "close": 32.49,
            "date": "07-03-2025",
            "date_utc": 1741373400,
            "high": 32.51,
            "low": 32.37,
            "open": 32.42,
            "volume": 21224
        },
        "1741373700": {
            "close": 32.48,
            "date": "07-03-2025",
            "date_utc": 1741373700,
            "high": 32.51,
            "low": 32.43,
            "open": 32.49,
            "volume": 16686
        },
        "1741374000": {
            "close": 32.55,
            "date": "07-03-2025",
            "date_utc": 1741374000,
            "high": 32.56,
            "low": 32.46,
            "open": 32.46,
            "volume": 26744
        },
        "1741374300": {
            "close": 32.47,
            "date": "07-03-2025",
            "date_utc": 1741374300,
            "high": 32.58,
            "low": 32.47,
            "open": 32.57,
            "volume": 19974
        },
        "1741374600": {
            "close": 32.6,
            "date": "07-03-2025",
            "date_utc": 1741374600,
            "high": 32.6,
            "low": 32.47,
            "open": 32.47,
            "volume": 20679
        },
        "1741374900": {
            "close": 32.67,
            "date": "07-03-2025",
            "date_utc": 1741374900,
            "high": 32.67,
            "low": 32.57,
            "open": 32.59,
            "volume": 13649
        },
        "1741375200": {
            "close": 32.76,
            "date": "07-03-2025",
            "date_utc": 1741375200,
            "high": 32.76,
            "low": 32.68,
            "open": 32.68,
            "volume": 15915
        },
        "1741375500": {
            "close": 32.66,
            "date": "07-03-2025",
            "date_utc": 1741375500,
            "high": 32.76,
            "low": 32.59,
            "open": 32.76,
            "volume": 29512
        },
        "1741375800": {
            "close": 32.66,
            "date": "07-03-2025",
            "date_utc": 1741375800,
            "high": 32.72,
            "low": 32.66,
            "open": 32.66,
            "volume": 14616
        },
        "1741376100": {
            "close": 32.59,
            "date": "07-03-2025",
            "date_utc": 1741376100,
            "high": 32.67,
            "low": 32.59,
            "open": 32.67,
            "volume": 44368
        },
        "1741376400": {
            "close": 32.65,
            "date": "07-03-2025",
            "date_utc": 1741376400,
            "high": 32.68,
            "low": 32.61,
            "open": 32.63,
            "volume": 15618
        },
        "1741376700": {
            "close": 32.7,
            "date": "07-03-2025",
            "date_utc": 1741376700,
            "high": 32.73,
            "low": 32.62,
            "open": 32.65,
            "volume": 32230
        },
        "1741377000": {
            "close": 32.79,
            "date": "07-03-2025",
            "date_utc": 1741377000,
            "high": 32.81,
            "low": 32.69,
            "open": 32.7,
            "volume": 39851
        },
        "1741377300": {
            "close": 32.7,
            "date": "07-03-2025",
            "date_utc": 1741377300,
            "high": 32.83,
            "low": 32.67,
            "open": 32.8,
            "volume": 61163
        },
        "1741377600": {
            "close": 32.76,
            "date": "07-03-2025",
            "date_utc": 1741377600,
            "high": 32.81,
            "low": 32.68,
            "open": 32.7,
            "volume": 31714
        },
        "1741377900": {
            "close": 32.82,
            "date": "07-03-2025",
            "date_utc": 1741377900,
            "high": 32.83,
            "low": 32.74,
            "open": 32.74,
            "volume": 27748
        },
        "1741378200": {
            "close": 32.78,
            "date": "07-03-2025",
            "date_utc": 1741378200,
            "high": 32.87,
            "low": 32.77,
            "open": 32.83,
            "volume": 26759
        },
        "1741378500": {
            "close": 32.9,
            "date": "07-03-2025",
            "date_utc": 1741378500,
            "high": 32.91,
            "low": 32.73,
            "open": 32.78,
            "volume": 69581
        },
        "1741378800": {
            "close": 32.88,
            "date": "07-03-2025",
            "date_utc": 1741378800,
            "high": 32.9,
            "low": 32.78,
            "open": 32.9,
            "volume": 47585
        },
        "1741379100": {
            "close": 32.81,
            "date": "07-03-2025",
            "date_utc": 1741379100,
            "high": 32.93,
            "low": 32.8,
            "open": 32.88,
            "volume": 40254
        },
        "1741379400": {
            "close": 32.76,
            "date": "07-03-2025",
            "date_utc": 1741379400,
            "high": 32.82,
            "low": 32.75,
            "open": 32.79,
            "volume": 39239
        },
        "1741379700": {
            "close": 32.7,
            "date": "07-03-2025",
            "date_utc": 1741379700,
            "high": 32.78,
            "low": 32.64,
            "open": 32.77,
            "volume": 78837
        },
        "1741380000": {
            "close": 32.8,
            "date": "07-03-2025",
            "date_utc": 1741380000,
            "high": 32.81,
            "low": 32.66,
            "open": 32.71,
            "volume": 65406
        },
        "1741380300": {
            "close": 32.87,
            "date": "07-03-2025",
            "date_utc": 1741380300,
            "high": 32.87,
            "low": 32.76,
            "open": 32.78,
            "volume": 66902
        },
        "1741380600": {
            "close": 32.94,
            "date": "07-03-2025",
            "date_utc": 1741380600,
            "high": 32.94,
            "low": 32.82,
            "open": 32.86,
            "volume": 107327
        },
        "1741380900": {
            "close": 32.86,
            "date": "07-03-2025",
            "date_utc": 1741380900,
            "high": 32.99,
            "low": 32.8,
            "open": 32.93,
            "volume": 358485
        },
        "1741613400": {
            "close": 32.1,
            "date": "10-03-2025",
            "date_utc": 1741613400,
            "high": 32.57,
            "low": 32.1,
            "open": 32.42,
            "volume": 124129
        },
        "1741613700": {
            "close": 32.5,
            "date": "10-03-2025",
            "date_utc": 1741613700,
            "high": 32.55,
            "low": 32.21,
            "open": 32.26,
            "volume": 77460
        },
        "1741614000": {
            "close": 32.41,
            "date": "10-03-2025",
            "date_utc": 1741614000,
            "high": 32.53,
            "low": 32.37,
            "open": 32.46,
            "volume": 40064
        },
        "1741614300": {
            "close": 32.06,
            "date": "10-03-2025",
            "date_utc": 1741614300,
            "high": 32.42,
            "low": 31.98,
            "open": 32.4,
            "volume": 82957
        },
        "1741614600": {
            "close": 31.97,
            "date": "10-03-2025",
            "date_utc": 1741614600,
            "high": 32.12,
            "low": 31.84,
            "open": 32.06,
            "volume": 69179
        },
        "1741614900": {
            "close": 31.87,
            "date": "10-03-2025",
            "date_utc": 1741614900,
            "high": 32.01,
            "low": 31.85,
            "open": 31.99,
            "volume": 50576
        },
        "1741615200": {
            "close": 31.77,
            "date": "10-03-2025",
            "date_utc": 1741615200,
            "high": 31.91,
            "low": 31.74,
            "open": 31.87,
            "volume": 54032
        },
        "1741615500": {
            "close": 31.73,
            "date": "10-03-2025",
            "date_utc": 1741615500,
            "high": 31.88,
            "low": 31.62,
            "open": 31.78,
            "volume": 56026
        },
        "1741615800": {
            "close": 31.82,
            "date": "10-03-2025",
            "date_utc": 1741615800,
            "high": 31.82,
            "low": 31.63,
            "open": 31.7,
            "volume": 38249
        },
        "1741616100": {
            "close": 31.84,
            "date": "10-03-2025",
            "date_utc": 1741616100,
            "high": 31.9,
            "low": 31.76,
            "open": 31.82,
            "volume": 37680
        },
        "1741616400": {
            "close": 31.95,
            "date": "10-03-2025",
            "date_utc": 1741616400,
            "high": 31.95,
            "low": 31.76,
            "open": 31.81,
            "volume": 41051
        },
        "1741616700": {
            "close": 31.83,
            "date": "10-03-2025",
            "date_utc": 1741616700,
            "high": 31.98,
            "low": 31.77,
            "open": 31.97,
            "volume": 77010
        },
        "1741617000": {
            "close": 31.63,
            "date": "10-03-2025",
            "date_utc": 1741617000,
            "high": 31.82,
            "low": 31.61,
            "open": 31.82,
            "volume": 48089
        },
        "1741617300": {
            "close": 31.7,
            "date": "10-03-2025",
            "date_utc": 1741617300,
            "high": 31.74,
            "low": 31.6,
            "open": 31.63,
            "volume": 43026
        },
        "1741617600": {
            "close": 31.79,
            "date": "10-03-2025",
            "date_utc": 1741617600,
            "high": 31.83,
            "low": 31.69,
            "open": 31.69,
            "volume": 49966
        },
        "1741617900": {
            "close": 31.82,
            "date": "10-03-2025",
            "date_utc": 1741617900,
            "high": 31.91,
            "low": 31.71,
            "open": 31.79,
            "volume": 59274
        },
        "1741618200": {
            "close": 31.77,
            "date": "10-03-2025",
            "date_utc": 1741618200,
            "high": 31.85,
            "low": 31.73,
            "open": 31.83,
            "volume": 35729
        },
        "1741618500": {
            "close": 31.76,
            "date": "10-03-2025",
            "date_utc": 1741618500,
            "high": 31.83,
            "low": 31.68,
            "open": 31.76,
            "volume": 47700
        },
        "1741618800": {
            "close": 31.77,
            "date": "10-03-2025",
            "date_utc": 1741618800,
            "high": 31.88,
            "low": 31.72,
            "open": 31.77,
            "volume": 30536
        },
        "1741619100": {
            "close": 31.94,
            "date": "10-03-2025",
            "date_utc": 1741619100,
            "high": 31.94,
            "low": 31.77,
            "open": 31.77,
            "volume": 45746
        },
        "1741619400": {
            "close": 32.07,
            "date": "10-03-2025",
            "date_utc": 1741619400,
            "high": 32.09,
            "low": 31.9,
            "open": 31.94,
            "volume": 55831
        },
        "1741619700": {
            "close": 32.11,
            "date": "10-03-2025",
            "date_utc": 1741619700,
            "high": 32.17,
            "low": 32.04,
            "open": 32.07,
            "volume": 51021
        },
        "1741620000": {
            "close": 32.02,
            "date": "10-03-2025",
            "date_utc": 1741620000,
            "high": 32.15,
            "low": 32,
            "open": 32.1,
            "volume": 31877
        },
        "1741620300": {
            "close": 31.89,
            "date": "10-03-2025",
            "date_utc": 1741620300,
            "high": 32.03,
            "low": 31.86,
            "open": 32.01,
            "volume": 19612
        },
        "1741620600": {
            "close": 32.04,
            "date": "10-03-2025",
            "date_utc": 1741620600,
            "high": 32.06,
            "low": 31.88,
            "open": 31.88,
            "volume": 26005
        },
        "1741620900": {
            "close": 32.15,
            "date": "10-03-2025",
            "date_utc": 1741620900,
            "high": 32.21,
            "low": 32.03,
            "open": 32.04,
            "volume": 41165
        },
        "1741621200": {
            "close": 31.91,
            "date": "10-03-2025",
            "date_utc": 1741621200,
            "high": 32.19,
            "low": 31.88,
            "open": 32.15,
            "volume": 61600
        },
        "1741621500": {
            "close": 31.98,
            "date": "10-03-2025",
            "date_utc": 1741621500,
            "high": 32.05,
            "low": 31.9,
            "open": 31.92,
            "volume": 26774
        },
        "1741621800": {
            "close": 31.89,
            "date": "10-03-2025",
            "date_utc": 1741621800,
            "high": 31.99,
            "low": 31.86,
            "open": 31.99,
            "volume": 74944
        },
        "1741622100": {
            "close": 31.79,
            "date": "10-03-2025",
            "date_utc": 1741622100,
            "high": 31.91,
            "low": 31.71,
            "open": 31.9,
            "volume": 65513
        },
        "1741622400": {
            "close": 31.79,
            "date": "10-03-2025",
            "date_utc": 1741622400,
            "high": 31.83,
            "low": 31.75,
            "open": 31.77,
            "volume": 15914
        },
        "1741622700": {
            "close": 31.7,
            "date": "10-03-2025",
            "date_utc": 1741622700,
            "high": 31.79,
            "low": 31.67,
            "open": 31.76,
            "volume": 59399
        },
        "1741623000": {
            "close": 31.83,
            "date": "10-03-2025",
            "date_utc": 1741623000,
            "high": 31.84,
            "low": 31.79,
            "open": 31.79,
            "volume": 18065
        },
        "1741623300": {
            "close": 31.72,
            "date": "10-03-2025",
            "date_utc": 1741623300,
            "high": 31.84,
            "low": 31.69,
            "open": 31.83,
            "volume": 20795
        },
        "1741623600": {
            "close": 31.72,
            "date": "10-03-2025",
            "date_utc": 1741623600,
            "high": 31.77,
            "low": 31.69,
            "open": 31.72,
            "volume": 28347
        },
        "1741623900": {
            "close": 31.76,
            "date": "10-03-2025",
            "date_utc": 1741623900,
            "high": 31.76,
            "low": 31.65,
            "open": 31.73,
            "volume": 33642
        },
        "1741624200": {
            "close": 31.85,
            "date": "10-03-2025",
            "date_utc": 1741624200,
            "high": 31.89,
            "low": 31.75,
            "open": 31.77,
            "volume": 23825
        },
        "1741624500": {
            "close": 31.55,
            "date": "10-03-2025",
            "date_utc": 1741624500,
            "high": 31.86,
            "low": 31.55,
            "open": 31.86,
            "volume": 26179
        },
        "1741624800": {
            "close": 31.59,
            "date": "10-03-2025",
            "date_utc": 1741624800,
            "high": 31.61,
            "low": 31.52,
            "open": 31.58,
            "volume": 43637
        },
        "1741625100": {
            "close": 31.53,
            "date": "10-03-2025",
            "date_utc": 1741625100,
            "high": 31.62,
            "low": 31.53,
            "open": 31.61,
            "volume": 22716
        },
        "1741625400": {
            "close": 31.56,
            "date": "10-03-2025",
            "date_utc": 1741625400,
            "high": 31.65,
            "low": 31.53,
            "open": 31.55,
            "volume": 32256
        },
        "1741625700": {
            "close": 31.53,
            "date": "10-03-2025",
            "date_utc": 1741625700,
            "high": 31.61,
            "low": 31.5,
            "open": 31.56,
            "volume": 39331
        },
        "1741626000": {
            "close": 31.54,
            "date": "10-03-2025",
            "date_utc": 1741626000,
            "high": 31.59,
            "low": 31.5,
            "open": 31.53,
            "volume": 28512
        },
        "1741626300": {
            "close": 31.52,
            "date": "10-03-2025",
            "date_utc": 1741626300,
            "high": 31.59,
            "low": 31.51,
            "open": 31.55,
            "volume": 32036
        },
        "1741626600": {
            "close": 31.35,
            "date": "10-03-2025",
            "date_utc": 1741626600,
            "high": 31.51,
            "low": 31.35,
            "open": 31.51,
            "volume": 47017
        },
        "1741626900": {
            "close": 31.28,
            "date": "10-03-2025",
            "date_utc": 1741626900,
            "high": 31.37,
            "low": 31.24,
            "open": 31.35,
            "volume": 71919
        },
        "1741627200": {
            "close": 31.26,
            "date": "10-03-2025",
            "date_utc": 1741627200,
            "high": 31.31,
            "low": 31.23,
            "open": 31.3,
            "volume": 53279
        },
        "1741627500": {
            "close": 31.07,
            "date": "10-03-2025",
            "date_utc": 1741627500,
            "high": 31.26,
            "low": 31.05,
            "open": 31.26,
            "volume": 66327
        },
        "1741627800": {
            "close": 31.04,
            "date": "10-03-2025",
            "date_utc": 1741627800,
            "high": 31.1,
            "low": 31.01,
            "open": 31.06,
            "volume": 66023
        },
        "1741628100": {
            "close": 31.14,
            "date": "10-03-2025",
            "date_utc": 1741628100,
            "high": 31.14,
            "low": 30.99,
            "open": 31.05,
            "volume": 63677
        },
        "1741628400": {
            "close": 31.13,
            "date": "10-03-2025",
            "date_utc": 1741628400,
            "high": 31.18,
            "low": 31.11,
            "open": 31.14,
            "volume": 37431
        },
        "1741628700": {
            "close": 31.17,
            "date": "10-03-2025",
            "date_utc": 1741628700,
            "high": 31.19,
            "low": 31.11,
            "open": 31.13,
            "volume": 40488
        },
        "1741629000": {
            "close": 31.14,
            "date": "10-03-2025",
            "date_utc": 1741629000,
            "high": 31.25,
            "low": 31.11,
            "open": 31.17,
            "volume": 216002
        },
        "1741629300": {
            "close": 30.97,
            "date": "10-03-2025",
            "date_utc": 1741629300,
            "high": 31.14,
            "low": 30.96,
            "open": 31.13,
            "volume": 46629
        },
        "1741629600": {
            "close": 30.87,
            "date": "10-03-2025",
            "date_utc": 1741629600,
            "high": 30.98,
            "low": 30.84,
            "open": 30.96,
            "volume": 55862
        },
        "1741629900": {
            "close": 30.86,
            "date": "10-03-2025",
            "date_utc": 1741629900,
            "high": 30.89,
            "low": 30.68,
            "open": 30.87,
            "volume": 105452
        },
        "1741630200": {
            "close": 30.9,
            "date": "10-03-2025",
            "date_utc": 1741630200,
            "high": 30.94,
            "low": 30.78,
            "open": 30.85,
            "volume": 74442
        },
        "1741630500": {
            "close": 31.05,
            "date": "10-03-2025",
            "date_utc": 1741630500,
            "high": 31.08,
            "low": 30.89,
            "open": 30.9,
            "volume": 50432
        },
        "1741630800": {
            "close": 31.05,
            "date": "10-03-2025",
            "date_utc": 1741630800,
            "high": 31.09,
            "low": 31,
            "open": 31.05,
            "volume": 48269
        },
        "1741631100": {
            "close": 30.95,
            "date": "10-03-2025",
            "date_utc": 1741631100,
            "high": 31.07,
            "low": 30.91,
            "open": 31.05,
            "volume": 69895
        },
        "1741631400": {
            "close": 30.82,
            "date": "10-03-2025",
            "date_utc": 1741631400,
            "high": 31.04,
            "low": 30.81,
            "open": 30.96,
            "volume": 89257
        },
        "1741631700": {
            "close": 30.78,
            "date": "10-03-2025",
            "date_utc": 1741631700,
            "high": 30.83,
            "low": 30.74,
            "open": 30.81,
            "volume": 52879
        },
        "1741632000": {
            "close": 30.79,
            "date": "10-03-2025",
            "date_utc": 1741632000,
            "high": 30.83,
            "low": 30.72,
            "open": 30.76,
            "volume": 93146
        },
        "1741632300": {
            "close": 30.77,
            "date": "10-03-2025",
            "date_utc": 1741632300,
            "high": 30.82,
            "low": 30.76,
            "open": 30.8,
            "volume": 36090
        },
        "1741632600": {
            "close": 30.72,
            "date": "10-03-2025",
            "date_utc": 1741632600,
            "high": 30.83,
            "low": 30.7,
            "open": 30.78,
            "volume": 35634
        },
        "1741632900": {
            "close": 30.64,
            "date": "10-03-2025",
            "date_utc": 1741632900,
            "high": 30.75,
            "low": 30.63,
            "open": 30.74,
            "volume": 62229
        },
        "1741633200": {
            "close": 30.68,
            "date": "10-03-2025",
            "date_utc": 1741633200,
            "high": 30.76,
            "low": 30.63,
            "open": 30.63,
            "volume": 63716
        },
        "1741633500": {
            "close": 30.67,
            "date": "10-03-2025",
            "date_utc": 1741633500,
            "high": 30.73,
            "low": 30.63,
            "open": 30.68,
            "volume": 48537
        },
        "1741633800": {
            "close": 30.85,
            "date": "10-03-2025",
            "date_utc": 1741633800,
            "high": 30.86,
            "low": 30.64,
            "open": 30.68,
            "volume": 42167
        },
        "1741634100": {
            "close": 31.01,
            "date": "10-03-2025",
            "date_utc": 1741634100,
            "high": 31.06,
            "low": 30.85,
            "open": 30.87,
            "volume": 57591
        },
        "1741634400": {
            "close": 31.12,
            "date": "10-03-2025",
            "date_utc": 1741634400,
            "high": 31.13,
            "low": 31.01,
            "open": 31.02,
            "volume": 41894
        },
        "1741634700": {
            "close": 31.06,
            "date": "10-03-2025",
            "date_utc": 1741634700,
            "high": 31.23,
            "low": 31.03,
            "open": 31.13,
            "volume": 54055
        },
        "1741635000": {
            "close": 31.28,
            "date": "10-03-2025",
            "date_utc": 1741635000,
            "high": 31.28,
            "low": 31.05,
            "open": 31.05,
            "volume": 69279
        },
        "1741635300": {
            "close": 31.26,
            "date": "10-03-2025",
            "date_utc": 1741635300,
            "high": 31.35,
            "low": 31.24,
            "open": 31.27,
            "volume": 82010
        },
        "1741635600": {
            "close": 31.09,
            "date": "10-03-2025",
            "date_utc": 1741635600,
            "high": 31.28,
            "low": 31.07,
            "open": 31.28,
            "volume": 81179
        },
        "1741635900": {
            "close": 31.05,
            "date": "10-03-2025",
            "date_utc": 1741635900,
            "high": 31.1,
            "low": 31,
            "open": 31.08,
            "volume": 98216
        },
        "1741636200": {
            "close": 31.08,
            "date": "10-03-2025",
            "date_utc": 1741636200,
            "high": 31.14,
            "low": 31.02,
            "open": 31.07,
            "volume": 158976
        },
        "1741636500": {
            "close": 30.98,
            "date": "10-03-2025",
            "date_utc": 1741636500,
            "high": 31.16,
            "low": 30.96,
            "open": 31.09,
            "volume": 445153
        },
        "1741699800": {
            "close": 31.5,
            "date": "11-03-2025",
            "date_utc": 1741699800,
            "high": 31.58,
            "low": 31.03,
            "open": 31.2,
            "volume": 167373
        },
        "1741700100": {
            "close": 31.91,
            "date": "11-03-2025",
            "date_utc": 1741700100,
            "high": 31.91,
            "low": 31.47,
            "open": 31.47,
            "volume": 100587
        },
        "1741700400": {
            "close": 31.86,
            "date": "11-03-2025",
            "date_utc": 1741700400,
            "high": 31.94,
            "low": 31.58,
            "open": 31.94,
            "volume": 87411
        },
        "1741700700": {
            "close": 32.13,
            "date": "11-03-2025",
            "date_utc": 1741700700,
            "high": 32.15,
            "low": 31.7,
            "open": 31.87,
            "volume": 148116
        },
        "1741701000": {
            "close": 32.03,
            "date": "11-03-2025",
            "date_utc": 1741701000,
            "high": 32.18,
            "low": 31.93,
            "open": 32.13,
            "volume": 163603
        },
        "1741701300": {
            "close": 31.81,
            "date": "11-03-2025",
            "date_utc": 1741701300,
            "high": 32.04,
            "low": 31.77,
            "open": 32.04,
            "volume": 48861
        },
        "1741701600": {
            "close": 31.56,
            "date": "11-03-2025",
            "date_utc": 1741701600,
            "high": 32.47,
            "low": 31.49,
            "open": 31.81,
            "volume": 725747
        },
        "1741701900": {
            "close": 31.83,
            "date": "11-03-2025",
            "date_utc": 1741701900,
            "high": 32.07,
            "low": 31.58,
            "open": 31.58,
            "volume": 457544
        },
        "1741702200": {
            "close": 31.5,
            "date": "11-03-2025",
            "date_utc": 1741702200,
            "high": 31.83,
            "low": 31.4,
            "open": 31.83,
            "volume": 206977
        },
        "1741702500": {
            "close": 31.57,
            "date": "11-03-2025",
            "date_utc": 1741702500,
            "high": 31.65,
            "low": 31.29,
            "open": 31.48,
            "volume": 57363
        },
        "1741702800": {
            "close": 31.57,
            "date": "11-03-2025",
            "date_utc": 1741702800,
            "high": 31.65,
            "low": 31.45,
            "open": 31.58,
            "volume": 64255
        },
        "1741703100": {
            "close": 31.38,
            "date": "11-03-2025",
            "date_utc": 1741703100,
            "high": 31.61,
            "low": 31.31,
            "open": 31.58,
            "volume": 117115
        },
        "1741703400": {
            "close": 31.43,
            "date": "11-03-2025",
            "date_utc": 1741703400,
            "high": 31.49,
            "low": 31.33,
            "open": 31.34,
            "volume": 45354
        },
        "1741703700": {
            "close": 31.21,
            "date": "11-03-2025",
            "date_utc": 1741703700,
            "high": 31.48,
            "low": 31.19,
            "open": 31.42,
            "volume": 150879
        },
        "1741704000": {
            "close": 31.46,
            "date": "11-03-2025",
            "date_utc": 1741704000,
            "high": 31.48,
            "low": 31.23,
            "open": 31.24,
            "volume": 71531
        },
        "1741704300": {
            "close": 31.4,
            "date": "11-03-2025",
            "date_utc": 1741704300,
            "high": 31.5,
            "low": 31.35,
            "open": 31.44,
            "volume": 57885
        },
        "1741704600": {
            "close": 31.53,
            "date": "11-03-2025",
            "date_utc": 1741704600,
            "high": 31.6,
            "low": 31.4,
            "open": 31.42,
            "volume": 55911
        },
        "1741704900": {
            "close": 31.44,
            "date": "11-03-2025",
            "date_utc": 1741704900,
            "high": 31.55,
            "low": 31.4,
            "open": 31.53,
            "volume": 18378
        },
        "1741705200": {
            "close": 31.44,
            "date": "11-03-2025",
            "date_utc": 1741705200,
            "high": 31.47,
            "low": 31.28,
            "open": 31.32,
            "volume": 75330
        },
        "1741705500": {
            "close": 31.89,
            "date": "11-03-2025",
            "date_utc": 1741705500,
            "high": 31.96,
            "low": 31.44,
            "open": 31.44,
            "volume": 81993
        },
        "1741705800": {
            "close": 31.93,
            "date": "11-03-2025",
            "date_utc": 1741705800,
            "high": 32.04,
            "low": 31.84,
            "open": 31.9,
            "volume": 59188
        },
        "1741706100": {
            "close": 31.83,
            "date": "11-03-2025",
            "date_utc": 1741706100,
            "high": 31.98,
            "low": 31.83,
            "open": 31.92,
            "volume": 22024
        },
        "1741706400": {
            "close": 31.72,
            "date": "11-03-2025",
            "date_utc": 1741706400,
            "high": 31.9,
            "low": 31.68,
            "open": 31.86,
            "volume": 31643
        },
        "1741706700": {
            "close": 31.68,
            "date": "11-03-2025",
            "date_utc": 1741706700,
            "high": 31.84,
            "low": 31.68,
            "open": 31.75,
            "volume": 37093
        },
        "1741707000": {
            "close": 31.84,
            "date": "11-03-2025",
            "date_utc": 1741707000,
            "high": 31.87,
            "low": 31.68,
            "open": 31.68,
            "volume": 21956
        },
        "1741707300": {
            "close": 31.83,
            "date": "11-03-2025",
            "date_utc": 1741707300,
            "high": 31.9,
            "low": 31.72,
            "open": 31.84,
            "volume": 21356
        },
        "1741707600": {
            "close": 31.88,
            "date": "11-03-2025",
            "date_utc": 1741707600,
            "high": 31.98,
            "low": 31.84,
            "open": 31.84,
            "volume": 25503
        },
        "1741707900": {
            "close": 31.9,
            "date": "11-03-2025",
            "date_utc": 1741707900,
            "high": 31.92,
            "low": 31.76,
            "open": 31.89,
            "volume": 22599
        },
        "1741708200": {
            "close": 31.93,
            "date": "11-03-2025",
            "date_utc": 1741708200,
            "high": 31.96,
            "low": 31.85,
            "open": 31.9,
            "volume": 17832
        },
        "1741708500": {
            "close": 31.76,
            "date": "11-03-2025",
            "date_utc": 1741708500,
            "high": 31.94,
            "low": 31.76,
            "open": 31.92,
            "volume": 45604
        },
        "1741708800": {
            "close": 31.9,
            "date": "11-03-2025",
            "date_utc": 1741708800,
            "high": 31.91,
            "low": 31.72,
            "open": 31.74,
            "volume": 39350
        },
        "1741709100": {
            "close": 31.9,
            "date": "11-03-2025",
            "date_utc": 1741709100,
            "high": 31.94,
            "low": 31.85,
            "open": 31.9,
            "volume": 30267
        },
        "1741709400": {
            "close": 31.75,
            "date": "11-03-2025",
            "date_utc": 1741709400,
            "high": 31.91,
            "low": 31.71,
            "open": 31.9,
            "volume": 60918
        },
        "1741709700": {
            "close": 31.83,
            "date": "11-03-2025",
            "date_utc": 1741709700,
            "high": 31.89,
            "low": 31.72,
            "open": 31.75,
            "volume": 33840
        },
        "1741710000": {
            "close": 31.72,
            "date": "11-03-2025",
            "date_utc": 1741710000,
            "high": 31.83,
            "low": 31.72,
            "open": 31.83,
            "volume": 14261
        },
        "1741710300": {
            "close": 31.75,
            "date": "11-03-2025",
            "date_utc": 1741710300,
            "high": 31.82,
            "low": 31.7,
            "open": 31.74,
            "volume": 49458
        },
        "1741710600": {
            "close": 31.83,
            "date": "11-03-2025",
            "date_utc": 1741710600,
            "high": 31.84,
            "low": 31.72,
            "open": 31.74,
            "volume": 24723
        },
        "1741710900": {
            "close": 31.78,
            "date": "11-03-2025",
            "date_utc": 1741710900,
            "high": 31.9,
            "low": 31.74,
            "open": 31.83,
            "volume": 29129
        },
        "1741711200": {
            "close": 31.85,
            "date": "11-03-2025",
            "date_utc": 1741711200,
            "high": 31.95,
            "low": 31.71,
            "open": 31.76,
            "volume": 37930
        },
        "1741711500": {
            "close": 31.85,
            "date": "11-03-2025",
            "date_utc": 1741711500,
            "high": 31.89,
            "low": 31.8,
            "open": 31.81,
            "volume": 13726
        },
        "1741711800": {
            "close": 31.77,
            "date": "11-03-2025",
            "date_utc": 1741711800,
            "high": 31.85,
            "low": 31.69,
            "open": 31.83,
            "volume": 14856
        },
        "1741712100": {
            "close": 31.77,
            "date": "11-03-2025",
            "date_utc": 1741712100,
            "high": 31.81,
            "low": 31.68,
            "open": 31.73,
            "volume": 13310
        },
        "1741712400": {
            "close": 31.72,
            "date": "11-03-2025",
            "date_utc": 1741712400,
            "high": 31.77,
            "low": 31.7,
            "open": 31.74,
            "volume": 28539
        },
        "1741712700": {
            "close": 31.75,
            "date": "11-03-2025",
            "date_utc": 1741712700,
            "high": 31.78,
            "low": 31.67,
            "open": 31.74,
            "volume": 32604
        },
        "1741713000": {
            "close": 31.67,
            "date": "11-03-2025",
            "date_utc": 1741713000,
            "high": 31.78,
            "low": 31.66,
            "open": 31.73,
            "volume": 19238
        },
        "1741713300": {
            "close": 31.67,
            "date": "11-03-2025",
            "date_utc": 1741713300,
            "high": 31.78,
            "low": 31.63,
            "open": 31.66,
            "volume": 36388
        },
        "1741713600": {
            "close": 31.48,
            "date": "11-03-2025",
            "date_utc": 1741713600,
            "high": 31.67,
            "low": 31.43,
            "open": 31.64,
            "volume": 39303
        },
        "1741713900": {
            "close": 31.5,
            "date": "11-03-2025",
            "date_utc": 1741713900,
            "high": 31.55,
            "low": 31.43,
            "open": 31.48,
            "volume": 43054
        },
        "1741714200": {
            "close": 31.51,
            "date": "11-03-2025",
            "date_utc": 1741714200,
            "high": 31.66,
            "low": 31.48,
            "open": 31.5,
            "volume": 37182
        },
        "1741714500": {
            "close": 31.5,
            "date": "11-03-2025",
            "date_utc": 1741714500,
            "high": 31.55,
            "low": 31.41,
            "open": 31.51,
            "volume": 43745
        },
        "1741714800": {
            "close": 31.56,
            "date": "11-03-2025",
            "date_utc": 1741714800,
            "high": 31.63,
            "low": 31.5,
            "open": 31.5,
            "volume": 46677
        },
        "1741715100": {
            "close": 31.58,
            "date": "11-03-2025",
            "date_utc": 1741715100,
            "high": 31.68,
            "low": 31.52,
            "open": 31.57,
            "volume": 44187
        },
        "1741715400": {
            "close": 31.57,
            "date": "11-03-2025",
            "date_utc": 1741715400,
            "high": 31.65,
            "low": 31.55,
            "open": 31.58,
            "volume": 37286
        },
        "1741715700": {
            "close": 31.42,
            "date": "11-03-2025",
            "date_utc": 1741715700,
            "high": 31.56,
            "low": 31.32,
            "open": 31.55,
            "volume": 52170
        },
        "1741716000": {
            "close": 31.59,
            "date": "11-03-2025",
            "date_utc": 1741716000,
            "high": 31.68,
            "low": 31.41,
            "open": 31.41,
            "volume": 59849
        },
        "1741716300": {
            "close": 31.59,
            "date": "11-03-2025",
            "date_utc": 1741716300,
            "high": 31.68,
            "low": 31.5,
            "open": 31.59,
            "volume": 44487
        },
        "1741716600": {
            "close": 31.75,
            "date": "11-03-2025",
            "date_utc": 1741716600,
            "high": 31.78,
            "low": 31.6,
            "open": 31.6,
            "volume": 68332
        },
        "1741716900": {
            "close": 31.77,
            "date": "11-03-2025",
            "date_utc": 1741716900,
            "high": 31.81,
            "low": 31.7,
            "open": 31.75,
            "volume": 22724
        },
        "1741717200": {
            "close": 31.87,
            "date": "11-03-2025",
            "date_utc": 1741717200,
            "high": 31.96,
            "low": 31.78,
            "open": 31.78,
            "volume": 27778
        },
        "1741717500": {
            "close": 31.77,
            "date": "11-03-2025",
            "date_utc": 1741717500,
            "high": 31.9,
            "low": 31.76,
            "open": 31.87,
            "volume": 38218
        },
        "1741717800": {
            "close": 31.79,
            "date": "11-03-2025",
            "date_utc": 1741717800,
            "high": 31.83,
            "low": 31.72,
            "open": 31.79,
            "volume": 41098
        },
        "1741718100": {
            "close": 31.86,
            "date": "11-03-2025",
            "date_utc": 1741718100,
            "high": 31.86,
            "low": 31.73,
            "open": 31.8,
            "volume": 40450
        },
        "1741718400": {
            "close": 32.03,
            "date": "11-03-2025",
            "date_utc": 1741718400,
            "high": 32.04,
            "low": 31.82,
            "open": 31.85,
            "volume": 56909
        },
        "1741718700": {
            "close": 32,
            "date": "11-03-2025",
            "date_utc": 1741718700,
            "high": 32.05,
            "low": 31.88,
            "open": 32.03,
            "volume": 32271
        },
        "1741719000": {
            "close": 32.31,
            "date": "11-03-2025",
            "date_utc": 1741719000,
            "high": 32.31,
            "low": 31.99,
            "open": 32,
            "volume": 139411
        },
        "1741719300": {
            "close": 32.28,
            "date": "11-03-2025",
            "date_utc": 1741719300,
            "high": 32.43,
            "low": 32.24,
            "open": 32.28,
            "volume": 74292
        },
        "1741719600": {
            "close": 32.25,
            "date": "11-03-2025",
            "date_utc": 1741719600,
            "high": 32.29,
            "low": 32.13,
            "open": 32.29,
            "volume": 78085
        },
        "1741719900": {
            "close": 32.26,
            "date": "11-03-2025",
            "date_utc": 1741719900,
            "high": 32.41,
            "low": 32.16,
            "open": 32.26,
            "volume": 134240
        },
        "1741720200": {
            "close": 32.04,
            "date": "11-03-2025",
            "date_utc": 1741720200,
            "high": 32.26,
            "low": 31.98,
            "open": 32.24,
            "volume": 193687
        },
        "1741720500": {
            "close": 31.96,
            "date": "11-03-2025",
            "date_utc": 1741720500,
            "high": 32.06,
            "low": 31.95,
            "open": 32.04,
            "volume": 132952
        },
        "1741720800": {
            "close": 31.87,
            "date": "11-03-2025",
            "date_utc": 1741720800,
            "high": 32.06,
            "low": 31.87,
            "open": 31.96,
            "volume": 63916
        },
        "1741721100": {
            "close": 31.96,
            "date": "11-03-2025",
            "date_utc": 1741721100,
            "high": 32.04,
            "low": 31.87,
            "open": 31.87,
            "volume": 58491
        },
        "1741721400": {
            "close": 31.95,
            "date": "11-03-2025",
            "date_utc": 1741721400,
            "high": 32.01,
            "low": 31.89,
            "open": 31.95,
            "volume": 79188
        },
        "1741721700": {
            "close": 32.03,
            "date": "11-03-2025",
            "date_utc": 1741721700,
            "high": 32.08,
            "low": 31.91,
            "open": 31.94,
            "volume": 130031
        },
        "1741722000": {
            "close": 32.08,
            "date": "11-03-2025",
            "date_utc": 1741722000,
            "high": 32.09,
            "low": 31.96,
            "open": 32.03,
            "volume": 87904
        },
        "1741722300": {
            "close": 32.13,
            "date": "11-03-2025",
            "date_utc": 1741722300,
            "high": 32.14,
            "low": 32.01,
            "open": 32.07,
            "volume": 115432
        },
        "1741722600": {
            "close": 32.01,
            "date": "11-03-2025",
            "date_utc": 1741722600,
            "high": 32.13,
            "low": 31.87,
            "open": 32.13,
            "volume": 255339
        },
        "1741722900": {
            "close": 31.95,
            "date": "11-03-2025",
            "date_utc": 1741722900,
            "high": 32.02,
            "low": 31.9,
            "open": 32,
            "volume": 471755
        },
        "1741786200": {
            "close": 32.74,
            "date": "12-03-2025",
            "date_utc": 1741786200,
            "high": 32.86,
            "low": 32.36,
            "open": 32.4,
            "volume": 314380
        },
        "1741786500": {
            "close": 32.84,
            "date": "12-03-2025",
            "date_utc": 1741786500,
            "high": 32.98,
            "low": 32.72,
            "open": 32.81,
            "volume": 53028
        },
        "1741786800": {
            "close": 32.76,
            "date": "12-03-2025",
            "date_utc": 1741786800,
            "high": 32.84,
            "low": 32.66,
            "open": 32.83,
            "volume": 46056
        },
        "1741787100": {
            "close": 32.73,
            "date": "12-03-2025",
            "date_utc": 1741787100,
            "high": 32.9,
            "low": 32.66,
            "open": 32.76,
            "volume": 35229
        },
        "1741787400": {
            "close": 32.79,
            "date": "12-03-2025",
            "date_utc": 1741787400,
            "high": 32.93,
            "low": 32.71,
            "open": 32.72,
            "volume": 54197
        },
        "1741787700": {
            "close": 32.97,
            "date": "12-03-2025",
            "date_utc": 1741787700,
            "high": 32.97,
            "low": 32.67,
            "open": 32.79,
            "volume": 61655
        },
        "1741788000": {
            "close": 32.6,
            "date": "12-03-2025",
            "date_utc": 1741788000,
            "high": 32.97,
            "low": 32.54,
            "open": 32.97,
            "volume": 88102
        },
        "1741788300": {
            "close": 32.61,
            "date": "12-03-2025",
            "date_utc": 1741788300,
            "high": 32.71,
            "low": 32.5,
            "open": 32.6,
            "volume": 54530
        },
        "1741788600": {
            "close": 32.48,
            "date": "12-03-2025",
            "date_utc": 1741788600,
            "high": 32.69,
            "low": 32.45,
            "open": 32.65,
            "volume": 32252
        },
        "1741788900": {
            "close": 32.59,
            "date": "12-03-2025",
            "date_utc": 1741788900,
            "high": 32.6,
            "low": 32.41,
            "open": 32.48,
            "volume": 70493
        },
        "1741789200": {
            "close": 32.59,
            "date": "12-03-2025",
            "date_utc": 1741789200,
            "high": 32.76,
            "low": 32.56,
            "open": 32.59,
            "volume": 76572
        },
        "1741789500": {
            "close": 32.67,
            "date": "12-03-2025",
            "date_utc": 1741789500,
            "high": 32.76,
            "low": 32.58,
            "open": 32.59,
            "volume": 31799
        },
        "1741789800": {
            "close": 32.61,
            "date": "12-03-2025",
            "date_utc": 1741789800,
            "high": 32.66,
            "low": 32.48,
            "open": 32.65,
            "volume": 101692
        },
        "1741790100": {
            "close": 32.76,
            "date": "12-03-2025",
            "date_utc": 1741790100,
            "high": 32.96,
            "low": 32.51,
            "open": 32.59,
            "volume": 248885
        },
        "1741790400": {
            "close": 32.63,
            "date": "12-03-2025",
            "date_utc": 1741790400,
            "high": 32.78,
            "low": 32.58,
            "open": 32.76,
            "volume": 57770
        },
        "1741790700": {
            "close": 32.59,
            "date": "12-03-2025",
            "date_utc": 1741790700,
            "high": 32.74,
            "low": 32.57,
            "open": 32.57,
            "volume": 30650
        },
        "1741791000": {
            "close": 32.66,
            "date": "12-03-2025",
            "date_utc": 1741791000,
            "high": 32.67,
            "low": 32.54,
            "open": 32.59,
            "volume": 30893
        },
        "1741791300": {
            "close": 32.38,
            "date": "12-03-2025",
            "date_utc": 1741791300,
            "high": 32.61,
            "low": 32.38,
            "open": 32.61,
            "volume": 35313
        },
        "1741791600": {
            "close": 32.26,
            "date": "12-03-2025",
            "date_utc": 1741791600,
            "high": 32.42,
            "low": 32.21,
            "open": 32.39,
            "volume": 88545
        },
        "1741791900": {
            "close": 32.24,
            "date": "12-03-2025",
            "date_utc": 1741791900,
            "high": 32.28,
            "low": 32.13,
            "open": 32.26,
            "volume": 56227
        },
        "1741792200": {
            "close": 32.39,
            "date": "12-03-2025",
            "date_utc": 1741792200,
            "high": 32.46,
            "low": 32.25,
            "open": 32.28,
            "volume": 50227
        },
        "1741792500": {
            "close": 32.4,
            "date": "12-03-2025",
            "date_utc": 1741792500,
            "high": 32.49,
            "low": 32.39,
            "open": 32.41,
            "volume": 26534
        },
        "1741792800": {
            "close": 32.5,
            "date": "12-03-2025",
            "date_utc": 1741792800,
            "high": 32.53,
            "low": 32.36,
            "open": 32.4,
            "volume": 23083
        },
        "1741793100": {
            "close": 32.53,
            "date": "12-03-2025",
            "date_utc": 1741793100,
            "high": 32.57,
            "low": 32.5,
            "open": 32.51,
            "volume": 15396
        },
        "1741793400": {
            "close": 32.62,
            "date": "12-03-2025",
            "date_utc": 1741793400,
            "high": 32.64,
            "low": 32.52,
            "open": 32.54,
            "volume": 22316
        },
        "1741793700": {
            "close": 32.8,
            "date": "12-03-2025",
            "date_utc": 1741793700,
            "high": 32.82,
            "low": 32.67,
            "open": 32.67,
            "volume": 26694
        },
        "1741794000": {
            "close": 32.81,
            "date": "12-03-2025",
            "date_utc": 1741794000,
            "high": 32.83,
            "low": 32.74,
            "open": 32.74,
            "volume": 17935
        },
        "1741794300": {
            "close": 32.81,
            "date": "12-03-2025",
            "date_utc": 1741794300,
            "high": 32.86,
            "low": 32.78,
            "open": 32.8,
            "volume": 21457
        },
        "1741794600": {
            "close": 32.79,
            "date": "12-03-2025",
            "date_utc": 1741794600,
            "high": 32.84,
            "low": 32.79,
            "open": 32.82,
            "volume": 21598
        },
        "1741794900": {
            "close": 32.78,
            "date": "12-03-2025",
            "date_utc": 1741794900,
            "high": 32.8,
            "low": 32.67,
            "open": 32.79,
            "volume": 16807
        },
        "1741795200": {
            "close": 32.76,
            "date": "12-03-2025",
            "date_utc": 1741795200,
            "high": 32.82,
            "low": 32.72,
            "open": 32.8,
            "volume": 21276
        },
        "1741795500": {
            "close": 32.93,
            "date": "12-03-2025",
            "date_utc": 1741795500,
            "high": 32.94,
            "low": 32.76,
            "open": 32.76,
            "volume": 17616
        },
        "1741795800": {
            "close": 32.92,
            "date": "12-03-2025",
            "date_utc": 1741795800,
            "high": 32.92,
            "low": 32.73,
            "open": 32.92,
            "volume": 23811
        },
        "1741796100": {
            "close": 32.81,
            "date": "12-03-2025",
            "date_utc": 1741796100,
            "high": 32.89,
            "low": 32.77,
            "open": 32.89,
            "volume": 15759
        },
        "1741796400": {
            "close": 32.77,
            "date": "12-03-2025",
            "date_utc": 1741796400,
            "high": 32.83,
            "low": 32.76,
            "open": 32.81,
            "volume": 20539
        },
        "1741796700": {
            "close": 32.83,
            "date": "12-03-2025",
            "date_utc": 1741796700,
            "high": 32.9,
            "low": 32.66,
            "open": 32.77,
            "volume": 34782
        },
        "1741797000": {
            "close": 32.93,
            "date": "12-03-2025",
            "date_utc": 1741797000,
            "high": 32.93,
            "low": 32.81,
            "open": 32.83,
            "volume": 21395
        },
        "1741797300": {
            "close": 32.91,
            "date": "12-03-2025",
            "date_utc": 1741797300,
            "high": 32.98,
            "low": 32.89,
            "open": 32.92,
            "volume": 28227
        },
        "1741797600": {
            "close": 32.83,
            "date": "12-03-2025",
            "date_utc": 1741797600,
            "high": 32.87,
            "low": 32.76,
            "open": 32.87,
            "volume": 41018
        },
        "1741797900": {
            "close": 33.04,
            "date": "12-03-2025",
            "date_utc": 1741797900,
            "high": 33.04,
            "low": 32.81,
            "open": 32.84,
            "volume": 47666
        },
        "1741798200": {
            "close": 33,
            "date": "12-03-2025",
            "date_utc": 1741798200,
            "high": 33.08,
            "low": 32.93,
            "open": 33.04,
            "volume": 29708
        },
        "1741798500": {
            "close": 32.87,
            "date": "12-03-2025",
            "date_utc": 1741798500,
            "high": 33,
            "low": 32.85,
            "open": 33,
            "volume": 22064
        },
        "1741798800": {
            "close": 32.85,
            "date": "12-03-2025",
            "date_utc": 1741798800,
            "high": 32.91,
            "low": 32.85,
            "open": 32.87,
            "volume": 18602
        },
        "1741799100": {
            "close": 32.87,
            "date": "12-03-2025",
            "date_utc": 1741799100,
            "high": 32.89,
            "low": 32.79,
            "open": 32.85,
            "volume": 17249
        },
        "1741799400": {
            "close": 32.9,
            "date": "12-03-2025",
            "date_utc": 1741799400,
            "high": 32.9,
            "low": 32.83,
            "open": 32.87,
            "volume": 13033
        },
        "1741799700": {
            "close": 32.95,
            "date": "12-03-2025",
            "date_utc": 1741799700,
            "high": 32.95,
            "low": 32.87,
            "open": 32.9,
            "volume": 20435
        },
        "1741800000": {
            "close": 33.02,
            "date": "12-03-2025",
            "date_utc": 1741800000,
            "high": 33.05,
            "low": 32.95,
            "open": 32.95,
            "volume": 24636
        },
        "1741800300": {
            "close": 33.06,
            "date": "12-03-2025",
            "date_utc": 1741800300,
            "high": 33.06,
            "low": 32.97,
            "open": 33.02,
            "volume": 26057
        },
        "1741800600": {
            "close": 33.03,
            "date": "12-03-2025",
            "date_utc": 1741800600,
            "high": 33.1,
            "low": 33.02,
            "open": 33.06,
            "volume": 21641
        },
        "1741800900": {
            "close": 33,
            "date": "12-03-2025",
            "date_utc": 1741800900,
            "high": 33.09,
            "low": 32.99,
            "open": 33.05,
            "volume": 23745
        },
        "1741801200": {
            "close": 33.06,
            "date": "12-03-2025",
            "date_utc": 1741801200,
            "high": 33.08,
            "low": 33.01,
            "open": 33.01,
            "volume": 20817
        },
        "1741801500": {
            "close": 33.1,
            "date": "12-03-2025",
            "date_utc": 1741801500,
            "high": 33.17,
            "low": 33.05,
            "open": 33.05,
            "volume": 31192
        },
        "1741801800": {
            "close": 32.99,
            "date": "12-03-2025",
            "date_utc": 1741801800,
            "high": 33.13,
            "low": 32.99,
            "open": 33.1,
            "volume": 24381
        },
        "1741802100": {
            "close": 32.9,
            "date": "12-03-2025",
            "date_utc": 1741802100,
            "high": 32.99,
            "low": 32.85,
            "open": 32.99,
            "volume": 28384
        },
        "1741802400": {
            "close": 33.01,
            "date": "12-03-2025",
            "date_utc": 1741802400,
            "high": 33.05,
            "low": 32.87,
            "open": 32.88,
            "volume": 22018
        },
        "1741802700": {
            "close": 33.01,
            "date": "12-03-2025",
            "date_utc": 1741802700,
            "high": 33.03,
            "low": 32.92,
            "open": 33.01,
            "volume": 23513
        },
        "1741803000": {
            "close": 33.15,
            "date": "12-03-2025",
            "date_utc": 1741803000,
            "high": 33.18,
            "low": 33.03,
            "open": 33.03,
            "volume": 19050
        },
        "1741803300": {
            "close": 33.17,
            "date": "12-03-2025",
            "date_utc": 1741803300,
            "high": 33.21,
            "low": 33.15,
            "open": 33.16,
            "volume": 15252
        },
        "1741803600": {
            "close": 33.17,
            "date": "12-03-2025",
            "date_utc": 1741803600,
            "high": 33.19,
            "low": 33.11,
            "open": 33.18,
            "volume": 21482
        },
        "1741803900": {
            "close": 33.22,
            "date": "12-03-2025",
            "date_utc": 1741803900,
            "high": 33.24,
            "low": 33.15,
            "open": 33.15,
            "volume": 31509
        },
        "1741804200": {
            "close": 33.35,
            "date": "12-03-2025",
            "date_utc": 1741804200,
            "high": 33.38,
            "low": 33.22,
            "open": 33.22,
            "volume": 31173
        },
        "1741804500": {
            "close": 33.35,
            "date": "12-03-2025",
            "date_utc": 1741804500,
            "high": 33.37,
            "low": 33.28,
            "open": 33.35,
            "volume": 28995
        },
        "1741804800": {
            "close": 33.37,
            "date": "12-03-2025",
            "date_utc": 1741804800,
            "high": 33.41,
            "low": 33.33,
            "open": 33.35,
            "volume": 40918
        },
        "1741805100": {
            "close": 33.47,
            "date": "12-03-2025",
            "date_utc": 1741805100,
            "high": 33.54,
            "low": 33.34,
            "open": 33.34,
            "volume": 140816
        },
        "1741805400": {
            "close": 33.46,
            "date": "12-03-2025",
            "date_utc": 1741805400,
            "high": 33.54,
            "low": 33.34,
            "open": 33.47,
            "volume": 83095
        },
        "1741805700": {
            "close": 33.45,
            "date": "12-03-2025",
            "date_utc": 1741805700,
            "high": 33.57,
            "low": 33.44,
            "open": 33.47,
            "volume": 90826
        },
        "1741806000": {
            "close": 33.5,
            "date": "12-03-2025",
            "date_utc": 1741806000,
            "high": 33.54,
            "low": 33.4,
            "open": 33.45,
            "volume": 109268
        },
        "1741806300": {
            "close": 33.67,
            "date": "12-03-2025",
            "date_utc": 1741806300,
            "high": 33.67,
            "low": 33.46,
            "open": 33.5,
            "volume": 65450
        },
        "1741806600": {
            "close": 33.61,
            "date": "12-03-2025",
            "date_utc": 1741806600,
            "high": 33.68,
            "low": 33.61,
            "open": 33.65,
            "volume": 70790
        },
        "1741806900": {
            "close": 33.63,
            "date": "12-03-2025",
            "date_utc": 1741806900,
            "high": 33.67,
            "low": 33.56,
            "open": 33.61,
            "volume": 86698
        },
        "1741807200": {
            "close": 33.56,
            "date": "12-03-2025",
            "date_utc": 1741807200,
            "high": 33.65,
            "low": 33.54,
            "open": 33.62,
            "volume": 110685
        },
        "1741807500": {
            "close": 33.52,
            "date": "12-03-2025",
            "date_utc": 1741807500,
            "high": 33.58,
            "low": 33.5,
            "open": 33.53,
            "volume": 65164
        },
        "1741807800": {
            "close": 33.34,
            "date": "12-03-2025",
            "date_utc": 1741807800,
            "high": 33.55,
            "low": 33.34,
            "open": 33.5,
            "volume": 127836
        },
        "1741808100": {
            "close": 33.44,
            "date": "12-03-2025",
            "date_utc": 1741808100,
            "high": 33.45,
            "low": 33.32,
            "open": 33.34,
            "volume": 82009
        },
        "1741808400": {
            "close": 33.32,
            "date": "12-03-2025",
            "date_utc": 1741808400,
            "high": 33.46,
            "low": 33.29,
            "open": 33.44,
            "volume": 76214
        },
        "1741808700": {
            "close": 33.45,
            "date": "12-03-2025",
            "date_utc": 1741808700,
            "high": 33.47,
            "low": 33.32,
            "open": 33.32,
            "volume": 85159
        },
        "1741809000": {
            "close": 33.3,
            "date": "12-03-2025",
            "date_utc": 1741809000,
            "high": 33.45,
            "low": 33.23,
            "open": 33.45,
            "volume": 128509
        },
        "1741809300": {
            "close": 33.25,
            "date": "12-03-2025",
            "date_utc": 1741809300,
            "high": 33.39,
            "low": 33.23,
            "open": 33.3,
            "volume": 369780
        },
        "1741872600": {
            "close": 33.51,
            "date": "13-03-2025",
            "date_utc": 1741872600,
            "high": 33.58,
            "low": 32.86,
            "open": 33,
            "volume": 89693
        },
        "1741872900": {
            "close": 33.84,
            "date": "13-03-2025",
            "date_utc": 1741872900,
            "high": 34.09,
            "low": 33.57,
            "open": 33.58,
            "volume": 132851
        },
        "1741873200": {
            "close": 33.94,
            "date": "13-03-2025",
            "date_utc": 1741873200,
            "high": 34.1,
            "low": 33.83,
            "open": 33.86,
            "volume": 86980
        },
        "1741873500": {
            "close": 33.85,
            "date": "13-03-2025",
            "date_utc": 1741873500,
            "high": 33.99,
            "low": 33.8,
            "open": 33.96,
            "volume": 65464
        },
        "1741873800": {
            "close": 33.46,
            "date": "13-03-2025",
            "date_utc": 1741873800,
            "high": 33.96,
            "low": 33.42,
            "open": 33.85,
            "volume": 134107
        },
        "1741874100": {
            "close": 33.16,
            "date": "13-03-2025",
            "date_utc": 1741874100,
            "high": 33.47,
            "low": 33.15,
            "open": 33.47,
            "volume": 37812
        },
        "1741874400": {
            "close": 32.95,
            "date": "13-03-2025",
            "date_utc": 1741874400,
            "high": 33.13,
            "low": 32.9,
            "open": 33.13,
            "volume": 211167
        },
        "1741874700": {
            "close": 33.05,
            "date": "13-03-2025",
            "date_utc": 1741874700,
            "high": 33.13,
            "low": 32.94,
            "open": 32.98,
            "volume": 105622
        },
        "1741875000": {
            "close": 32.89,
            "date": "13-03-2025",
            "date_utc": 1741875000,
            "high": 33.05,
            "low": 32.87,
            "open": 32.98,
            "volume": 54295
        },
        "1741875300": {
            "close": 32.98,
            "date": "13-03-2025",
            "date_utc": 1741875300,
            "high": 33.08,
            "low": 32.87,
            "open": 32.9,
            "volume": 38855
        },
        "1741875600": {
            "close": 33.22,
            "date": "13-03-2025",
            "date_utc": 1741875600,
            "high": 33.22,
            "low": 32.93,
            "open": 33.03,
            "volume": 34223
        },
        "1741875900": {
            "close": 32.99,
            "date": "13-03-2025",
            "date_utc": 1741875900,
            "high": 33.24,
            "low": 32.99,
            "open": 33.16,
            "volume": 38031
        },
        "1741876200": {
            "close": 32.97,
            "date": "13-03-2025",
            "date_utc": 1741876200,
            "high": 33.15,
            "low": 32.97,
            "open": 33.01,
            "volume": 34296
        },
        "1741876500": {
            "close": 32.99,
            "date": "13-03-2025",
            "date_utc": 1741876500,
            "high": 33.02,
            "low": 32.92,
            "open": 33,
            "volume": 33956
        },
        "1741876800": {
            "close": 33,
            "date": "13-03-2025",
            "date_utc": 1741876800,
            "high": 33.03,
            "low": 32.86,
            "open": 32.96,
            "volume": 23949
        },
        "1741877100": {
            "close": 32.97,
            "date": "13-03-2025",
            "date_utc": 1741877100,
            "high": 33.1,
            "low": 32.92,
            "open": 33.06,
            "volume": 91321
        },
        "1741877400": {
            "close": 32.98,
            "date": "13-03-2025",
            "date_utc": 1741877400,
            "high": 33.12,
            "low": 32.96,
            "open": 32.99,
            "volume": 19992
        },
        "1741877700": {
            "close": 33.03,
            "date": "13-03-2025",
            "date_utc": 1741877700,
            "high": 33.04,
            "low": 32.92,
            "open": 32.97,
            "volume": 25510
        },
        "1741878000": {
            "close": 33.08,
            "date": "13-03-2025",
            "date_utc": 1741878000,
            "high": 33.14,
            "low": 33,
            "open": 33.02,
            "volume": 20611
        },
        "1741878300": {
            "close": 33.01,
            "date": "13-03-2025",
            "date_utc": 1741878300,
            "high": 33.11,
            "low": 32.99,
            "open": 33.07,
            "volume": 39705
        },
        "1741878600": {
            "close": 32.9,
            "date": "13-03-2025",
            "date_utc": 1741878600,
            "high": 33.07,
            "low": 32.9,
            "open": 33.02,
            "volume": 19840
        },
        "1741878900": {
            "close": 32.96,
            "date": "13-03-2025",
            "date_utc": 1741878900,
            "high": 33.09,
            "low": 32.91,
            "open": 32.95,
            "volume": 27277
        },
        "1741879200": {
            "close": 33.04,
            "date": "13-03-2025",
            "date_utc": 1741879200,
            "high": 33.06,
            "low": 32.94,
            "open": 32.96,
            "volume": 18430
        },
        "1741879500": {
            "close": 33.06,
            "date": "13-03-2025",
            "date_utc": 1741879500,
            "high": 33.11,
            "low": 32.99,
            "open": 33.05,
            "volume": 24573
        },
        "1741879800": {
            "close": 33.1,
            "date": "13-03-2025",
            "date_utc": 1741879800,
            "high": 33.12,
            "low": 33.03,
            "open": 33.08,
            "volume": 19940
        },
        "1741880100": {
            "close": 32.83,
            "date": "13-03-2025",
            "date_utc": 1741880100,
            "high": 33.09,
            "low": 32.83,
            "open": 33.08,
            "volume": 43960
        },
        "1741880400": {
            "close": 32.87,
            "date": "13-03-2025",
            "date_utc": 1741880400,
            "high": 32.97,
            "low": 32.77,
            "open": 32.83,
            "volume": 78190
        },
        "1741880700": {
            "close": 32.71,
            "date": "13-03-2025",
            "date_utc": 1741880700,
            "high": 32.85,
            "low": 32.71,
            "open": 32.85,
            "volume": 115841
        },
        "1741881000": {
            "close": 32.55,
            "date": "13-03-2025",
            "date_utc": 1741881000,
            "high": 32.7,
            "low": 32.55,
            "open": 32.7,
            "volume": 69189
        },
        "1741881300": {
            "close": 32.46,
            "date": "13-03-2025",
            "date_utc": 1741881300,
            "high": 32.58,
            "low": 32.43,
            "open": 32.58,
            "volume": 39775
        },
        "1741881600": {
            "close": 32.6,
            "date": "13-03-2025",
            "date_utc": 1741881600,
            "high": 32.65,
            "low": 32.46,
            "open": 32.48,
            "volume": 39518
        },
        "1741881900": {
            "close": 32.56,
            "date": "13-03-2025",
            "date_utc": 1741881900,
            "high": 32.63,
            "low": 32.53,
            "open": 32.63,
            "volume": 22188
        },
        "1741882200": {
            "close": 32.51,
            "date": "13-03-2025",
            "date_utc": 1741882200,
            "high": 32.6,
            "low": 32.51,
            "open": 32.57,
            "volume": 40783
        },
        "1741882500": {
            "close": 32.58,
            "date": "13-03-2025",
            "date_utc": 1741882500,
            "high": 32.6,
            "low": 32.45,
            "open": 32.51,
            "volume": 136315
        },
        "1741882800": {
            "close": 32.58,
            "date": "13-03-2025",
            "date_utc": 1741882800,
            "high": 32.65,
            "low": 32.56,
            "open": 32.58,
            "volume": 28370
        },
        "1741883100": {
            "close": 32.76,
            "date": "13-03-2025",
            "date_utc": 1741883100,
            "high": 32.77,
            "low": 32.54,
            "open": 32.58,
            "volume": 32172
        },
        "1741883400": {
            "close": 32.81,
            "date": "13-03-2025",
            "date_utc": 1741883400,
            "high": 32.88,
            "low": 32.68,
            "open": 32.74,
            "volume": 44740
        },
        "1741883700": {
            "close": 32.91,
            "date": "13-03-2025",
            "date_utc": 1741883700,
            "high": 32.93,
            "low": 32.78,
            "open": 32.81,
            "volume": 25728
        },
        "1741884000": {
            "close": 32.82,
            "date": "13-03-2025",
            "date_utc": 1741884000,
            "high": 32.94,
            "low": 32.8,
            "open": 32.92,
            "volume": 18829
        },
        "1741884300": {
            "close": 32.6,
            "date": "13-03-2025",
            "date_utc": 1741884300,
            "high": 32.83,
            "low": 32.55,
            "open": 32.81,
            "volume": 49363
        },
        "1741884600": {
            "close": 32.55,
            "date": "13-03-2025",
            "date_utc": 1741884600,
            "high": 32.7,
            "low": 32.55,
            "open": 32.62,
            "volume": 18145
        },
        "1741884900": {
            "close": 32.28,
            "date": "13-03-2025",
            "date_utc": 1741884900,
            "high": 32.58,
            "low": 32.25,
            "open": 32.57,
            "volume": 115513
        },
        "1741885200": {
            "close": 32.21,
            "date": "13-03-2025",
            "date_utc": 1741885200,
            "high": 32.27,
            "low": 32.05,
            "open": 32.27,
            "volume": 144543
        },
        "1741885500": {
            "close": 32.2,
            "date": "13-03-2025",
            "date_utc": 1741885500,
            "high": 32.26,
            "low": 32.05,
            "open": 32.25,
            "volume": 46622
        },
        "1741885800": {
            "close": 32.14,
            "date": "13-03-2025",
            "date_utc": 1741885800,
            "high": 32.25,
            "low": 32.09,
            "open": 32.19,
            "volume": 36712
        },
        "1741886100": {
            "close": 32.15,
            "date": "13-03-2025",
            "date_utc": 1741886100,
            "high": 32.17,
            "low": 32.04,
            "open": 32.14,
            "volume": 57025
        },
        "1741886400": {
            "close": 32.24,
            "date": "13-03-2025",
            "date_utc": 1741886400,
            "high": 32.31,
            "low": 32.12,
            "open": 32.14,
            "volume": 116198
        },
        "1741886700": {
            "close": 32.33,
            "date": "13-03-2025",
            "date_utc": 1741886700,
            "high": 32.37,
            "low": 32.22,
            "open": 32.24,
            "volume": 87522
        },
        "1741887000": {
            "close": 32.16,
            "date": "13-03-2025",
            "date_utc": 1741887000,
            "high": 32.33,
            "low": 32.13,
            "open": 32.33,
            "volume": 32948
        },
        "1741887300": {
            "close": 32.24,
            "date": "13-03-2025",
            "date_utc": 1741887300,
            "high": 32.26,
            "low": 32.16,
            "open": 32.19,
            "volume": 32937
        },
        "1741887600": {
            "close": 32.22,
            "date": "13-03-2025",
            "date_utc": 1741887600,
            "high": 32.34,
            "low": 32.18,
            "open": 32.24,
            "volume": 35244
        },
        "1741887900": {
            "close": 32.17,
            "date": "13-03-2025",
            "date_utc": 1741887900,
            "high": 32.21,
            "low": 32.09,
            "open": 32.19,
            "volume": 31868
        },
        "1741888200": {
            "close": 32.15,
            "date": "13-03-2025",
            "date_utc": 1741888200,
            "high": 32.21,
            "low": 32.12,
            "open": 32.18,
            "volume": 46996
        },
        "1741888500": {
            "close": 31.97,
            "date": "13-03-2025",
            "date_utc": 1741888500,
            "high": 32.16,
            "low": 31.96,
            "open": 32.15,
            "volume": 57552
        },
        "1741888800": {
            "close": 32.18,
            "date": "13-03-2025",
            "date_utc": 1741888800,
            "high": 32.21,
            "low": 31.99,
            "open": 32.01,
            "volume": 42250
        },
        "1741889100": {
            "close": 32.26,
            "date": "13-03-2025",
            "date_utc": 1741889100,
            "high": 32.29,
            "low": 32.17,
            "open": 32.19,
            "volume": 38007
        },
        "1741889400": {
            "close": 32.42,
            "date": "13-03-2025",
            "date_utc": 1741889400,
            "high": 32.44,
            "low": 32.25,
            "open": 32.26,
            "volume": 34667
        },
        "1741889700": {
            "close": 32.28,
            "date": "13-03-2025",
            "date_utc": 1741889700,
            "high": 32.44,
            "low": 32.27,
            "open": 32.44,
            "volume": 37825
        },
        "1741890000": {
            "close": 32.37,
            "date": "13-03-2025",
            "date_utc": 1741890000,
            "high": 32.38,
            "low": 32.25,
            "open": 32.25,
            "volume": 21440
        },
        "1741890300": {
            "close": 32.42,
            "date": "13-03-2025",
            "date_utc": 1741890300,
            "high": 32.42,
            "low": 32.32,
            "open": 32.37,
            "volume": 24862
        },
        "1741890600": {
            "close": 32.26,
            "date": "13-03-2025",
            "date_utc": 1741890600,
            "high": 32.41,
            "low": 32.26,
            "open": 32.41,
            "volume": 23940
        },
        "1741890900": {
            "close": 32.27,
            "date": "13-03-2025",
            "date_utc": 1741890900,
            "high": 32.31,
            "low": 32.23,
            "open": 32.23,
            "volume": 22183
        },
        "1741891200": {
            "close": 32.36,
            "date": "13-03-2025",
            "date_utc": 1741891200,
            "high": 32.37,
            "low": 32.24,
            "open": 32.31,
            "volume": 22137
        },
        "1741891500": {
            "close": 32.36,
            "date": "13-03-2025",
            "date_utc": 1741891500,
            "high": 32.37,
            "low": 32.31,
            "open": 32.37,
            "volume": 25831
        },
        "1741891800": {
            "close": 32.33,
            "date": "13-03-2025",
            "date_utc": 1741891800,
            "high": 32.4,
            "low": 32.26,
            "open": 32.34,
            "volume": 60427
        },
        "1741892100": {
            "close": 32.38,
            "date": "13-03-2025",
            "date_utc": 1741892100,
            "high": 32.41,
            "low": 32.31,
            "open": 32.33,
            "volume": 27262
        },
        "1741892400": {
            "close": 32.37,
            "date": "13-03-2025",
            "date_utc": 1741892400,
            "high": 32.49,
            "low": 32.35,
            "open": 32.35,
            "volume": 39094
        },
        "1741892700": {
            "close": 32.3,
            "date": "13-03-2025",
            "date_utc": 1741892700,
            "high": 32.4,
            "low": 32.25,
            "open": 32.36,
            "volume": 23368
        },
        "1741893000": {
            "close": 32.4,
            "date": "13-03-2025",
            "date_utc": 1741893000,
            "high": 32.44,
            "low": 32.24,
            "open": 32.3,
            "volume": 25306
        },
        "1741893300": {
            "close": 32.37,
            "date": "13-03-2025",
            "date_utc": 1741893300,
            "high": 32.42,
            "low": 32.33,
            "open": 32.42,
            "volume": 32023
        },
        "1741893600": {
            "close": 32.41,
            "date": "13-03-2025",
            "date_utc": 1741893600,
            "high": 32.44,
            "low": 32.32,
            "open": 32.37,
            "volume": 23890
        },
        "1741893900": {
            "close": 32.35,
            "date": "13-03-2025",
            "date_utc": 1741893900,
            "high": 32.42,
            "low": 32.26,
            "open": 32.41,
            "volume": 27753
        },
        "1741894200": {
            "close": 32.47,
            "date": "13-03-2025",
            "date_utc": 1741894200,
            "high": 32.5,
            "low": 32.32,
            "open": 32.35,
            "volume": 41736
        },
        "1741894500": {
            "close": 32.36,
            "date": "13-03-2025",
            "date_utc": 1741894500,
            "high": 32.48,
            "low": 32.33,
            "open": 32.47,
            "volume": 43407
        },
        "1741894800": {
            "close": 32.44,
            "date": "13-03-2025",
            "date_utc": 1741894800,
            "high": 32.45,
            "low": 32.35,
            "open": 32.36,
            "volume": 34699
        },
        "1741895100": {
            "close": 32.47,
            "date": "13-03-2025",
            "date_utc": 1741895100,
            "high": 32.48,
            "low": 32.35,
            "open": 32.45,
            "volume": 82892
        },
        "1741895400": {
            "close": 32.36,
            "date": "13-03-2025",
            "date_utc": 1741895400,
            "high": 32.46,
            "low": 32.34,
            "open": 32.45,
            "volume": 161455
        },
        "1741895700": {
            "close": 32.33,
            "date": "13-03-2025",
            "date_utc": 1741895700,
            "high": 32.37,
            "low": 32.24,
            "open": 32.36,
            "volume": 572945
        },
        "1741959000": {
            "close": 32.76,
            "date": "14-03-2025",
            "date_utc": 1741959000,
            "high": 33.07,
            "low": 32.59,
            "open": 33,
            "volume": 103247
        },
        "1741959300": {
            "close": 32.76,
            "date": "14-03-2025",
            "date_utc": 1741959300,
            "high": 32.96,
            "low": 32.75,
            "open": 32.86,
            "volume": 21086
        },
        "1741959600": {
            "close": 32.77,
            "date": "14-03-2025",
            "date_utc": 1741959600,
            "high": 32.88,
            "low": 32.66,
            "open": 32.78,
            "volume": 19591
        },
        "1741959900": {
            "close": 33.01,
            "date": "14-03-2025",
            "date_utc": 1741959900,
            "high": 33.02,
            "low": 32.73,
            "open": 32.73,
            "volume": 32876
        },
        "1741960200": {
            "close": 33.13,
            "date": "14-03-2025",
            "date_utc": 1741960200,
            "high": 33.13,
            "low": 32.98,
            "open": 33,
            "volume": 35099
        },
        "1741960500": {
            "close": 33.02,
            "date": "14-03-2025",
            "date_utc": 1741960500,
            "high": 33.11,
            "low": 32.99,
            "open": 33.11,
            "volume": 39280
        },
        "1741960800": {
            "close": 33.08,
            "date": "14-03-2025",
            "date_utc": 1741960800,
            "high": 33.09,
            "low": 32.67,
            "open": 32.98,
            "volume": 40544
        },
        "1741961100": {
            "close": 33.03,
            "date": "14-03-2025",
            "date_utc": 1741961100,
            "high": 33.23,
            "low": 33.01,
            "open": 33.1,
            "volume": 39583
        },
        "1741961400": {
            "close": 33.15,
            "date": "14-03-2025",
            "date_utc": 1741961400,
            "high": 33.24,
            "low": 33.03,
            "open": 33.03,
            "volume": 28402
        },
        "1741961700": {
            "close": 33.09,
            "date": "14-03-2025",
            "date_utc": 1741961700,
            "high": 33.21,
            "low": 33.07,
            "open": 33.15,
            "volume": 33312
        },
        "1741962000": {
            "close": 33.17,
            "date": "14-03-2025",
            "date_utc": 1741962000,
            "high": 33.17,
            "low": 33.01,
            "open": 33.09,
            "volume": 41019
        },
        "1741962300": {
            "close": 33.1,
            "date": "14-03-2025",
            "date_utc": 1741962300,
            "high": 33.2,
            "low": 33.08,
            "open": 33.2,
            "volume": 19563
        },
        "1741962600": {
            "close": 33.18,
            "date": "14-03-2025",
            "date_utc": 1741962600,
            "high": 33.18,
            "low": 33.08,
            "open": 33.09,
            "volume": 17796
        },
        "1741962900": {
            "close": 33.25,
            "date": "14-03-2025",
            "date_utc": 1741962900,
            "high": 33.25,
            "low": 33.12,
            "open": 33.17,
            "volume": 20122
        },
        "1741963200": {
            "close": 33.27,
            "date": "14-03-2025",
            "date_utc": 1741963200,
            "high": 33.29,
            "low": 33.2,
            "open": 33.27,
            "volume": 15911
        },
        "1741963500": {
            "close": 33.28,
            "date": "14-03-2025",
            "date_utc": 1741963500,
            "high": 33.29,
            "low": 33.23,
            "open": 33.28,
            "volume": 16066
        },
        "1741963800": {
            "close": 33.23,
            "date": "14-03-2025",
            "date_utc": 1741963800,
            "high": 33.3,
            "low": 33.21,
            "open": 33.29,
            "volume": 43755
        },
        "1741964100": {
            "close": 33.29,
            "date": "14-03-2025",
            "date_utc": 1741964100,
            "high": 33.29,
            "low": 33.16,
            "open": 33.21,
            "volume": 27682
        },
        "1741964400": {
            "close": 33.27,
            "date": "14-03-2025",
            "date_utc": 1741964400,
            "high": 33.29,
            "low": 33.24,
            "open": 33.28,
            "volume": 16632
        },
        "1741964700": {
            "close": 33.22,
            "date": "14-03-2025",
            "date_utc": 1741964700,
            "high": 33.33,
            "low": 33.22,
            "open": 33.27,
            "volume": 20319
        },
        "1741965000": {
            "close": 33.31,
            "date": "14-03-2025",
            "date_utc": 1741965000,
            "high": 33.31,
            "low": 33.22,
            "open": 33.22,
            "volume": 16526
        },
        "1741965300": {
            "close": 33.28,
            "date": "14-03-2025",
            "date_utc": 1741965300,
            "high": 33.34,
            "low": 33.27,
            "open": 33.32,
            "volume": 13882
        },
        "1741965600": {
            "close": 33.35,
            "date": "14-03-2025",
            "date_utc": 1741965600,
            "high": 33.36,
            "low": 33.27,
            "open": 33.28,
            "volume": 17817
        },
        "1741965900": {
            "close": 33.4,
            "date": "14-03-2025",
            "date_utc": 1741965900,
            "high": 33.4,
            "low": 33.35,
            "open": 33.35,
            "volume": 30544
        },
        "1741966200": {
            "close": 33.42,
            "date": "14-03-2025",
            "date_utc": 1741966200,
            "high": 33.45,
            "low": 33.41,
            "open": 33.41,
            "volume": 10645
        },
        "1741966500": {
            "close": 33.45,
            "date": "14-03-2025",
            "date_utc": 1741966500,
            "high": 33.48,
            "low": 33.41,
            "open": 33.43,
            "volume": 10280
        },
        "1741966800": {
            "close": 33.49,
            "date": "14-03-2025",
            "date_utc": 1741966800,
            "high": 33.5,
            "low": 33.45,
            "open": 33.48,
            "volume": 15627
        },
        "1741967100": {
            "close": 33.59,
            "date": "14-03-2025",
            "date_utc": 1741967100,
            "high": 33.6,
            "low": 33.48,
            "open": 33.5,
            "volume": 38205
        },
        "1741967400": {
            "close": 33.53,
            "date": "14-03-2025",
            "date_utc": 1741967400,
            "high": 33.58,
            "low": 33.51,
            "open": 33.58,
            "volume": 27236
        },
        "1741967700": {
            "close": 33.53,
            "date": "14-03-2025",
            "date_utc": 1741967700,
            "high": 33.57,
            "low": 33.5,
            "open": 33.51,
            "volume": 25339
        },
        "1741968000": {
            "close": 33.51,
            "date": "14-03-2025",
            "date_utc": 1741968000,
            "high": 33.55,
            "low": 33.5,
            "open": 33.52,
            "volume": 20632
        },
        "1741968300": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741968300,
            "high": 33.55,
            "low": 33.45,
            "open": 33.49,
            "volume": 29292
        },
        "1741968600": {
            "close": 33.4,
            "date": "14-03-2025",
            "date_utc": 1741968600,
            "high": 33.48,
            "low": 33.38,
            "open": 33.47,
            "volume": 14381
        },
        "1741968900": {
            "close": 33.37,
            "date": "14-03-2025",
            "date_utc": 1741968900,
            "high": 33.4,
            "low": 33.33,
            "open": 33.4,
            "volume": 62188
        },
        "1741969200": {
            "close": 33.44,
            "date": "14-03-2025",
            "date_utc": 1741969200,
            "high": 33.44,
            "low": 33.33,
            "open": 33.36,
            "volume": 48050
        },
        "1741969500": {
            "close": 33.29,
            "date": "14-03-2025",
            "date_utc": 1741969500,
            "high": 33.44,
            "low": 33.25,
            "open": 33.42,
            "volume": 29798
        },
        "1741969800": {
            "close": 33.32,
            "date": "14-03-2025",
            "date_utc": 1741969800,
            "high": 33.34,
            "low": 33.26,
            "open": 33.29,
            "volume": 18784
        },
        "1741970100": {
            "close": 33.35,
            "date": "14-03-2025",
            "date_utc": 1741970100,
            "high": 33.42,
            "low": 33.32,
            "open": 33.32,
            "volume": 32327
        },
        "1741970400": {
            "close": 33.4,
            "date": "14-03-2025",
            "date_utc": 1741970400,
            "high": 33.4,
            "low": 33.35,
            "open": 33.35,
            "volume": 8853
        },
        "1741970700": {
            "close": 33.39,
            "date": "14-03-2025",
            "date_utc": 1741970700,
            "high": 33.4,
            "low": 33.37,
            "open": 33.38,
            "volume": 7867
        },
        "1741971000": {
            "close": 33.46,
            "date": "14-03-2025",
            "date_utc": 1741971000,
            "high": 33.48,
            "low": 33.38,
            "open": 33.4,
            "volume": 14116
        },
        "1741971300": {
            "close": 33.42,
            "date": "14-03-2025",
            "date_utc": 1741971300,
            "high": 33.45,
            "low": 33.41,
            "open": 33.45,
            "volume": 15364
        },
        "1741971600": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741971600,
            "high": 33.5,
            "low": 33.41,
            "open": 33.41,
            "volume": 14669
        },
        "1741971900": {
            "close": 33.5,
            "date": "14-03-2025",
            "date_utc": 1741971900,
            "high": 33.5,
            "low": 33.46,
            "open": 33.47,
            "volume": 8129
        },
        "1741972200": {
            "close": 33.49,
            "date": "14-03-2025",
            "date_utc": 1741972200,
            "high": 33.51,
            "low": 33.46,
            "open": 33.51,
            "volume": 12872
        },
        "1741972500": {
            "close": 33.42,
            "date": "14-03-2025",
            "date_utc": 1741972500,
            "high": 33.52,
            "low": 33.42,
            "open": 33.49,
            "volume": 20601
        },
        "1741972800": {
            "close": 33.39,
            "date": "14-03-2025",
            "date_utc": 1741972800,
            "high": 33.48,
            "low": 33.38,
            "open": 33.43,
            "volume": 12601
        },
        "1741973100": {
            "close": 33.39,
            "date": "14-03-2025",
            "date_utc": 1741973100,
            "high": 33.42,
            "low": 33.37,
            "open": 33.4,
            "volume": 11837
        },
        "1741973400": {
            "close": 33.37,
            "date": "14-03-2025",
            "date_utc": 1741973400,
            "high": 33.44,
            "low": 33.37,
            "open": 33.4,
            "volume": 7151
        },
        "1741973700": {
            "close": 33.38,
            "date": "14-03-2025",
            "date_utc": 1741973700,
            "high": 33.38,
            "low": 33.33,
            "open": 33.37,
            "volume": 13415
        },
        "1741974000": {
            "close": 33.31,
            "date": "14-03-2025",
            "date_utc": 1741974000,
            "high": 33.38,
            "low": 33.31,
            "open": 33.38,
            "volume": 11791
        },
        "1741974300": {
            "close": 33.29,
            "date": "14-03-2025",
            "date_utc": 1741974300,
            "high": 33.34,
            "low": 33.28,
            "open": 33.31,
            "volume": 14798
        },
        "1741974600": {
            "close": 33.27,
            "date": "14-03-2025",
            "date_utc": 1741974600,
            "high": 33.3,
            "low": 33.23,
            "open": 33.29,
            "volume": 20329
        },
        "1741974900": {
            "close": 33.12,
            "date": "14-03-2025",
            "date_utc": 1741974900,
            "high": 33.29,
            "low": 33.1,
            "open": 33.28,
            "volume": 42426
        },
        "1741975200": {
            "close": 33.2,
            "date": "14-03-2025",
            "date_utc": 1741975200,
            "high": 33.21,
            "low": 33.14,
            "open": 33.14,
            "volume": 17485
        },
        "1741975500": {
            "close": 33.13,
            "date": "14-03-2025",
            "date_utc": 1741975500,
            "high": 33.19,
            "low": 33.12,
            "open": 33.19,
            "volume": 16815
        },
        "1741975800": {
            "close": 33.1,
            "date": "14-03-2025",
            "date_utc": 1741975800,
            "high": 33.14,
            "low": 33.1,
            "open": 33.13,
            "volume": 24881
        },
        "1741976100": {
            "close": 33.19,
            "date": "14-03-2025",
            "date_utc": 1741976100,
            "high": 33.19,
            "low": 33.1,
            "open": 33.11,
            "volume": 74311
        },
        "1741976400": {
            "close": 33.23,
            "date": "14-03-2025",
            "date_utc": 1741976400,
            "high": 33.23,
            "low": 33.14,
            "open": 33.18,
            "volume": 15421
        },
        "1741976700": {
            "close": 33.18,
            "date": "14-03-2025",
            "date_utc": 1741976700,
            "high": 33.3,
            "low": 33.15,
            "open": 33.22,
            "volume": 79221
        },
        "1741977000": {
            "close": 33.28,
            "date": "14-03-2025",
            "date_utc": 1741977000,
            "high": 33.29,
            "low": 33.18,
            "open": 33.18,
            "volume": 16575
        },
        "1741977300": {
            "close": 33.34,
            "date": "14-03-2025",
            "date_utc": 1741977300,
            "high": 33.34,
            "low": 33.27,
            "open": 33.28,
            "volume": 35747
        },
        "1741977600": {
            "close": 33.38,
            "date": "14-03-2025",
            "date_utc": 1741977600,
            "high": 33.38,
            "low": 33.32,
            "open": 33.33,
            "volume": 23843
        },
        "1741977900": {
            "close": 33.44,
            "date": "14-03-2025",
            "date_utc": 1741977900,
            "high": 33.47,
            "low": 33.37,
            "open": 33.37,
            "volume": 22654
        },
        "1741978200": {
            "close": 33.45,
            "date": "14-03-2025",
            "date_utc": 1741978200,
            "high": 33.46,
            "low": 33.41,
            "open": 33.44,
            "volume": 48451
        },
        "1741978500": {
            "close": 33.46,
            "date": "14-03-2025",
            "date_utc": 1741978500,
            "high": 33.48,
            "low": 33.42,
            "open": 33.44,
            "volume": 43840
        },
        "1741978800": {
            "close": 33.56,
            "date": "14-03-2025",
            "date_utc": 1741978800,
            "high": 33.57,
            "low": 33.46,
            "open": 33.46,
            "volume": 44362
        },
        "1741979100": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741979100,
            "high": 33.58,
            "low": 33.46,
            "open": 33.58,
            "volume": 71386
        },
        "1741979400": {
            "close": 33.45,
            "date": "14-03-2025",
            "date_utc": 1741979400,
            "high": 33.49,
            "low": 33.43,
            "open": 33.47,
            "volume": 35613
        },
        "1741979700": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741979700,
            "high": 33.5,
            "low": 33.45,
            "open": 33.45,
            "volume": 44384
        },
        "1741980000": {
            "close": 33.45,
            "date": "14-03-2025",
            "date_utc": 1741980000,
            "high": 33.47,
            "low": 33.4,
            "open": 33.46,
            "volume": 64213
        },
        "1741980300": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741980300,
            "high": 33.47,
            "low": 33.43,
            "open": 33.44,
            "volume": 86588
        },
        "1741980600": {
            "close": 33.49,
            "date": "14-03-2025",
            "date_utc": 1741980600,
            "high": 33.56,
            "low": 33.47,
            "open": 33.47,
            "volume": 90405
        },
        "1741980900": {
            "close": 33.49,
            "date": "14-03-2025",
            "date_utc": 1741980900,
            "high": 33.51,
            "low": 33.45,
            "open": 33.49,
            "volume": 52210
        },
        "1741981200": {
            "close": 33.47,
            "date": "14-03-2025",
            "date_utc": 1741981200,
            "high": 33.49,
            "low": 33.38,
            "open": 33.49,
            "volume": 90017
        },
        "1741981500": {
            "close": 33.58,
            "date": "14-03-2025",
            "date_utc": 1741981500,
            "high": 33.59,
            "low": 33.47,
            "open": 33.47,
            "volume": 101781
        },
        "1741981800": {
            "close": 33.57,
            "date": "14-03-2025",
            "date_utc": 1741981800,
            "high": 33.59,
            "low": 33.45,
            "open": 33.58,
            "volume": 203250
        },
        "1741982100": {
            "close": 33.53,
            "date": "14-03-2025",
            "date_utc": 1741982100,
            "high": 33.59,
            "low": 33.49,
            "open": 33.56,
            "volume": 503980
        },
        "1742218200": {
            "close": 34.12,
            "date": "17-03-2025",
            "date_utc": 1742218200,
            "high": 34.18,
            "low": 33.67,
            "open": 33.68,
            "volume": 172405
        },
        "1742218500": {
            "close": 34.35,
            "date": "17-03-2025",
            "date_utc": 1742218500,
            "high": 34.47,
            "low": 34.12,
            "open": 34.13,
            "volume": 111787
        },
        "1742218800": {
            "close": 34.1,
            "date": "17-03-2025",
            "date_utc": 1742218800,
            "high": 34.44,
            "low": 34.1,
            "open": 34.35,
            "volume": 91766
        },
        "1742219100": {
            "close": 34.08,
            "date": "17-03-2025",
            "date_utc": 1742219100,
            "high": 34.31,
            "low": 34.05,
            "open": 34.12,
            "volume": 108875
        },
        "1742219400": {
            "close": 34.13,
            "date": "17-03-2025",
            "date_utc": 1742219400,
            "high": 34.22,
            "low": 34.05,
            "open": 34.05,
            "volume": 122566
        },
        "1742219700": {
            "close": 34.02,
            "date": "17-03-2025",
            "date_utc": 1742219700,
            "high": 34.17,
            "low": 34.01,
            "open": 34.13,
            "volume": 52326
        },
        "1742220000": {
            "close": 34.19,
            "date": "17-03-2025",
            "date_utc": 1742220000,
            "high": 34.21,
            "low": 33.92,
            "open": 34,
            "volume": 114741
        },
        "1742220300": {
            "close": 34.35,
            "date": "17-03-2025",
            "date_utc": 1742220300,
            "high": 34.4,
            "low": 34.13,
            "open": 34.19,
            "volume": 80618
        },
        "1742220600": {
            "close": 34.35,
            "date": "17-03-2025",
            "date_utc": 1742220600,
            "high": 34.47,
            "low": 34.3,
            "open": 34.34,
            "volume": 64529
        },
        "1742220900": {
            "close": 34.33,
            "date": "17-03-2025",
            "date_utc": 1742220900,
            "high": 34.42,
            "low": 34.28,
            "open": 34.33,
            "volume": 32523
        },
        "1742221200": {
            "close": 34.33,
            "date": "17-03-2025",
            "date_utc": 1742221200,
            "high": 34.43,
            "low": 34.3,
            "open": 34.33,
            "volume": 50965
        },
        "1742221500": {
            "close": 34.29,
            "date": "17-03-2025",
            "date_utc": 1742221500,
            "high": 34.38,
            "low": 34.28,
            "open": 34.35,
            "volume": 67687
        },
        "1742221800": {
            "close": 34.28,
            "date": "17-03-2025",
            "date_utc": 1742221800,
            "high": 34.32,
            "low": 34.23,
            "open": 34.28,
            "volume": 79123
        },
        "1742222100": {
            "close": 34.31,
            "date": "17-03-2025",
            "date_utc": 1742222100,
            "high": 34.32,
            "low": 34.18,
            "open": 34.28,
            "volume": 56765
        },
        "1742222400": {
            "close": 34.29,
            "date": "17-03-2025",
            "date_utc": 1742222400,
            "high": 34.33,
            "low": 34.19,
            "open": 34.31,
            "volume": 88157
        },
        "1742222700": {
            "close": 34.29,
            "date": "17-03-2025",
            "date_utc": 1742222700,
            "high": 34.34,
            "low": 34.25,
            "open": 34.29,
            "volume": 62273
        },
        "1742223000": {
            "close": 34.35,
            "date": "17-03-2025",
            "date_utc": 1742223000,
            "high": 34.39,
            "low": 34.25,
            "open": 34.3,
            "volume": 38963
        },
        "1742223300": {
            "close": 34.32,
            "date": "17-03-2025",
            "date_utc": 1742223300,
            "high": 34.33,
            "low": 34.27,
            "open": 34.33,
            "volume": 34607
        },
        "1742223600": {
            "close": 34.33,
            "date": "17-03-2025",
            "date_utc": 1742223600,
            "high": 34.37,
            "low": 34.3,
            "open": 34.33,
            "volume": 18349
        },
        "1742223900": {
            "close": 34.48,
            "date": "17-03-2025",
            "date_utc": 1742223900,
            "high": 34.49,
            "low": 34.34,
            "open": 34.36,
            "volume": 41986
        },
        "1742224200": {
            "close": 34.48,
            "date": "17-03-2025",
            "date_utc": 1742224200,
            "high": 34.51,
            "low": 34.43,
            "open": 34.49,
            "volume": 40120
        },
        "1742224500": {
            "close": 34.5,
            "date": "17-03-2025",
            "date_utc": 1742224500,
            "high": 34.53,
            "low": 34.44,
            "open": 34.47,
            "volume": 67060
        },
        "1742224800": {
            "close": 34.56,
            "date": "17-03-2025",
            "date_utc": 1742224800,
            "high": 34.57,
            "low": 34.46,
            "open": 34.51,
            "volume": 27107
        },
        "1742225100": {
            "close": 34.51,
            "date": "17-03-2025",
            "date_utc": 1742225100,
            "high": 34.58,
            "low": 34.48,
            "open": 34.56,
            "volume": 43152
        },
        "1742225400": {
            "close": 34.49,
            "date": "17-03-2025",
            "date_utc": 1742225400,
            "high": 34.57,
            "low": 34.48,
            "open": 34.51,
            "volume": 29137
        },
        "1742225700": {
            "close": 34.48,
            "date": "17-03-2025",
            "date_utc": 1742225700,
            "high": 34.53,
            "low": 34.46,
            "open": 34.5,
            "volume": 36603
        },
        "1742226000": {
            "close": 34.55,
            "date": "17-03-2025",
            "date_utc": 1742226000,
            "high": 34.55,
            "low": 34.49,
            "open": 34.49,
            "volume": 16640
        },
        "1742226300": {
            "close": 34.54,
            "date": "17-03-2025",
            "date_utc": 1742226300,
            "high": 34.6,
            "low": 34.52,
            "open": 34.53,
            "volume": 29711
        },
        "1742226600": {
            "close": 34.53,
            "date": "17-03-2025",
            "date_utc": 1742226600,
            "high": 34.56,
            "low": 34.5,
            "open": 34.54,
            "volume": 30480
        },
        "1742226900": {
            "close": 34.54,
            "date": "17-03-2025",
            "date_utc": 1742226900,
            "high": 34.58,
            "low": 34.53,
            "open": 34.54,
            "volume": 36446
        },
        "1742227200": {
            "close": 34.52,
            "date": "17-03-2025",
            "date_utc": 1742227200,
            "high": 34.54,
            "low": 34.49,
            "open": 34.54,
            "volume": 30589
        },
        "1742227500": {
            "close": 34.6,
            "date": "17-03-2025",
            "date_utc": 1742227500,
            "high": 34.61,
            "low": 34.52,
            "open": 34.52,
            "volume": 35889
        },
        "1742227800": {
            "close": 34.6,
            "date": "17-03-2025",
            "date_utc": 1742227800,
            "high": 34.61,
            "low": 34.56,
            "open": 34.6,
            "volume": 23310
        },
        "1742228100": {
            "close": 34.56,
            "date": "17-03-2025",
            "date_utc": 1742228100,
            "high": 34.61,
            "low": 34.51,
            "open": 34.6,
            "volume": 55317
        },
        "1742228400": {
            "close": 34.63,
            "date": "17-03-2025",
            "date_utc": 1742228400,
            "high": 34.63,
            "low": 34.51,
            "open": 34.56,
            "volume": 24706
        },
        "1742228700": {
            "close": 34.65,
            "date": "17-03-2025",
            "date_utc": 1742228700,
            "high": 34.68,
            "low": 34.51,
            "open": 34.63,
            "volume": 136322
        },
        "1742229000": {
            "close": 34.58,
            "date": "17-03-2025",
            "date_utc": 1742229000,
            "high": 34.68,
            "low": 34.55,
            "open": 34.65,
            "volume": 92933
        },
        "1742229300": {
            "close": 34.62,
            "date": "17-03-2025",
            "date_utc": 1742229300,
            "high": 34.71,
            "low": 34.59,
            "open": 34.59,
            "volume": 63175
        },
        "1742229600": {
            "close": 34.64,
            "date": "17-03-2025",
            "date_utc": 1742229600,
            "high": 34.66,
            "low": 34.6,
            "open": 34.62,
            "volume": 66964
        },
        "1742229900": {
            "close": 34.7,
            "date": "17-03-2025",
            "date_utc": 1742229900,
            "high": 34.7,
            "low": 34.59,
            "open": 34.65,
            "volume": 32060
        },
        "1742230200": {
            "close": 34.73,
            "date": "17-03-2025",
            "date_utc": 1742230200,
            "high": 34.77,
            "low": 34.68,
            "open": 34.71,
            "volume": 48803
        },
        "1742230500": {
            "close": 34.6,
            "date": "17-03-2025",
            "date_utc": 1742230500,
            "high": 34.75,
            "low": 34.6,
            "open": 34.74,
            "volume": 24529
        },
        "1742230800": {
            "close": 34.58,
            "date": "17-03-2025",
            "date_utc": 1742230800,
            "high": 34.63,
            "low": 34.55,
            "open": 34.6,
            "volume": 21600
        },
        "1742231100": {
            "close": 34.63,
            "date": "17-03-2025",
            "date_utc": 1742231100,
            "high": 34.69,
            "low": 34.58,
            "open": 34.58,
            "volume": 23212
        },
        "1742231400": {
            "close": 34.65,
            "date": "17-03-2025",
            "date_utc": 1742231400,
            "high": 34.72,
            "low": 34.63,
            "open": 34.64,
            "volume": 23295
        },
        "1742231700": {
            "close": 34.63,
            "date": "17-03-2025",
            "date_utc": 1742231700,
            "high": 34.68,
            "low": 34.62,
            "open": 34.64,
            "volume": 20482
        },
        "1742232000": {
            "close": 34.88,
            "date": "17-03-2025",
            "date_utc": 1742232000,
            "high": 34.88,
            "low": 34.6,
            "open": 34.61,
            "volume": 67033
        },
        "1742232300": {
            "close": 34.93,
            "date": "17-03-2025",
            "date_utc": 1742232300,
            "high": 34.95,
            "low": 34.86,
            "open": 34.88,
            "volume": 49003
        },
        "1742232600": {
            "close": 34.89,
            "date": "17-03-2025",
            "date_utc": 1742232600,
            "high": 34.92,
            "low": 34.86,
            "open": 34.91,
            "volume": 33767
        },
        "1742232900": {
            "close": 34.89,
            "date": "17-03-2025",
            "date_utc": 1742232900,
            "high": 34.92,
            "low": 34.87,
            "open": 34.88,
            "volume": 38254
        },
        "1742233200": {
            "close": 34.81,
            "date": "17-03-2025",
            "date_utc": 1742233200,
            "high": 34.89,
            "low": 34.81,
            "open": 34.89,
            "volume": 28574
        },
        "1742233500": {
            "close": 34.8,
            "date": "17-03-2025",
            "date_utc": 1742233500,
            "high": 34.83,
            "low": 34.78,
            "open": 34.8,
            "volume": 20320
        },
        "1742233800": {
            "close": 34.76,
            "date": "17-03-2025",
            "date_utc": 1742233800,
            "high": 34.79,
            "low": 34.76,
            "open": 34.79,
            "volume": 16239
        },
        "1742234100": {
            "close": 34.76,
            "date": "17-03-2025",
            "date_utc": 1742234100,
            "high": 34.78,
            "low": 34.75,
            "open": 34.77,
            "volume": 21206
        },
        "1742234400": {
            "close": 34.8,
            "date": "17-03-2025",
            "date_utc": 1742234400,
            "high": 34.85,
            "low": 34.76,
            "open": 34.76,
            "volume": 36108
        },
        "1742234700": {
            "close": 34.89,
            "date": "17-03-2025",
            "date_utc": 1742234700,
            "high": 34.9,
            "low": 34.79,
            "open": 34.79,
            "volume": 29359
        },
        "1742235000": {
            "close": 34.86,
            "date": "17-03-2025",
            "date_utc": 1742235000,
            "high": 34.88,
            "low": 34.84,
            "open": 34.88,
            "volume": 20492
        },
        "1742235300": {
            "close": 34.88,
            "date": "17-03-2025",
            "date_utc": 1742235300,
            "high": 34.9,
            "low": 34.82,
            "open": 34.88,
            "volume": 23221
        },
        "1742235600": {
            "close": 34.99,
            "date": "17-03-2025",
            "date_utc": 1742235600,
            "high": 34.99,
            "low": 34.88,
            "open": 34.89,
            "volume": 41980
        },
        "1742235900": {
            "close": 34.95,
            "date": "17-03-2025",
            "date_utc": 1742235900,
            "high": 35,
            "low": 34.92,
            "open": 34.97,
            "volume": 67656
        },
        "1742236200": {
            "close": 35.08,
            "date": "17-03-2025",
            "date_utc": 1742236200,
            "high": 35.12,
            "low": 34.93,
            "open": 34.95,
            "volume": 91815
        },
        "1742236500": {
            "close": 35.01,
            "date": "17-03-2025",
            "date_utc": 1742236500,
            "high": 35.09,
            "low": 35.01,
            "open": 35.08,
            "volume": 49035
        },
        "1742236800": {
            "close": 35.02,
            "date": "17-03-2025",
            "date_utc": 1742236800,
            "high": 35.02,
            "low": 34.96,
            "open": 35.01,
            "volume": 56372
        },
        "1742237100": {
            "close": 35.02,
            "date": "17-03-2025",
            "date_utc": 1742237100,
            "high": 35.04,
            "low": 35.01,
            "open": 35.01,
            "volume": 40774
        },
        "1742237400": {
            "close": 35.07,
            "date": "17-03-2025",
            "date_utc": 1742237400,
            "high": 35.07,
            "low": 35,
            "open": 35.03,
            "volume": 48368
        },
        "1742237700": {
            "close": 35.05,
            "date": "17-03-2025",
            "date_utc": 1742237700,
            "high": 35.12,
            "low": 35.05,
            "open": 35.06,
            "volume": 49086
        },
        "1742238000": {
            "close": 35.03,
            "date": "17-03-2025",
            "date_utc": 1742238000,
            "high": 35.08,
            "low": 35.01,
            "open": 35.04,
            "volume": 36073
        },
        "1742238300": {
            "close": 35.06,
            "date": "17-03-2025",
            "date_utc": 1742238300,
            "high": 35.11,
            "low": 35.04,
            "open": 35.04,
            "volume": 27977
        },
        "1742238600": {
            "close": 35.06,
            "date": "17-03-2025",
            "date_utc": 1742238600,
            "high": 35.08,
            "low": 35.04,
            "open": 35.07,
            "volume": 34358
        },
        "1742238900": {
            "close": 35.08,
            "date": "17-03-2025",
            "date_utc": 1742238900,
            "high": 35.08,
            "low": 35,
            "open": 35.06,
            "volume": 38354
        },
        "1742239200": {
            "close": 34.94,
            "date": "17-03-2025",
            "date_utc": 1742239200,
            "high": 35.07,
            "low": 34.94,
            "open": 35.07,
            "volume": 54189
        },
        "1742239500": {
            "close": 34.85,
            "date": "17-03-2025",
            "date_utc": 1742239500,
            "high": 34.94,
            "low": 34.81,
            "open": 34.94,
            "volume": 108218
        },
        "1742239800": {
            "close": 34.78,
            "date": "17-03-2025",
            "date_utc": 1742239800,
            "high": 34.91,
            "low": 34.78,
            "open": 34.85,
            "volume": 90668
        },
        "1742240100": {
            "close": 34.74,
            "date": "17-03-2025",
            "date_utc": 1742240100,
            "high": 34.82,
            "low": 34.69,
            "open": 34.77,
            "volume": 70480
        },
        "1742240400": {
            "close": 34.81,
            "date": "17-03-2025",
            "date_utc": 1742240400,
            "high": 34.83,
            "low": 34.73,
            "open": 34.74,
            "volume": 95841
        },
        "1742240700": {
            "close": 34.81,
            "date": "17-03-2025",
            "date_utc": 1742240700,
            "high": 34.86,
            "low": 34.74,
            "open": 34.81,
            "volume": 148336
        },
        "1742241000": {
            "close": 34.82,
            "date": "17-03-2025",
            "date_utc": 1742241000,
            "high": 34.9,
            "low": 34.77,
            "open": 34.81,
            "volume": 282158
        },
        "1742241300": {
            "close": 34.81,
            "date": "17-03-2025",
            "date_utc": 1742241300,
            "high": 34.82,
            "low": 34.68,
            "open": 34.81,
            "volume": 880363
        },
        "1742304600": {
            "close": 34.53,
            "date": "18-03-2025",
            "date_utc": 1742304600,
            "high": 34.63,
            "low": 34.29,
            "open": 34.59,
            "volume": 174473
        },
        "1742304900": {
            "close": 34.22,
            "date": "18-03-2025",
            "date_utc": 1742304900,
            "high": 34.53,
            "low": 34.21,
            "open": 34.52,
            "volume": 142291
        },
        "1742305200": {
            "close": 34.15,
            "date": "18-03-2025",
            "date_utc": 1742305200,
            "high": 34.32,
            "low": 34.11,
            "open": 34.22,
            "volume": 81925
        },
        "1742305500": {
            "close": 34.09,
            "date": "18-03-2025",
            "date_utc": 1742305500,
            "high": 34.28,
            "low": 34.09,
            "open": 34.15,
            "volume": 68277
        },
        "1742305800": {
            "close": 33.91,
            "date": "18-03-2025",
            "date_utc": 1742305800,
            "high": 34.09,
            "low": 33.87,
            "open": 34.08,
            "volume": 128588
        },
        "1742306100": {
            "close": 33.86,
            "date": "18-03-2025",
            "date_utc": 1742306100,
            "high": 34.02,
            "low": 33.84,
            "open": 33.9,
            "volume": 66392
        },
        "1742306400": {
            "close": 33.67,
            "date": "18-03-2025",
            "date_utc": 1742306400,
            "high": 33.9,
            "low": 33.62,
            "open": 33.86,
            "volume": 82187
        },
        "1742306700": {
            "close": 33.88,
            "date": "18-03-2025",
            "date_utc": 1742306700,
            "high": 34,
            "low": 33.66,
            "open": 33.67,
            "volume": 79583
        },
        "1742307000": {
            "close": 33.59,
            "date": "18-03-2025",
            "date_utc": 1742307000,
            "high": 33.9,
            "low": 33.57,
            "open": 33.88,
            "volume": 55918
        },
        "1742307300": {
            "close": 33.48,
            "date": "18-03-2025",
            "date_utc": 1742307300,
            "high": 33.63,
            "low": 33.36,
            "open": 33.57,
            "volume": 150640
        },
        "1742307600": {
            "close": 33.56,
            "date": "18-03-2025",
            "date_utc": 1742307600,
            "high": 33.65,
            "low": 33.46,
            "open": 33.48,
            "volume": 43295
        },
        "1742307900": {
            "close": 33.66,
            "date": "18-03-2025",
            "date_utc": 1742307900,
            "high": 33.7,
            "low": 33.53,
            "open": 33.58,
            "volume": 84662
        },
        "1742308200": {
            "close": 33.51,
            "date": "18-03-2025",
            "date_utc": 1742308200,
            "high": 33.69,
            "low": 33.51,
            "open": 33.66,
            "volume": 57196
        },
        "1742308500": {
            "close": 33.53,
            "date": "18-03-2025",
            "date_utc": 1742308500,
            "high": 33.59,
            "low": 33.45,
            "open": 33.51,
            "volume": 53729
        },
        "1742308800": {
            "close": 33.36,
            "date": "18-03-2025",
            "date_utc": 1742308800,
            "high": 33.52,
            "low": 33.34,
            "open": 33.52,
            "volume": 33925
        },
        "1742309100": {
            "close": 33.19,
            "date": "18-03-2025",
            "date_utc": 1742309100,
            "high": 33.36,
            "low": 33.19,
            "open": 33.34,
            "volume": 82859
        },
        "1742309400": {
            "close": 33.32,
            "date": "18-03-2025",
            "date_utc": 1742309400,
            "high": 33.39,
            "low": 33.2,
            "open": 33.21,
            "volume": 60519
        },
        "1742309700": {
            "close": 33.21,
            "date": "18-03-2025",
            "date_utc": 1742309700,
            "high": 33.36,
            "low": 33.17,
            "open": 33.35,
            "volume": 68394
        },
        "1742310000": {
            "close": 33.17,
            "date": "18-03-2025",
            "date_utc": 1742310000,
            "high": 33.21,
            "low": 32.99,
            "open": 33.21,
            "volume": 48084
        },
        "1742310300": {
            "close": 33.26,
            "date": "18-03-2025",
            "date_utc": 1742310300,
            "high": 33.26,
            "low": 33.11,
            "open": 33.18,
            "volume": 32108
        },
        "1742310600": {
            "close": 33.46,
            "date": "18-03-2025",
            "date_utc": 1742310600,
            "high": 33.47,
            "low": 33.2,
            "open": 33.24,
            "volume": 33680
        },
        "1742310900": {
            "close": 33.45,
            "date": "18-03-2025",
            "date_utc": 1742310900,
            "high": 33.49,
            "low": 33.43,
            "open": 33.45,
            "volume": 38221
        },
        "1742311200": {
            "close": 33.49,
            "date": "18-03-2025",
            "date_utc": 1742311200,
            "high": 33.49,
            "low": 33.43,
            "open": 33.45,
            "volume": 39405
        },
        "1742311500": {
            "close": 33.49,
            "date": "18-03-2025",
            "date_utc": 1742311500,
            "high": 33.52,
            "low": 33.45,
            "open": 33.49,
            "volume": 46351
        },
        "1742311800": {
            "close": 33.59,
            "date": "18-03-2025",
            "date_utc": 1742311800,
            "high": 33.63,
            "low": 33.51,
            "open": 33.51,
            "volume": 32668
        },
        "1742312100": {
            "close": 33.62,
            "date": "18-03-2025",
            "date_utc": 1742312100,
            "high": 33.67,
            "low": 33.58,
            "open": 33.58,
            "volume": 45859
        },
        "1742312400": {
            "close": 33.62,
            "date": "18-03-2025",
            "date_utc": 1742312400,
            "high": 33.65,
            "low": 33.58,
            "open": 33.65,
            "volume": 17841
        },
        "1742312700": {
            "close": 33.58,
            "date": "18-03-2025",
            "date_utc": 1742312700,
            "high": 33.63,
            "low": 33.57,
            "open": 33.63,
            "volume": 31847
        },
        "1742313000": {
            "close": 33.61,
            "date": "18-03-2025",
            "date_utc": 1742313000,
            "high": 33.64,
            "low": 33.55,
            "open": 33.6,
            "volume": 68032
        },
        "1742313300": {
            "close": 33.6,
            "date": "18-03-2025",
            "date_utc": 1742313300,
            "high": 33.66,
            "low": 33.59,
            "open": 33.6,
            "volume": 20546
        },
        "1742313600": {
            "close": 33.6,
            "date": "18-03-2025",
            "date_utc": 1742313600,
            "high": 33.64,
            "low": 33.59,
            "open": 33.59,
            "volume": 31084
        },
        "1742313900": {
            "close": 33.62,
            "date": "18-03-2025",
            "date_utc": 1742313900,
            "high": 33.64,
            "low": 33.59,
            "open": 33.59,
            "volume": 30372
        },
        "1742314200": {
            "close": 33.69,
            "date": "18-03-2025",
            "date_utc": 1742314200,
            "high": 33.75,
            "low": 33.6,
            "open": 33.62,
            "volume": 53492
        },
        "1742314500": {
            "close": 33.74,
            "date": "18-03-2025",
            "date_utc": 1742314500,
            "high": 33.75,
            "low": 33.67,
            "open": 33.69,
            "volume": 32809
        },
        "1742314800": {
            "close": 33.78,
            "date": "18-03-2025",
            "date_utc": 1742314800,
            "high": 33.86,
            "low": 33.74,
            "open": 33.74,
            "volume": 35491
        },
        "1742315100": {
            "close": 33.78,
            "date": "18-03-2025",
            "date_utc": 1742315100,
            "high": 33.82,
            "low": 33.74,
            "open": 33.79,
            "volume": 52791
        },
        "1742315400": {
            "close": 33.9,
            "date": "18-03-2025",
            "date_utc": 1742315400,
            "high": 33.9,
            "low": 33.79,
            "open": 33.79,
            "volume": 22841
        },
        "1742315700": {
            "close": 33.91,
            "date": "18-03-2025",
            "date_utc": 1742315700,
            "high": 33.95,
            "low": 33.83,
            "open": 33.9,
            "volume": 42915
        },
        "1742316000": {
            "close": 33.72,
            "date": "18-03-2025",
            "date_utc": 1742316000,
            "high": 33.91,
            "low": 33.71,
            "open": 33.91,
            "volume": 24790
        },
        "1742316300": {
            "close": 33.76,
            "date": "18-03-2025",
            "date_utc": 1742316300,
            "high": 33.77,
            "low": 33.72,
            "open": 33.74,
            "volume": 22040
        },
        "1742316600": {
            "close": 33.85,
            "date": "18-03-2025",
            "date_utc": 1742316600,
            "high": 33.85,
            "low": 33.74,
            "open": 33.77,
            "volume": 18910
        },
        "1742316900": {
            "close": 33.97,
            "date": "18-03-2025",
            "date_utc": 1742316900,
            "high": 33.98,
            "low": 33.82,
            "open": 33.86,
            "volume": 26956
        },
        "1742317200": {
            "close": 33.92,
            "date": "18-03-2025",
            "date_utc": 1742317200,
            "high": 34,
            "low": 33.92,
            "open": 33.94,
            "volume": 22979
        },
        "1742317500": {
            "close": 33.86,
            "date": "18-03-2025",
            "date_utc": 1742317500,
            "high": 33.93,
            "low": 33.83,
            "open": 33.93,
            "volume": 22936
        },
        "1742317800": {
            "close": 33.97,
            "date": "18-03-2025",
            "date_utc": 1742317800,
            "high": 33.97,
            "low": 33.85,
            "open": 33.86,
            "volume": 17131
        },
        "1742318100": {
            "close": 33.89,
            "date": "18-03-2025",
            "date_utc": 1742318100,
            "high": 34,
            "low": 33.78,
            "open": 33.97,
            "volume": 55112
        },
        "1742318400": {
            "close": 33.99,
            "date": "18-03-2025",
            "date_utc": 1742318400,
            "high": 34.02,
            "low": 33.88,
            "open": 33.88,
            "volume": 56620
        },
        "1742318700": {
            "close": 33.9,
            "date": "18-03-2025",
            "date_utc": 1742318700,
            "high": 34.02,
            "low": 33.86,
            "open": 33.99,
            "volume": 40252
        },
        "1742319000": {
            "close": 33.9,
            "date": "18-03-2025",
            "date_utc": 1742319000,
            "high": 33.92,
            "low": 33.86,
            "open": 33.91,
            "volume": 15532
        },
        "1742319300": {
            "close": 34.03,
            "date": "18-03-2025",
            "date_utc": 1742319300,
            "high": 34.05,
            "low": 33.91,
            "open": 33.92,
            "volume": 24959
        },
        "1742319600": {
            "close": 33.95,
            "date": "18-03-2025",
            "date_utc": 1742319600,
            "high": 34.06,
            "low": 33.95,
            "open": 34.04,
            "volume": 32068
        },
        "1742319900": {
            "close": 33.91,
            "date": "18-03-2025",
            "date_utc": 1742319900,
            "high": 33.97,
            "low": 33.87,
            "open": 33.96,
            "volume": 58893
        },
        "1742320200": {
            "close": 33.94,
            "date": "18-03-2025",
            "date_utc": 1742320200,
            "high": 33.95,
            "low": 33.9,
            "open": 33.92,
            "volume": 35649
        },
        "1742320500": {
            "close": 33.86,
            "date": "18-03-2025",
            "date_utc": 1742320500,
            "high": 33.94,
            "low": 33.86,
            "open": 33.94,
            "volume": 39645
        },
        "1742320800": {
            "close": 33.93,
            "date": "18-03-2025",
            "date_utc": 1742320800,
            "high": 34.02,
            "low": 33.85,
            "open": 33.85,
            "volume": 80506
        },
        "1742321100": {
            "close": 33.98,
            "date": "18-03-2025",
            "date_utc": 1742321100,
            "high": 33.99,
            "low": 33.91,
            "open": 33.91,
            "volume": 13059
        },
        "1742321400": {
            "close": 33.91,
            "date": "18-03-2025",
            "date_utc": 1742321400,
            "high": 33.98,
            "low": 33.89,
            "open": 33.98,
            "volume": 23633
        },
        "1742321700": {
            "close": 34.01,
            "date": "18-03-2025",
            "date_utc": 1742321700,
            "high": 34.01,
            "low": 33.9,
            "open": 33.91,
            "volume": 17584
        },
        "1742322000": {
            "close": 34.06,
            "date": "18-03-2025",
            "date_utc": 1742322000,
            "high": 34.11,
            "low": 34.01,
            "open": 34.02,
            "volume": 32864
        },
        "1742322300": {
            "close": 33.97,
            "date": "18-03-2025",
            "date_utc": 1742322300,
            "high": 34.07,
            "low": 33.97,
            "open": 34.06,
            "volume": 21686
        },
        "1742322600": {
            "close": 34.01,
            "date": "18-03-2025",
            "date_utc": 1742322600,
            "high": 34.11,
            "low": 33.93,
            "open": 33.98,
            "volume": 48691
        },
        "1742322900": {
            "close": 34.13,
            "date": "18-03-2025",
            "date_utc": 1742322900,
            "high": 34.18,
            "low": 34.02,
            "open": 34.02,
            "volume": 40732
        },
        "1742323200": {
            "close": 34.08,
            "date": "18-03-2025",
            "date_utc": 1742323200,
            "high": 34.12,
            "low": 34.03,
            "open": 34.11,
            "volume": 33512
        },
        "1742323500": {
            "close": 34.13,
            "date": "18-03-2025",
            "date_utc": 1742323500,
            "high": 34.15,
            "low": 34.08,
            "open": 34.08,
            "volume": 24514
        },
        "1742323800": {
            "close": 34.13,
            "date": "18-03-2025",
            "date_utc": 1742323800,
            "high": 34.22,
            "low": 34.08,
            "open": 34.14,
            "volume": 30538
        },
        "1742324100": {
            "close": 34.12,
            "date": "18-03-2025",
            "date_utc": 1742324100,
            "high": 34.16,
            "low": 34.09,
            "open": 34.11,
            "volume": 33398
        },
        "1742324400": {
            "close": 34.16,
            "date": "18-03-2025",
            "date_utc": 1742324400,
            "high": 34.16,
            "low": 34.05,
            "open": 34.12,
            "volume": 30842
        },
        "1742324700": {
            "close": 34.2,
            "date": "18-03-2025",
            "date_utc": 1742324700,
            "high": 34.22,
            "low": 34.11,
            "open": 34.14,
            "volume": 46084
        },
        "1742325000": {
            "close": 34.26,
            "date": "18-03-2025",
            "date_utc": 1742325000,
            "high": 34.26,
            "low": 34.16,
            "open": 34.2,
            "volume": 50220
        },
        "1742325300": {
            "close": 34.24,
            "date": "18-03-2025",
            "date_utc": 1742325300,
            "high": 34.25,
            "low": 34.18,
            "open": 34.24,
            "volume": 44185
        },
        "1742325600": {
            "close": 34.1,
            "date": "18-03-2025",
            "date_utc": 1742325600,
            "high": 34.26,
            "low": 34.1,
            "open": 34.23,
            "volume": 51830
        },
        "1742325900": {
            "close": 34.05,
            "date": "18-03-2025",
            "date_utc": 1742325900,
            "high": 34.13,
            "low": 34.03,
            "open": 34.09,
            "volume": 36461
        },
        "1742326200": {
            "close": 34.08,
            "date": "18-03-2025",
            "date_utc": 1742326200,
            "high": 34.1,
            "low": 34.03,
            "open": 34.06,
            "volume": 25755
        },
        "1742326500": {
            "close": 34.02,
            "date": "18-03-2025",
            "date_utc": 1742326500,
            "high": 34.09,
            "low": 34.01,
            "open": 34.07,
            "volume": 40096
        },
        "1742326800": {
            "close": 33.98,
            "date": "18-03-2025",
            "date_utc": 1742326800,
            "high": 34.04,
            "low": 33.96,
            "open": 34.03,
            "volume": 63187
        },
        "1742327100": {
            "close": 34,
            "date": "18-03-2025",
            "date_utc": 1742327100,
            "high": 34.01,
            "low": 33.92,
            "open": 33.98,
            "volume": 250384
        },
        "1742327400": {
            "close": 34.02,
            "date": "18-03-2025",
            "date_utc": 1742327400,
            "high": 34.1,
            "low": 33.97,
            "open": 34.03,
            "volume": 119866
        },
        "1742327700": {
            "close": 33.98,
            "date": "18-03-2025",
            "date_utc": 1742327700,
            "high": 34.05,
            "low": 33.9,
            "open": 34.04,
            "volume": 685083
        },
        "1742391000": {
            "close": 34.38,
            "date": "19-03-2025",
            "date_utc": 1742391000,
            "high": 34.54,
            "low": 34.21,
            "open": 34.44,
            "volume": 115782
        },
        "1742391300": {
            "close": 34.18,
            "date": "19-03-2025",
            "date_utc": 1742391300,
            "high": 34.4,
            "low": 34.15,
            "open": 34.39,
            "volume": 46066
        },
        "1742391600": {
            "close": 34.3,
            "date": "19-03-2025",
            "date_utc": 1742391600,
            "high": 34.4,
            "low": 34.19,
            "open": 34.19,
            "volume": 60591
        },
        "1742391900": {
            "close": 34.56,
            "date": "19-03-2025",
            "date_utc": 1742391900,
            "high": 34.57,
            "low": 34.24,
            "open": 34.29,
            "volume": 97026
        },
        "1742392200": {
            "close": 34.66,
            "date": "19-03-2025",
            "date_utc": 1742392200,
            "high": 34.7,
            "low": 34.54,
            "open": 34.55,
            "volume": 90206
        },
        "1742392500": {
            "close": 34.71,
            "date": "19-03-2025",
            "date_utc": 1742392500,
            "high": 34.79,
            "low": 34.6,
            "open": 34.65,
            "volume": 56168
        },
        "1742392800": {
            "close": 35.02,
            "date": "19-03-2025",
            "date_utc": 1742392800,
            "high": 35.04,
            "low": 34.72,
            "open": 34.72,
            "volume": 42891
        },
        "1742393100": {
            "close": 35.08,
            "date": "19-03-2025",
            "date_utc": 1742393100,
            "high": 35.19,
            "low": 34.99,
            "open": 35.01,
            "volume": 246450
        },
        "1742393400": {
            "close": 35.13,
            "date": "19-03-2025",
            "date_utc": 1742393400,
            "high": 35.19,
            "low": 34.97,
            "open": 35.08,
            "volume": 51519
        },
        "1742393700": {
            "close": 35.19,
            "date": "19-03-2025",
            "date_utc": 1742393700,
            "high": 35.25,
            "low": 35.1,
            "open": 35.15,
            "volume": 98876
        },
        "1742394000": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742394000,
            "high": 35.21,
            "low": 35.12,
            "open": 35.19,
            "volume": 27981
        },
        "1742394300": {
            "close": 35.13,
            "date": "19-03-2025",
            "date_utc": 1742394300,
            "high": 35.29,
            "low": 35.1,
            "open": 35.18,
            "volume": 116205
        },
        "1742394600": {
            "close": 35.12,
            "date": "19-03-2025",
            "date_utc": 1742394600,
            "high": 35.24,
            "low": 35.11,
            "open": 35.12,
            "volume": 46916
        },
        "1742394900": {
            "close": 35.14,
            "date": "19-03-2025",
            "date_utc": 1742394900,
            "high": 35.18,
            "low": 35.07,
            "open": 35.11,
            "volume": 119685
        },
        "1742395200": {
            "close": 35.04,
            "date": "19-03-2025",
            "date_utc": 1742395200,
            "high": 35.19,
            "low": 35,
            "open": 35.15,
            "volume": 55928
        },
        "1742395500": {
            "close": 35.06,
            "date": "19-03-2025",
            "date_utc": 1742395500,
            "high": 35.13,
            "low": 35.04,
            "open": 35.06,
            "volume": 20224
        },
        "1742395800": {
            "close": 35,
            "date": "19-03-2025",
            "date_utc": 1742395800,
            "high": 35.08,
            "low": 34.98,
            "open": 35.07,
            "volume": 31655
        },
        "1742396100": {
            "close": 35,
            "date": "19-03-2025",
            "date_utc": 1742396100,
            "high": 35.06,
            "low": 34.98,
            "open": 35,
            "volume": 42762
        },
        "1742396400": {
            "close": 35.01,
            "date": "19-03-2025",
            "date_utc": 1742396400,
            "high": 35.05,
            "low": 34.99,
            "open": 35,
            "volume": 27212
        },
        "1742396700": {
            "close": 35.11,
            "date": "19-03-2025",
            "date_utc": 1742396700,
            "high": 35.13,
            "low": 34.94,
            "open": 35.02,
            "volume": 34506
        },
        "1742397000": {
            "close": 35.09,
            "date": "19-03-2025",
            "date_utc": 1742397000,
            "high": 35.12,
            "low": 35.03,
            "open": 35.12,
            "volume": 26222
        },
        "1742397300": {
            "close": 35.04,
            "date": "19-03-2025",
            "date_utc": 1742397300,
            "high": 35.1,
            "low": 35.01,
            "open": 35.09,
            "volume": 26296
        },
        "1742397600": {
            "close": 35.08,
            "date": "19-03-2025",
            "date_utc": 1742397600,
            "high": 35.11,
            "low": 35.03,
            "open": 35.03,
            "volume": 11531
        },
        "1742397900": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742397900,
            "high": 35.22,
            "low": 35.07,
            "open": 35.1,
            "volume": 33814
        },
        "1742398200": {
            "close": 35.21,
            "date": "19-03-2025",
            "date_utc": 1742398200,
            "high": 35.28,
            "low": 35.13,
            "open": 35.19,
            "volume": 33658
        },
        "1742398500": {
            "close": 35.19,
            "date": "19-03-2025",
            "date_utc": 1742398500,
            "high": 35.24,
            "low": 35.18,
            "open": 35.21,
            "volume": 18197
        },
        "1742398800": {
            "close": 35.13,
            "date": "19-03-2025",
            "date_utc": 1742398800,
            "high": 35.19,
            "low": 35.11,
            "open": 35.18,
            "volume": 27101
        },
        "1742399100": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742399100,
            "high": 35.18,
            "low": 35.11,
            "open": 35.14,
            "volume": 21303
        },
        "1742399400": {
            "close": 35.24,
            "date": "19-03-2025",
            "date_utc": 1742399400,
            "high": 35.26,
            "low": 35.15,
            "open": 35.17,
            "volume": 26591
        },
        "1742399700": {
            "close": 35.2,
            "date": "19-03-2025",
            "date_utc": 1742399700,
            "high": 35.22,
            "low": 35.18,
            "open": 35.22,
            "volume": 14407
        },
        "1742400000": {
            "close": 35.22,
            "date": "19-03-2025",
            "date_utc": 1742400000,
            "high": 35.25,
            "low": 35.21,
            "open": 35.22,
            "volume": 14693
        },
        "1742400300": {
            "close": 35.23,
            "date": "19-03-2025",
            "date_utc": 1742400300,
            "high": 35.27,
            "low": 35.22,
            "open": 35.23,
            "volume": 16295
        },
        "1742400600": {
            "close": 35.17,
            "date": "19-03-2025",
            "date_utc": 1742400600,
            "high": 35.26,
            "low": 35.16,
            "open": 35.23,
            "volume": 21868
        },
        "1742400900": {
            "close": 35.14,
            "date": "19-03-2025",
            "date_utc": 1742400900,
            "high": 35.2,
            "low": 35.11,
            "open": 35.17,
            "volume": 56067
        },
        "1742401200": {
            "close": 35.21,
            "date": "19-03-2025",
            "date_utc": 1742401200,
            "high": 35.24,
            "low": 35.12,
            "open": 35.13,
            "volume": 15185
        },
        "1742401500": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742401500,
            "high": 35.21,
            "low": 35.17,
            "open": 35.21,
            "volume": 12007
        },
        "1742401800": {
            "close": 35.26,
            "date": "19-03-2025",
            "date_utc": 1742401800,
            "high": 35.29,
            "low": 35.14,
            "open": 35.18,
            "volume": 38669
        },
        "1742402100": {
            "close": 35.21,
            "date": "19-03-2025",
            "date_utc": 1742402100,
            "high": 35.32,
            "low": 35.2,
            "open": 35.28,
            "volume": 52565
        },
        "1742402400": {
            "close": 35.08,
            "date": "19-03-2025",
            "date_utc": 1742402400,
            "high": 35.2,
            "low": 35.07,
            "open": 35.19,
            "volume": 26055
        },
        "1742402700": {
            "close": 35.23,
            "date": "19-03-2025",
            "date_utc": 1742402700,
            "high": 35.23,
            "low": 35.08,
            "open": 35.08,
            "volume": 43286
        },
        "1742403000": {
            "close": 35.22,
            "date": "19-03-2025",
            "date_utc": 1742403000,
            "high": 35.23,
            "low": 35.14,
            "open": 35.22,
            "volume": 20553
        },
        "1742403300": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742403300,
            "high": 35.22,
            "low": 35.13,
            "open": 35.22,
            "volume": 32646
        },
        "1742403600": {
            "close": 35.14,
            "date": "19-03-2025",
            "date_utc": 1742403600,
            "high": 35.2,
            "low": 35.13,
            "open": 35.18,
            "volume": 9781
        },
        "1742403900": {
            "close": 35.1,
            "date": "19-03-2025",
            "date_utc": 1742403900,
            "high": 35.19,
            "low": 35.1,
            "open": 35.16,
            "volume": 17863
        },
        "1742404200": {
            "close": 35.1,
            "date": "19-03-2025",
            "date_utc": 1742404200,
            "high": 35.16,
            "low": 35.09,
            "open": 35.1,
            "volume": 18144
        },
        "1742404500": {
            "close": 35.06,
            "date": "19-03-2025",
            "date_utc": 1742404500,
            "high": 35.11,
            "low": 35.04,
            "open": 35.1,
            "volume": 31426
        },
        "1742404800": {
            "close": 35.06,
            "date": "19-03-2025",
            "date_utc": 1742404800,
            "high": 35.07,
            "low": 35,
            "open": 35.05,
            "volume": 38776
        },
        "1742405100": {
            "close": 35.02,
            "date": "19-03-2025",
            "date_utc": 1742405100,
            "high": 35.05,
            "low": 35,
            "open": 35.05,
            "volume": 30046
        },
        "1742405400": {
            "close": 35.02,
            "date": "19-03-2025",
            "date_utc": 1742405400,
            "high": 35.04,
            "low": 35,
            "open": 35.01,
            "volume": 26861
        },
        "1742405700": {
            "close": 35.1,
            "date": "19-03-2025",
            "date_utc": 1742405700,
            "high": 35.1,
            "low": 35.01,
            "open": 35.02,
            "volume": 12549
        },
        "1742406000": {
            "close": 34.95,
            "date": "19-03-2025",
            "date_utc": 1742406000,
            "high": 35.08,
            "low": 34.93,
            "open": 35.08,
            "volume": 17610
        },
        "1742406300": {
            "close": 34.99,
            "date": "19-03-2025",
            "date_utc": 1742406300,
            "high": 34.99,
            "low": 34.91,
            "open": 34.94,
            "volume": 22976
        },
        "1742406600": {
            "close": 34.95,
            "date": "19-03-2025",
            "date_utc": 1742406600,
            "high": 34.98,
            "low": 34.91,
            "open": 34.98,
            "volume": 10911
        },
        "1742406900": {
            "close": 34.78,
            "date": "19-03-2025",
            "date_utc": 1742406900,
            "high": 34.96,
            "low": 34.77,
            "open": 34.94,
            "volume": 40479
        },
        "1742407200": {
            "close": 35.05,
            "date": "19-03-2025",
            "date_utc": 1742407200,
            "high": 35.06,
            "low": 34.74,
            "open": 34.76,
            "volume": 31917
        },
        "1742407500": {
            "close": 35.19,
            "date": "19-03-2025",
            "date_utc": 1742407500,
            "high": 35.19,
            "low": 34.91,
            "open": 35.01,
            "volume": 53522
        },
        "1742407800": {
            "close": 35.1,
            "date": "19-03-2025",
            "date_utc": 1742407800,
            "high": 35.2,
            "low": 35.08,
            "open": 35.18,
            "volume": 39455
        },
        "1742408100": {
            "close": 35.1,
            "date": "19-03-2025",
            "date_utc": 1742408100,
            "high": 35.19,
            "low": 35.08,
            "open": 35.13,
            "volume": 23440
        },
        "1742408400": {
            "close": 35.09,
            "date": "19-03-2025",
            "date_utc": 1742408400,
            "high": 35.15,
            "low": 35.05,
            "open": 35.11,
            "volume": 28458
        },
        "1742408700": {
            "close": 35.03,
            "date": "19-03-2025",
            "date_utc": 1742408700,
            "high": 35.11,
            "low": 35.01,
            "open": 35.08,
            "volume": 24014
        },
        "1742409000": {
            "close": 35.21,
            "date": "19-03-2025",
            "date_utc": 1742409000,
            "high": 35.27,
            "low": 35.04,
            "open": 35.04,
            "volume": 43090
        },
        "1742409300": {
            "close": 35.19,
            "date": "19-03-2025",
            "date_utc": 1742409300,
            "high": 35.27,
            "low": 35.16,
            "open": 35.21,
            "volume": 44630
        },
        "1742409600": {
            "close": 35.35,
            "date": "19-03-2025",
            "date_utc": 1742409600,
            "high": 35.38,
            "low": 35.16,
            "open": 35.2,
            "volume": 83585
        },
        "1742409900": {
            "close": 35.24,
            "date": "19-03-2025",
            "date_utc": 1742409900,
            "high": 35.38,
            "low": 35.24,
            "open": 35.34,
            "volume": 88078
        },
        "1742410200": {
            "close": 35.41,
            "date": "19-03-2025",
            "date_utc": 1742410200,
            "high": 35.42,
            "low": 35.23,
            "open": 35.24,
            "volume": 58850
        },
        "1742410500": {
            "close": 35.51,
            "date": "19-03-2025",
            "date_utc": 1742410500,
            "high": 35.53,
            "low": 35.39,
            "open": 35.4,
            "volume": 49856
        },
        "1742410800": {
            "close": 35.67,
            "date": "19-03-2025",
            "date_utc": 1742410800,
            "high": 35.67,
            "low": 35.5,
            "open": 35.51,
            "volume": 47292
        },
        "1742411100": {
            "close": 35.74,
            "date": "19-03-2025",
            "date_utc": 1742411100,
            "high": 35.74,
            "low": 35.63,
            "open": 35.65,
            "volume": 37586
        },
        "1742411400": {
            "close": 35.65,
            "date": "19-03-2025",
            "date_utc": 1742411400,
            "high": 35.77,
            "low": 35.63,
            "open": 35.74,
            "volume": 45573
        },
        "1742411700": {
            "close": 35.48,
            "date": "19-03-2025",
            "date_utc": 1742411700,
            "high": 35.65,
            "low": 35.48,
            "open": 35.65,
            "volume": 62844
        },
        "1742412000": {
            "close": 35.37,
            "date": "19-03-2025",
            "date_utc": 1742412000,
            "high": 35.5,
            "low": 35.27,
            "open": 35.5,
            "volume": 44450
        },
        "1742412300": {
            "close": 35.18,
            "date": "19-03-2025",
            "date_utc": 1742412300,
            "high": 35.36,
            "low": 35.13,
            "open": 35.35,
            "volume": 306455
        },
        "1742412600": {
            "close": 35.28,
            "date": "19-03-2025",
            "date_utc": 1742412600,
            "high": 35.3,
            "low": 35.14,
            "open": 35.17,
            "volume": 73715
        },
        "1742412900": {
            "close": 35.33,
            "date": "19-03-2025",
            "date_utc": 1742412900,
            "high": 35.38,
            "low": 35.23,
            "open": 35.31,
            "volume": 45542
        },
        "1742413200": {
            "close": 35.4,
            "date": "19-03-2025",
            "date_utc": 1742413200,
            "high": 35.43,
            "low": 35.33,
            "open": 35.35,
            "volume": 49303
        },
        "1742413500": {
            "close": 35.33,
            "date": "19-03-2025",
            "date_utc": 1742413500,
            "high": 35.41,
            "low": 35.27,
            "open": 35.4,
            "volume": 74670
        },
        "1742413800": {
            "close": 35.26,
            "date": "19-03-2025",
            "date_utc": 1742413800,
            "high": 35.33,
            "low": 35.19,
            "open": 35.32,
            "volume": 98362
        },
        "1742414100": {
            "close": 35.3,
            "date": "19-03-2025",
            "date_utc": 1742414100,
            "high": 35.32,
            "low": 35.2,
            "open": 35.25,
            "volume": 270925
        },
        "1742477400": {
            "close": 34.51,
            "date": "20-03-2025",
            "date_utc": 1742477400,
            "high": 34.71,
            "low": 34.49,
            "open": 34.57,
            "volume": 164391
        },
        "1742477700": {
            "close": 34.61,
            "date": "20-03-2025",
            "date_utc": 1742477700,
            "high": 34.66,
            "low": 34.37,
            "open": 34.51,
            "volume": 74562
        },
        "1742478000": {
            "close": 34.56,
            "date": "20-03-2025",
            "date_utc": 1742478000,
            "high": 34.66,
            "low": 34.47,
            "open": 34.6,
            "volume": 67829
        },
        "1742478300": {
            "close": 34.78,
            "date": "20-03-2025",
            "date_utc": 1742478300,
            "high": 34.8,
            "low": 34.55,
            "open": 34.55,
            "volume": 51062
        },
        "1742478600": {
            "close": 34.62,
            "date": "20-03-2025",
            "date_utc": 1742478600,
            "high": 34.85,
            "low": 34.59,
            "open": 34.8,
            "volume": 77372
        },
        "1742478900": {
            "close": 34.58,
            "date": "20-03-2025",
            "date_utc": 1742478900,
            "high": 34.67,
            "low": 34.56,
            "open": 34.62,
            "volume": 31456
        },
        "1742479200": {
            "close": 34.81,
            "date": "20-03-2025",
            "date_utc": 1742479200,
            "high": 34.86,
            "low": 34.59,
            "open": 34.59,
            "volume": 72197
        },
        "1742479500": {
            "close": 35.03,
            "date": "20-03-2025",
            "date_utc": 1742479500,
            "high": 35.05,
            "low": 34.72,
            "open": 34.81,
            "volume": 86276
        },
        "1742479800": {
            "close": 35.02,
            "date": "20-03-2025",
            "date_utc": 1742479800,
            "high": 35.1,
            "low": 34.93,
            "open": 35.01,
            "volume": 57809
        },
        "1742480100": {
            "close": 35.15,
            "date": "20-03-2025",
            "date_utc": 1742480100,
            "high": 35.18,
            "low": 34.99,
            "open": 35.02,
            "volume": 43600
        },
        "1742480400": {
            "close": 35.15,
            "date": "20-03-2025",
            "date_utc": 1742480400,
            "high": 35.16,
            "low": 35.1,
            "open": 35.15,
            "volume": 31469
        },
        "1742480700": {
            "close": 35.05,
            "date": "20-03-2025",
            "date_utc": 1742480700,
            "high": 35.23,
            "low": 35.03,
            "open": 35.14,
            "volume": 34177
        },
        "1742481000": {
            "close": 34.99,
            "date": "20-03-2025",
            "date_utc": 1742481000,
            "high": 35.08,
            "low": 34.97,
            "open": 35.06,
            "volume": 39019
        },
        "1742481300": {
            "close": 35.09,
            "date": "20-03-2025",
            "date_utc": 1742481300,
            "high": 35.13,
            "low": 34.96,
            "open": 35,
            "volume": 22574
        },
        "1742481600": {
            "close": 35.21,
            "date": "20-03-2025",
            "date_utc": 1742481600,
            "high": 35.25,
            "low": 35.06,
            "open": 35.06,
            "volume": 25001
        },
        "1742481900": {
            "close": 35.21,
            "date": "20-03-2025",
            "date_utc": 1742481900,
            "high": 35.24,
            "low": 35.19,
            "open": 35.21,
            "volume": 18125
        },
        "1742482200": {
            "close": 35.2,
            "date": "20-03-2025",
            "date_utc": 1742482200,
            "high": 35.23,
            "low": 35.12,
            "open": 35.21,
            "volume": 28687
        },
        "1742482500": {
            "close": 35.24,
            "date": "20-03-2025",
            "date_utc": 1742482500,
            "high": 35.27,
            "low": 35.21,
            "open": 35.21,
            "volume": 25987
        },
        "1742482800": {
            "close": 35.21,
            "date": "20-03-2025",
            "date_utc": 1742482800,
            "high": 35.26,
            "low": 35.2,
            "open": 35.24,
            "volume": 16905
        },
        "1742483100": {
            "close": 35.13,
            "date": "20-03-2025",
            "date_utc": 1742483100,
            "high": 35.23,
            "low": 35.13,
            "open": 35.2,
            "volume": 21125
        },
        "1742483400": {
            "close": 35.19,
            "date": "20-03-2025",
            "date_utc": 1742483400,
            "high": 35.21,
            "low": 35.12,
            "open": 35.15,
            "volume": 12914
        },
        "1742483700": {
            "close": 35.13,
            "date": "20-03-2025",
            "date_utc": 1742483700,
            "high": 35.22,
            "low": 35.12,
            "open": 35.13,
            "volume": 48781
        },
        "1742484000": {
            "close": 35.17,
            "date": "20-03-2025",
            "date_utc": 1742484000,
            "high": 35.21,
            "low": 35.07,
            "open": 35.12,
            "volume": 35877
        },
        "1742484300": {
            "close": 35.46,
            "date": "20-03-2025",
            "date_utc": 1742484300,
            "high": 35.47,
            "low": 35.14,
            "open": 35.17,
            "volume": 229072
        },
        "1742484600": {
            "close": 35.24,
            "date": "20-03-2025",
            "date_utc": 1742484600,
            "high": 35.47,
            "low": 35.24,
            "open": 35.47,
            "volume": 58228
        },
        "1742484900": {
            "close": 35.25,
            "date": "20-03-2025",
            "date_utc": 1742484900,
            "high": 35.26,
            "low": 35.2,
            "open": 35.23,
            "volume": 36213
        },
        "1742485200": {
            "close": 35.21,
            "date": "20-03-2025",
            "date_utc": 1742485200,
            "high": 35.26,
            "low": 35.19,
            "open": 35.24,
            "volume": 24037
        },
        "1742485500": {
            "close": 35.23,
            "date": "20-03-2025",
            "date_utc": 1742485500,
            "high": 35.26,
            "low": 35.17,
            "open": 35.2,
            "volume": 19294
        },
        "1742485800": {
            "close": 35.2,
            "date": "20-03-2025",
            "date_utc": 1742485800,
            "high": 35.21,
            "low": 35.18,
            "open": 35.21,
            "volume": 13440
        },
        "1742486100": {
            "close": 35.13,
            "date": "20-03-2025",
            "date_utc": 1742486100,
            "high": 35.19,
            "low": 35.12,
            "open": 35.19,
            "volume": 18287
        },
        "1742486400": {
            "close": 35.15,
            "date": "20-03-2025",
            "date_utc": 1742486400,
            "high": 35.24,
            "low": 35.09,
            "open": 35.12,
            "volume": 29652
        },
        "1742486700": {
            "close": 35.1,
            "date": "20-03-2025",
            "date_utc": 1742486700,
            "high": 35.16,
            "low": 35.07,
            "open": 35.15,
            "volume": 12150
        },
        "1742487000": {
            "close": 35.1,
            "date": "20-03-2025",
            "date_utc": 1742487000,
            "high": 35.11,
            "low": 35.03,
            "open": 35.09,
            "volume": 43599
        },
        "1742487300": {
            "close": 35.05,
            "date": "20-03-2025",
            "date_utc": 1742487300,
            "high": 35.13,
            "low": 35.02,
            "open": 35.1,
            "volume": 20752
        },
        "1742487600": {
            "close": 34.99,
            "date": "20-03-2025",
            "date_utc": 1742487600,
            "high": 35.05,
            "low": 34.98,
            "open": 35.05,
            "volume": 10299
        },
        "1742487900": {
            "close": 34.91,
            "date": "20-03-2025",
            "date_utc": 1742487900,
            "high": 35.03,
            "low": 34.89,
            "open": 34.97,
            "volume": 23977
        },
        "1742488200": {
            "close": 34.91,
            "date": "20-03-2025",
            "date_utc": 1742488200,
            "high": 34.97,
            "low": 34.91,
            "open": 34.94,
            "volume": 19589
        },
        "1742488500": {
            "close": 35.06,
            "date": "20-03-2025",
            "date_utc": 1742488500,
            "high": 35.06,
            "low": 34.89,
            "open": 34.9,
            "volume": 28456
        },
        "1742488800": {
            "close": 35.04,
            "date": "20-03-2025",
            "date_utc": 1742488800,
            "high": 35.06,
            "low": 35.01,
            "open": 35.06,
            "volume": 12322
        },
        "1742489100": {
            "close": 35.01,
            "date": "20-03-2025",
            "date_utc": 1742489100,
            "high": 35.08,
            "low": 35,
            "open": 35.03,
            "volume": 13122
        },
        "1742489400": {
            "close": 35.07,
            "date": "20-03-2025",
            "date_utc": 1742489400,
            "high": 35.07,
            "low": 35.01,
            "open": 35.01,
            "volume": 12605
        },
        "1742489700": {
            "close": 35.04,
            "date": "20-03-2025",
            "date_utc": 1742489700,
            "high": 35.09,
            "low": 35,
            "open": 35.07,
            "volume": 25614
        },
        "1742490000": {
            "close": 35.1,
            "date": "20-03-2025",
            "date_utc": 1742490000,
            "high": 35.1,
            "low": 35.03,
            "open": 35.07,
            "volume": 13124
        },
        "1742490300": {
            "close": 35.17,
            "date": "20-03-2025",
            "date_utc": 1742490300,
            "high": 35.22,
            "low": 35.1,
            "open": 35.11,
            "volume": 25912
        },
        "1742490600": {
            "close": 35.14,
            "date": "20-03-2025",
            "date_utc": 1742490600,
            "high": 35.2,
            "low": 35.12,
            "open": 35.2,
            "volume": 11642
        },
        "1742490900": {
            "close": 35.13,
            "date": "20-03-2025",
            "date_utc": 1742490900,
            "high": 35.15,
            "low": 35.09,
            "open": 35.15,
            "volume": 14949
        },
        "1742491200": {
            "close": 35.05,
            "date": "20-03-2025",
            "date_utc": 1742491200,
            "high": 35.14,
            "low": 35.05,
            "open": 35.13,
            "volume": 13018
        },
        "1742491500": {
            "close": 34.92,
            "date": "20-03-2025",
            "date_utc": 1742491500,
            "high": 35.06,
            "low": 34.92,
            "open": 35.05,
            "volume": 13243
        },
        "1742491800": {
            "close": 35.01,
            "date": "20-03-2025",
            "date_utc": 1742491800,
            "high": 35.04,
            "low": 34.95,
            "open": 34.95,
            "volume": 20334
        },
        "1742492100": {
            "close": 35.06,
            "date": "20-03-2025",
            "date_utc": 1742492100,
            "high": 35.08,
            "low": 34.95,
            "open": 35.02,
            "volume": 18336
        },
        "1742492400": {
            "close": 35.04,
            "date": "20-03-2025",
            "date_utc": 1742492400,
            "high": 35.07,
            "low": 35.03,
            "open": 35.05,
            "volume": 10481
        },
        "1742492700": {
            "close": 35.05,
            "date": "20-03-2025",
            "date_utc": 1742492700,
            "high": 35.11,
            "low": 35.03,
            "open": 35.05,
            "volume": 18270
        },
        "1742493000": {
            "close": 35.06,
            "date": "20-03-2025",
            "date_utc": 1742493000,
            "high": 35.07,
            "low": 35.02,
            "open": 35.04,
            "volume": 11128
        },
        "1742493300": {
            "close": 35.03,
            "date": "20-03-2025",
            "date_utc": 1742493300,
            "high": 35.06,
            "low": 35,
            "open": 35.06,
            "volume": 7851
        },
        "1742493600": {
            "close": 35.04,
            "date": "20-03-2025",
            "date_utc": 1742493600,
            "high": 35.05,
            "low": 35.01,
            "open": 35.01,
            "volume": 22282
        },
        "1742493900": {
            "close": 35.06,
            "date": "20-03-2025",
            "date_utc": 1742493900,
            "high": 35.08,
            "low": 35.01,
            "open": 35.04,
            "volume": 24154
        },
        "1742494200": {
            "close": 35.07,
            "date": "20-03-2025",
            "date_utc": 1742494200,
            "high": 35.11,
            "low": 35.06,
            "open": 35.06,
            "volume": 18913
        },
        "1742494500": {
            "close": 35.08,
            "date": "20-03-2025",
            "date_utc": 1742494500,
            "high": 35.1,
            "low": 35.06,
            "open": 35.08,
            "volume": 16837
        },
        "1742494800": {
            "close": 35,
            "date": "20-03-2025",
            "date_utc": 1742494800,
            "high": 35.07,
            "low": 35,
            "open": 35.07,
            "volume": 16790
        },
        "1742495100": {
            "close": 34.92,
            "date": "20-03-2025",
            "date_utc": 1742495100,
            "high": 35.01,
            "low": 34.92,
            "open": 35.01,
            "volume": 17085
        },
        "1742495400": {
            "close": 34.85,
            "date": "20-03-2025",
            "date_utc": 1742495400,
            "high": 34.9,
            "low": 34.84,
            "open": 34.9,
            "volume": 17744
        },
        "1742495700": {
            "close": 34.91,
            "date": "20-03-2025",
            "date_utc": 1742495700,
            "high": 34.92,
            "low": 34.86,
            "open": 34.86,
            "volume": 14740
        },
        "1742496000": {
            "close": 34.86,
            "date": "20-03-2025",
            "date_utc": 1742496000,
            "high": 34.91,
            "low": 34.85,
            "open": 34.91,
            "volume": 17244
        },
        "1742496300": {
            "close": 34.91,
            "date": "20-03-2025",
            "date_utc": 1742496300,
            "high": 34.91,
            "low": 34.85,
            "open": 34.86,
            "volume": 18231
        },
        "1742496600": {
            "close": 34.96,
            "date": "20-03-2025",
            "date_utc": 1742496600,
            "high": 34.97,
            "low": 34.91,
            "open": 34.91,
            "volume": 18232
        },
        "1742496900": {
            "close": 34.86,
            "date": "20-03-2025",
            "date_utc": 1742496900,
            "high": 34.96,
            "low": 34.85,
            "open": 34.96,
            "volume": 20233
        },
        "1742497200": {
            "close": 34.88,
            "date": "20-03-2025",
            "date_utc": 1742497200,
            "high": 34.95,
            "low": 34.85,
            "open": 34.85,
            "volume": 22263
        },
        "1742497500": {
            "close": 34.92,
            "date": "20-03-2025",
            "date_utc": 1742497500,
            "high": 34.95,
            "low": 34.87,
            "open": 34.89,
            "volume": 17584
        },
        "1742497800": {
            "close": 34.98,
            "date": "20-03-2025",
            "date_utc": 1742497800,
            "high": 34.98,
            "low": 34.9,
            "open": 34.9,
            "volume": 22057
        },
        "1742498100": {
            "close": 35,
            "date": "20-03-2025",
            "date_utc": 1742498100,
            "high": 35.02,
            "low": 34.95,
            "open": 34.97,
            "volume": 22547
        },
        "1742498400": {
            "close": 35.02,
            "date": "20-03-2025",
            "date_utc": 1742498400,
            "high": 35.05,
            "low": 35.01,
            "open": 35.01,
            "volume": 33851
        },
        "1742498700": {
            "close": 34.9,
            "date": "20-03-2025",
            "date_utc": 1742498700,
            "high": 35.03,
            "low": 34.89,
            "open": 35.03,
            "volume": 26978
        },
        "1742499000": {
            "close": 34.99,
            "date": "20-03-2025",
            "date_utc": 1742499000,
            "high": 34.99,
            "low": 34.9,
            "open": 34.9,
            "volume": 28260
        },
        "1742499300": {
            "close": 34.94,
            "date": "20-03-2025",
            "date_utc": 1742499300,
            "high": 35,
            "low": 34.94,
            "open": 34.98,
            "volume": 27884
        },
        "1742499600": {
            "close": 35.03,
            "date": "20-03-2025",
            "date_utc": 1742499600,
            "high": 35.03,
            "low": 34.94,
            "open": 34.95,
            "volume": 28734
        },
        "1742499900": {
            "close": 35.06,
            "date": "20-03-2025",
            "date_utc": 1742499900,
            "high": 35.09,
            "low": 35.02,
            "open": 35.04,
            "volume": 53073
        },
        "1742500200": {
            "close": 35.02,
            "date": "20-03-2025",
            "date_utc": 1742500200,
            "high": 35.05,
            "low": 34.95,
            "open": 35.05,
            "volume": 95782
        },
        "1742500500": {
            "close": 34.84,
            "date": "20-03-2025",
            "date_utc": 1742500500,
            "high": 35.07,
            "low": 34.83,
            "open": 35.02,
            "volume": 277348
        },
        "1742563800": {
            "close": 33.95,
            "date": "21-03-2025",
            "date_utc": 1742563800,
            "high": 34,
            "low": 33.45,
            "open": 33.93,
            "volume": 501303
        },
        "1742564100": {
            "close": 33.56,
            "date": "21-03-2025",
            "date_utc": 1742564100,
            "high": 33.87,
            "low": 33.55,
            "open": 33.87,
            "volume": 71369
        },
        "1742564400": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742564400,
            "high": 33.85,
            "low": 33.56,
            "open": 33.56,
            "volume": 38285
        },
        "1742564700": {
            "close": 33.78,
            "date": "21-03-2025",
            "date_utc": 1742564700,
            "high": 33.87,
            "low": 33.6,
            "open": 33.76,
            "volume": 35991
        },
        "1742565000": {
            "close": 33.69,
            "date": "21-03-2025",
            "date_utc": 1742565000,
            "high": 33.81,
            "low": 33.6,
            "open": 33.76,
            "volume": 44077
        },
        "1742565300": {
            "close": 33.75,
            "date": "21-03-2025",
            "date_utc": 1742565300,
            "high": 33.87,
            "low": 33.62,
            "open": 33.68,
            "volume": 34438
        },
        "1742565600": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742565600,
            "high": 33.74,
            "low": 33.6,
            "open": 33.69,
            "volume": 45198
        },
        "1742565900": {
            "close": 33.74,
            "date": "21-03-2025",
            "date_utc": 1742565900,
            "high": 33.74,
            "low": 33.6,
            "open": 33.71,
            "volume": 74065
        },
        "1742566200": {
            "close": 33.85,
            "date": "21-03-2025",
            "date_utc": 1742566200,
            "high": 33.87,
            "low": 33.67,
            "open": 33.73,
            "volume": 38329
        },
        "1742566500": {
            "close": 33.83,
            "date": "21-03-2025",
            "date_utc": 1742566500,
            "high": 33.85,
            "low": 33.75,
            "open": 33.85,
            "volume": 26037
        },
        "1742566800": {
            "close": 33.88,
            "date": "21-03-2025",
            "date_utc": 1742566800,
            "high": 33.92,
            "low": 33.78,
            "open": 33.85,
            "volume": 24098
        },
        "1742567100": {
            "close": 33.86,
            "date": "21-03-2025",
            "date_utc": 1742567100,
            "high": 33.93,
            "low": 33.84,
            "open": 33.88,
            "volume": 26168
        },
        "1742567400": {
            "close": 33.9,
            "date": "21-03-2025",
            "date_utc": 1742567400,
            "high": 33.92,
            "low": 33.81,
            "open": 33.85,
            "volume": 56704
        },
        "1742567700": {
            "close": 33.75,
            "date": "21-03-2025",
            "date_utc": 1742567700,
            "high": 33.9,
            "low": 33.75,
            "open": 33.9,
            "volume": 30602
        },
        "1742568000": {
            "close": 33.83,
            "date": "21-03-2025",
            "date_utc": 1742568000,
            "high": 33.85,
            "low": 33.74,
            "open": 33.74,
            "volume": 20569
        },
        "1742568300": {
            "close": 33.83,
            "date": "21-03-2025",
            "date_utc": 1742568300,
            "high": 33.87,
            "low": 33.79,
            "open": 33.84,
            "volume": 24340
        },
        "1742568600": {
            "close": 33.84,
            "date": "21-03-2025",
            "date_utc": 1742568600,
            "high": 33.85,
            "low": 33.78,
            "open": 33.84,
            "volume": 37748
        },
        "1742568900": {
            "close": 33.86,
            "date": "21-03-2025",
            "date_utc": 1742568900,
            "high": 33.88,
            "low": 33.71,
            "open": 33.84,
            "volume": 83934
        },
        "1742569200": {
            "close": 33.86,
            "date": "21-03-2025",
            "date_utc": 1742569200,
            "high": 33.93,
            "low": 33.83,
            "open": 33.87,
            "volume": 96459
        },
        "1742569500": {
            "close": 33.78,
            "date": "21-03-2025",
            "date_utc": 1742569500,
            "high": 33.86,
            "low": 33.76,
            "open": 33.86,
            "volume": 26256
        },
        "1742569800": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742569800,
            "high": 33.8,
            "low": 33.69,
            "open": 33.78,
            "volume": 13859
        },
        "1742570100": {
            "close": 33.76,
            "date": "21-03-2025",
            "date_utc": 1742570100,
            "high": 33.79,
            "low": 33.71,
            "open": 33.71,
            "volume": 19008
        },
        "1742570400": {
            "close": 33.77,
            "date": "21-03-2025",
            "date_utc": 1742570400,
            "high": 33.83,
            "low": 33.76,
            "open": 33.77,
            "volume": 24336
        },
        "1742570700": {
            "close": 33.74,
            "date": "21-03-2025",
            "date_utc": 1742570700,
            "high": 33.78,
            "low": 33.74,
            "open": 33.77,
            "volume": 17156
        },
        "1742571000": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742571000,
            "high": 33.75,
            "low": 33.68,
            "open": 33.74,
            "volume": 22192
        },
        "1742571300": {
            "close": 33.68,
            "date": "21-03-2025",
            "date_utc": 1742571300,
            "high": 33.71,
            "low": 33.66,
            "open": 33.7,
            "volume": 13564
        },
        "1742571600": {
            "close": 33.6,
            "date": "21-03-2025",
            "date_utc": 1742571600,
            "high": 33.69,
            "low": 33.6,
            "open": 33.67,
            "volume": 22371
        },
        "1742571900": {
            "close": 33.59,
            "date": "21-03-2025",
            "date_utc": 1742571900,
            "high": 33.65,
            "low": 33.59,
            "open": 33.61,
            "volume": 20092
        },
        "1742572200": {
            "close": 33.51,
            "date": "21-03-2025",
            "date_utc": 1742572200,
            "high": 33.59,
            "low": 33.5,
            "open": 33.59,
            "volume": 31022
        },
        "1742572500": {
            "close": 33.55,
            "date": "21-03-2025",
            "date_utc": 1742572500,
            "high": 33.55,
            "low": 33.51,
            "open": 33.51,
            "volume": 16021
        },
        "1742572800": {
            "close": 33.56,
            "date": "21-03-2025",
            "date_utc": 1742572800,
            "high": 33.67,
            "low": 33.5,
            "open": 33.54,
            "volume": 35025
        },
        "1742573100": {
            "close": 33.6,
            "date": "21-03-2025",
            "date_utc": 1742573100,
            "high": 33.61,
            "low": 33.57,
            "open": 33.57,
            "volume": 11649
        },
        "1742573400": {
            "close": 33.67,
            "date": "21-03-2025",
            "date_utc": 1742573400,
            "high": 33.67,
            "low": 33.59,
            "open": 33.59,
            "volume": 21450
        },
        "1742573700": {
            "close": 33.68,
            "date": "21-03-2025",
            "date_utc": 1742573700,
            "high": 33.69,
            "low": 33.6,
            "open": 33.66,
            "volume": 26892
        },
        "1742574000": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742574000,
            "high": 33.75,
            "low": 33.67,
            "open": 33.67,
            "volume": 21313
        },
        "1742574300": {
            "close": 33.69,
            "date": "21-03-2025",
            "date_utc": 1742574300,
            "high": 33.77,
            "low": 33.68,
            "open": 33.7,
            "volume": 22058
        },
        "1742574600": {
            "close": 33.73,
            "date": "21-03-2025",
            "date_utc": 1742574600,
            "high": 33.74,
            "low": 33.67,
            "open": 33.69,
            "volume": 19205
        },
        "1742574900": {
            "close": 33.76,
            "date": "21-03-2025",
            "date_utc": 1742574900,
            "high": 33.76,
            "low": 33.68,
            "open": 33.73,
            "volume": 15079
        },
        "1742575200": {
            "close": 33.7,
            "date": "21-03-2025",
            "date_utc": 1742575200,
            "high": 33.79,
            "low": 33.7,
            "open": 33.76,
            "volume": 21565
        },
        "1742575500": {
            "close": 33.79,
            "date": "21-03-2025",
            "date_utc": 1742575500,
            "high": 33.8,
            "low": 33.71,
            "open": 33.71,
            "volume": 24450
        },
        "1742575800": {
            "close": 33.84,
            "date": "21-03-2025",
            "date_utc": 1742575800,
            "high": 33.85,
            "low": 33.78,
            "open": 33.78,
            "volume": 14873
        },
        "1742576100": {
            "close": 33.92,
            "date": "21-03-2025",
            "date_utc": 1742576100,
            "high": 33.97,
            "low": 33.83,
            "open": 33.84,
            "volume": 26778
        },
        "1742576400": {
            "close": 33.94,
            "date": "21-03-2025",
            "date_utc": 1742576400,
            "high": 33.95,
            "low": 33.89,
            "open": 33.92,
            "volume": 16506
        },
        "1742576700": {
            "close": 34,
            "date": "21-03-2025",
            "date_utc": 1742576700,
            "high": 34.04,
            "low": 33.94,
            "open": 33.94,
            "volume": 30468
        },
        "1742577000": {
            "close": 33.93,
            "date": "21-03-2025",
            "date_utc": 1742577000,
            "high": 34.01,
            "low": 33.93,
            "open": 34.01,
            "volume": 21080
        },
        "1742577300": {
            "close": 33.93,
            "date": "21-03-2025",
            "date_utc": 1742577300,
            "high": 33.98,
            "low": 33.93,
            "open": 33.93,
            "volume": 22057
        },
        "1742577600": {
            "close": 33.95,
            "date": "21-03-2025",
            "date_utc": 1742577600,
            "high": 33.96,
            "low": 33.9,
            "open": 33.92,
            "volume": 25861
        },
        "1742577900": {
            "close": 33.91,
            "date": "21-03-2025",
            "date_utc": 1742577900,
            "high": 33.98,
            "low": 33.88,
            "open": 33.96,
            "volume": 17088
        },
        "1742578200": {
            "close": 33.87,
            "date": "21-03-2025",
            "date_utc": 1742578200,
            "high": 33.93,
            "low": 33.85,
            "open": 33.9,
            "volume": 18200
        },
        "1742578500": {
            "close": 34.02,
            "date": "21-03-2025",
            "date_utc": 1742578500,
            "high": 34.02,
            "low": 33.89,
            "open": 33.9,
            "volume": 21743
        },
        "1742578800": {
            "close": 34.03,
            "date": "21-03-2025",
            "date_utc": 1742578800,
            "high": 34.06,
            "low": 33.99,
            "open": 34.01,
            "volume": 33974
        },
        "1742579100": {
            "close": 34.05,
            "date": "21-03-2025",
            "date_utc": 1742579100,
            "high": 34.05,
            "low": 33.97,
            "open": 34.01,
            "volume": 19514
        },
        "1742579400": {
            "close": 34.04,
            "date": "21-03-2025",
            "date_utc": 1742579400,
            "high": 34.08,
            "low": 34.01,
            "open": 34.06,
            "volume": 17283
        },
        "1742579700": {
            "close": 33.94,
            "date": "21-03-2025",
            "date_utc": 1742579700,
            "high": 34.05,
            "low": 33.94,
            "open": 34.04,
            "volume": 23689
        },
        "1742580000": {
            "close": 34.01,
            "date": "21-03-2025",
            "date_utc": 1742580000,
            "high": 34.04,
            "low": 33.95,
            "open": 33.95,
            "volume": 30546
        },
        "1742580300": {
            "close": 33.95,
            "date": "21-03-2025",
            "date_utc": 1742580300,
            "high": 34.01,
            "low": 33.94,
            "open": 34.01,
            "volume": 13562
        },
        "1742580600": {
            "close": 33.97,
            "date": "21-03-2025",
            "date_utc": 1742580600,
            "high": 34.01,
            "low": 33.93,
            "open": 33.94,
            "volume": 16856
        },
        "1742580900": {
            "close": 33.97,
            "date": "21-03-2025",
            "date_utc": 1742580900,
            "high": 34,
            "low": 33.95,
            "open": 33.97,
            "volume": 12296
        },
        "1742581200": {
            "close": 33.95,
            "date": "21-03-2025",
            "date_utc": 1742581200,
            "high": 33.99,
            "low": 33.94,
            "open": 33.97,
            "volume": 14378
        },
        "1742581500": {
            "close": 33.94,
            "date": "21-03-2025",
            "date_utc": 1742581500,
            "high": 33.96,
            "low": 33.91,
            "open": 33.95,
            "volume": 14042
        },
        "1742581800": {
            "close": 33.96,
            "date": "21-03-2025",
            "date_utc": 1742581800,
            "high": 33.98,
            "low": 33.94,
            "open": 33.95,
            "volume": 18108
        },
        "1742582100": {
            "close": 34.01,
            "date": "21-03-2025",
            "date_utc": 1742582100,
            "high": 34.02,
            "low": 33.96,
            "open": 33.97,
            "volume": 15019
        },
        "1742582400": {
            "close": 33.99,
            "date": "21-03-2025",
            "date_utc": 1742582400,
            "high": 34.01,
            "low": 33.96,
            "open": 34.01,
            "volume": 14353
        },
        "1742582700": {
            "close": 33.85,
            "date": "21-03-2025",
            "date_utc": 1742582700,
            "high": 33.99,
            "low": 33.85,
            "open": 33.99,
            "volume": 28443
        },
        "1742583000": {
            "close": 33.84,
            "date": "21-03-2025",
            "date_utc": 1742583000,
            "high": 33.86,
            "low": 33.81,
            "open": 33.85,
            "volume": 30975
        },
        "1742583300": {
            "close": 33.84,
            "date": "21-03-2025",
            "date_utc": 1742583300,
            "high": 33.89,
            "low": 33.83,
            "open": 33.84,
            "volume": 17999
        },
        "1742583600": {
            "close": 33.87,
            "date": "21-03-2025",
            "date_utc": 1742583600,
            "high": 33.88,
            "low": 33.83,
            "open": 33.84,
            "volume": 30182
        },
        "1742583900": {
            "close": 33.81,
            "date": "21-03-2025",
            "date_utc": 1742583900,
            "high": 33.9,
            "low": 33.81,
            "open": 33.87,
            "volume": 47733
        },
        "1742584200": {
            "close": 33.7,
            "date": "21-03-2025",
            "date_utc": 1742584200,
            "high": 33.8,
            "low": 33.67,
            "open": 33.8,
            "volume": 37845
        },
        "1742584500": {
            "close": 33.78,
            "date": "21-03-2025",
            "date_utc": 1742584500,
            "high": 33.81,
            "low": 33.69,
            "open": 33.69,
            "volume": 37155
        },
        "1742584800": {
            "close": 33.76,
            "date": "21-03-2025",
            "date_utc": 1742584800,
            "high": 33.78,
            "low": 33.71,
            "open": 33.78,
            "volume": 30628
        },
        "1742585100": {
            "close": 33.7,
            "date": "21-03-2025",
            "date_utc": 1742585100,
            "high": 33.77,
            "low": 33.69,
            "open": 33.76,
            "volume": 42333
        },
        "1742585400": {
            "close": 33.72,
            "date": "21-03-2025",
            "date_utc": 1742585400,
            "high": 33.76,
            "low": 33.7,
            "open": 33.7,
            "volume": 34005
        },
        "1742585700": {
            "close": 33.78,
            "date": "21-03-2025",
            "date_utc": 1742585700,
            "high": 33.84,
            "low": 33.71,
            "open": 33.71,
            "volume": 62174
        },
        "1742586000": {
            "close": 33.76,
            "date": "21-03-2025",
            "date_utc": 1742586000,
            "high": 33.77,
            "low": 33.7,
            "open": 33.77,
            "volume": 39967
        },
        "1742586300": {
            "close": 33.79,
            "date": "21-03-2025",
            "date_utc": 1742586300,
            "high": 33.83,
            "low": 33.76,
            "open": 33.76,
            "volume": 70985
        },
        "1742586600": {
            "close": 33.87,
            "date": "21-03-2025",
            "date_utc": 1742586600,
            "high": 33.92,
            "low": 33.78,
            "open": 33.8,
            "volume": 125707
        },
        "1742586900": {
            "close": 33.91,
            "date": "21-03-2025",
            "date_utc": 1742586900,
            "high": 33.97,
            "low": 33.83,
            "open": 33.88,
            "volume": 449727
        },
        "1742823000": {
            "close": 34.51,
            "date": "24-03-2025",
            "date_utc": 1742823000,
            "high": 34.63,
            "low": 34.41,
            "open": 34.46,
            "volume": 107783
        },
        "1742823300": {
            "close": 34.42,
            "date": "24-03-2025",
            "date_utc": 1742823300,
            "high": 34.52,
            "low": 34.39,
            "open": 34.49,
            "volume": 73245
        },
        "1742823600": {
            "close": 34.35,
            "date": "24-03-2025",
            "date_utc": 1742823600,
            "high": 34.52,
            "low": 34.28,
            "open": 34.42,
            "volume": 104357
        },
        "1742823900": {
            "close": 34.38,
            "date": "24-03-2025",
            "date_utc": 1742823900,
            "high": 34.53,
            "low": 34.25,
            "open": 34.37,
            "volume": 74624
        },
        "1742824200": {
            "close": 34.33,
            "date": "24-03-2025",
            "date_utc": 1742824200,
            "high": 34.4,
            "low": 34.22,
            "open": 34.38,
            "volume": 52805
        },
        "1742824500": {
            "close": 34.16,
            "date": "24-03-2025",
            "date_utc": 1742824500,
            "high": 34.35,
            "low": 34.16,
            "open": 34.33,
            "volume": 56710
        },
        "1742824800": {
            "close": 34.15,
            "date": "24-03-2025",
            "date_utc": 1742824800,
            "high": 34.21,
            "low": 34.1,
            "open": 34.16,
            "volume": 58495
        },
        "1742825100": {
            "close": 34.05,
            "date": "24-03-2025",
            "date_utc": 1742825100,
            "high": 34.16,
            "low": 34.03,
            "open": 34.16,
            "volume": 205603
        },
        "1742825400": {
            "close": 34.28,
            "date": "24-03-2025",
            "date_utc": 1742825400,
            "high": 34.32,
            "low": 34.03,
            "open": 34.05,
            "volume": 96241
        },
        "1742825700": {
            "close": 34.38,
            "date": "24-03-2025",
            "date_utc": 1742825700,
            "high": 34.39,
            "low": 34.28,
            "open": 34.29,
            "volume": 37003
        },
        "1742826000": {
            "close": 34.39,
            "date": "24-03-2025",
            "date_utc": 1742826000,
            "high": 34.42,
            "low": 34.35,
            "open": 34.37,
            "volume": 42339
        },
        "1742826300": {
            "close": 34.51,
            "date": "24-03-2025",
            "date_utc": 1742826300,
            "high": 34.58,
            "low": 34.39,
            "open": 34.39,
            "volume": 42949
        },
        "1742826600": {
            "close": 34.29,
            "date": "24-03-2025",
            "date_utc": 1742826600,
            "high": 34.5,
            "low": 34.27,
            "open": 34.5,
            "volume": 51223
        },
        "1742826900": {
            "close": 34.32,
            "date": "24-03-2025",
            "date_utc": 1742826900,
            "high": 34.38,
            "low": 34.28,
            "open": 34.29,
            "volume": 28183
        },
        "1742827200": {
            "close": 34.37,
            "date": "24-03-2025",
            "date_utc": 1742827200,
            "high": 34.42,
            "low": 34.34,
            "open": 34.34,
            "volume": 28106
        },
        "1742827500": {
            "close": 34.5,
            "date": "24-03-2025",
            "date_utc": 1742827500,
            "high": 34.5,
            "low": 34.35,
            "open": 34.36,
            "volume": 25706
        },
        "1742827800": {
            "close": 34.53,
            "date": "24-03-2025",
            "date_utc": 1742827800,
            "high": 34.54,
            "low": 34.49,
            "open": 34.5,
            "volume": 20310
        },
        "1742828100": {
            "close": 34.44,
            "date": "24-03-2025",
            "date_utc": 1742828100,
            "high": 34.53,
            "low": 34.41,
            "open": 34.53,
            "volume": 21933
        },
        "1742828400": {
            "close": 34.41,
            "date": "24-03-2025",
            "date_utc": 1742828400,
            "high": 34.41,
            "low": 34.32,
            "open": 34.41,
            "volume": 25943
        },
        "1742828700": {
            "close": 34.3,
            "date": "24-03-2025",
            "date_utc": 1742828700,
            "high": 34.41,
            "low": 34.29,
            "open": 34.39,
            "volume": 19766
        },
        "1742829000": {
            "close": 34.24,
            "date": "24-03-2025",
            "date_utc": 1742829000,
            "high": 34.33,
            "low": 34.23,
            "open": 34.3,
            "volume": 34619
        },
        "1742829300": {
            "close": 34.04,
            "date": "24-03-2025",
            "date_utc": 1742829300,
            "high": 34.24,
            "low": 34.04,
            "open": 34.23,
            "volume": 59502
        },
        "1742829600": {
            "close": 33.87,
            "date": "24-03-2025",
            "date_utc": 1742829600,
            "high": 34.05,
            "low": 33.77,
            "open": 34.05,
            "volume": 149083
        },
        "1742829900": {
            "close": 33.87,
            "date": "24-03-2025",
            "date_utc": 1742829900,
            "high": 33.92,
            "low": 33.83,
            "open": 33.88,
            "volume": 62471
        },
        "1742830200": {
            "close": 33.91,
            "date": "24-03-2025",
            "date_utc": 1742830200,
            "high": 33.95,
            "low": 33.88,
            "open": 33.88,
            "volume": 43618
        },
        "1742830500": {
            "close": 33.86,
            "date": "24-03-2025",
            "date_utc": 1742830500,
            "high": 33.94,
            "low": 33.85,
            "open": 33.91,
            "volume": 47289
        },
        "1742830800": {
            "close": 33.82,
            "date": "24-03-2025",
            "date_utc": 1742830800,
            "high": 33.87,
            "low": 33.81,
            "open": 33.86,
            "volume": 39847
        },
        "1742831100": {
            "close": 33.85,
            "date": "24-03-2025",
            "date_utc": 1742831100,
            "high": 33.93,
            "low": 33.78,
            "open": 33.81,
            "volume": 72248
        },
        "1742831400": {
            "close": 33.86,
            "date": "24-03-2025",
            "date_utc": 1742831400,
            "high": 33.89,
            "low": 33.84,
            "open": 33.86,
            "volume": 26495
        },
        "1742831700": {
            "close": 33.95,
            "date": "24-03-2025",
            "date_utc": 1742831700,
            "high": 33.97,
            "low": 33.85,
            "open": 33.86,
            "volume": 25356
        },
        "1742832000": {
            "close": 34.05,
            "date": "24-03-2025",
            "date_utc": 1742832000,
            "high": 34.1,
            "low": 33.95,
            "open": 33.95,
            "volume": 41363
        },
        "1742832300": {
            "close": 34.11,
            "date": "24-03-2025",
            "date_utc": 1742832300,
            "high": 34.12,
            "low": 34.06,
            "open": 34.06,
            "volume": 57051
        },
        "1742832600": {
            "close": 34.07,
            "date": "24-03-2025",
            "date_utc": 1742832600,
            "high": 34.12,
            "low": 34.06,
            "open": 34.12,
            "volume": 16824
        },
        "1742832900": {
            "close": 34.1,
            "date": "24-03-2025",
            "date_utc": 1742832900,
            "high": 34.11,
            "low": 34.04,
            "open": 34.07,
            "volume": 36749
        },
        "1742833200": {
            "close": 34.19,
            "date": "24-03-2025",
            "date_utc": 1742833200,
            "high": 34.19,
            "low": 34.1,
            "open": 34.1,
            "volume": 14294
        },
        "1742833500": {
            "close": 34.09,
            "date": "24-03-2025",
            "date_utc": 1742833500,
            "high": 34.19,
            "low": 34.09,
            "open": 34.17,
            "volume": 34978
        },
        "1742833800": {
            "close": 34.03,
            "date": "24-03-2025",
            "date_utc": 1742833800,
            "high": 34.1,
            "low": 34.03,
            "open": 34.1,
            "volume": 28227
        },
        "1742834100": {
            "close": 34.03,
            "date": "24-03-2025",
            "date_utc": 1742834100,
            "high": 34.08,
            "low": 34.03,
            "open": 34.03,
            "volume": 31047
        },
        "1742834400": {
            "close": 34.03,
            "date": "24-03-2025",
            "date_utc": 1742834400,
            "high": 34.05,
            "low": 33.94,
            "open": 34.01,
            "volume": 39051
        },
        "1742834700": {
            "close": 34.01,
            "date": "24-03-2025",
            "date_utc": 1742834700,
            "high": 34.05,
            "low": 34,
            "open": 34.03,
            "volume": 18913
        },
        "1742835000": {
            "close": 34.04,
            "date": "24-03-2025",
            "date_utc": 1742835000,
            "high": 34.04,
            "low": 33.99,
            "open": 34.02,
            "volume": 18130
        },
        "1742835300": {
            "close": 33.99,
            "date": "24-03-2025",
            "date_utc": 1742835300,
            "high": 34.05,
            "low": 33.96,
            "open": 34.05,
            "volume": 18597
        },
        "1742835600": {
            "close": 33.99,
            "date": "24-03-2025",
            "date_utc": 1742835600,
            "high": 34,
            "low": 33.95,
            "open": 33.98,
            "volume": 16633
        },
        "1742835900": {
            "close": 33.99,
            "date": "24-03-2025",
            "date_utc": 1742835900,
            "high": 34.01,
            "low": 33.98,
            "open": 33.98,
            "volume": 17307
        },
        "1742836200": {
            "close": 33.95,
            "date": "24-03-2025",
            "date_utc": 1742836200,
            "high": 34,
            "low": 33.95,
            "open": 33.99,
            "volume": 18882
        },
        "1742836500": {
            "close": 33.91,
            "date": "24-03-2025",
            "date_utc": 1742836500,
            "high": 33.97,
            "low": 33.91,
            "open": 33.97,
            "volume": 28864
        },
        "1742836800": {
            "close": 33.87,
            "date": "24-03-2025",
            "date_utc": 1742836800,
            "high": 33.94,
            "low": 33.87,
            "open": 33.91,
            "volume": 33407
        },
        "1742837100": {
            "close": 33.88,
            "date": "24-03-2025",
            "date_utc": 1742837100,
            "high": 33.9,
            "low": 33.86,
            "open": 33.88,
            "volume": 28345
        },
        "1742837400": {
            "close": 33.83,
            "date": "24-03-2025",
            "date_utc": 1742837400,
            "high": 33.89,
            "low": 33.83,
            "open": 33.86,
            "volume": 76473
        },
        "1742837700": {
            "close": 33.82,
            "date": "24-03-2025",
            "date_utc": 1742837700,
            "high": 33.86,
            "low": 33.82,
            "open": 33.83,
            "volume": 35929
        },
        "1742838000": {
            "close": 33.83,
            "date": "24-03-2025",
            "date_utc": 1742838000,
            "high": 33.84,
            "low": 33.81,
            "open": 33.83,
            "volume": 21038
        },
        "1742838300": {
            "close": 33.78,
            "date": "24-03-2025",
            "date_utc": 1742838300,
            "high": 33.83,
            "low": 33.75,
            "open": 33.83,
            "volume": 35965
        },
        "1742838600": {
            "close": 33.65,
            "date": "24-03-2025",
            "date_utc": 1742838600,
            "high": 33.73,
            "low": 33.6,
            "open": 33.72,
            "volume": 50272
        },
        "1742838900": {
            "close": 33.63,
            "date": "24-03-2025",
            "date_utc": 1742838900,
            "high": 33.65,
            "low": 33.61,
            "open": 33.64,
            "volume": 31358
        },
        "1742839200": {
            "close": 33.55,
            "date": "24-03-2025",
            "date_utc": 1742839200,
            "high": 33.65,
            "low": 33.52,
            "open": 33.64,
            "volume": 49009
        },
        "1742839500": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742839500,
            "high": 33.61,
            "low": 33.51,
            "open": 33.55,
            "volume": 37280
        },
        "1742839800": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742839800,
            "high": 33.55,
            "low": 33.47,
            "open": 33.52,
            "volume": 44994
        },
        "1742840100": {
            "close": 33.56,
            "date": "24-03-2025",
            "date_utc": 1742840100,
            "high": 33.62,
            "low": 33.5,
            "open": 33.51,
            "volume": 28061
        },
        "1742840400": {
            "close": 33.52,
            "date": "24-03-2025",
            "date_utc": 1742840400,
            "high": 33.59,
            "low": 33.51,
            "open": 33.56,
            "volume": 44595
        },
        "1742840700": {
            "close": 33.43,
            "date": "24-03-2025",
            "date_utc": 1742840700,
            "high": 33.54,
            "low": 33.41,
            "open": 33.52,
            "volume": 35802
        },
        "1742841000": {
            "close": 33.34,
            "date": "24-03-2025",
            "date_utc": 1742841000,
            "high": 33.47,
            "low": 33.31,
            "open": 33.45,
            "volume": 50245
        },
        "1742841300": {
            "close": 33.4,
            "date": "24-03-2025",
            "date_utc": 1742841300,
            "high": 33.42,
            "low": 33.32,
            "open": 33.33,
            "volume": 38004
        },
        "1742841600": {
            "close": 33.49,
            "date": "24-03-2025",
            "date_utc": 1742841600,
            "high": 33.51,
            "low": 33.35,
            "open": 33.39,
            "volume": 174651
        },
        "1742841900": {
            "close": 33.56,
            "date": "24-03-2025",
            "date_utc": 1742841900,
            "high": 33.6,
            "low": 33.48,
            "open": 33.49,
            "volume": 48948
        },
        "1742842200": {
            "close": 33.5,
            "date": "24-03-2025",
            "date_utc": 1742842200,
            "high": 33.6,
            "low": 33.5,
            "open": 33.57,
            "volume": 42027
        },
        "1742842500": {
            "close": 33.52,
            "date": "24-03-2025",
            "date_utc": 1742842500,
            "high": 33.56,
            "low": 33.48,
            "open": 33.52,
            "volume": 31505
        },
        "1742842800": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742842800,
            "high": 33.54,
            "low": 33.48,
            "open": 33.51,
            "volume": 30941
        },
        "1742843100": {
            "close": 33.51,
            "date": "24-03-2025",
            "date_utc": 1742843100,
            "high": 33.55,
            "low": 33.48,
            "open": 33.53,
            "volume": 25306
        },
        "1742843400": {
            "close": 33.47,
            "date": "24-03-2025",
            "date_utc": 1742843400,
            "high": 33.56,
            "low": 33.45,
            "open": 33.5,
            "volume": 55203
        },
        "1742843700": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742843700,
            "high": 33.55,
            "low": 33.47,
            "open": 33.47,
            "volume": 34068
        },
        "1742844000": {
            "close": 33.56,
            "date": "24-03-2025",
            "date_utc": 1742844000,
            "high": 33.58,
            "low": 33.5,
            "open": 33.52,
            "volume": 38292
        },
        "1742844300": {
            "close": 33.46,
            "date": "24-03-2025",
            "date_utc": 1742844300,
            "high": 33.56,
            "low": 33.44,
            "open": 33.56,
            "volume": 32832
        },
        "1742844600": {
            "close": 33.49,
            "date": "24-03-2025",
            "date_utc": 1742844600,
            "high": 33.52,
            "low": 33.45,
            "open": 33.47,
            "volume": 28251
        },
        "1742844900": {
            "close": 33.47,
            "date": "24-03-2025",
            "date_utc": 1742844900,
            "high": 33.54,
            "low": 33.46,
            "open": 33.48,
            "volume": 59106
        },
        "1742845200": {
            "close": 33.47,
            "date": "24-03-2025",
            "date_utc": 1742845200,
            "high": 33.49,
            "low": 33.47,
            "open": 33.47,
            "volume": 49672
        },
        "1742845500": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742845500,
            "high": 33.56,
            "low": 33.47,
            "open": 33.48,
            "volume": 72334
        },
        "1742845800": {
            "close": 33.53,
            "date": "24-03-2025",
            "date_utc": 1742845800,
            "high": 33.54,
            "low": 33.42,
            "open": 33.51,
            "volume": 161599
        },
        "1742846100": {
            "close": 33.46,
            "date": "24-03-2025",
            "date_utc": 1742846100,
            "high": 33.53,
            "low": 33.43,
            "open": 33.53,
            "volume": 367919
        },
        "1742909400": {
            "close": 33.86,
            "date": "25-03-2025",
            "date_utc": 1742909400,
            "high": 34,
            "low": 33.68,
            "open": 33.68,
            "volume": 127447
        },
        "1742909700": {
            "close": 33.96,
            "date": "25-03-2025",
            "date_utc": 1742909700,
            "high": 33.96,
            "low": 33.76,
            "open": 33.84,
            "volume": 42641
        },
        "1742910000": {
            "close": 33.85,
            "date": "25-03-2025",
            "date_utc": 1742910000,
            "high": 34.02,
            "low": 33.85,
            "open": 33.98,
            "volume": 30055
        },
        "1742910300": {
            "close": 33.94,
            "date": "25-03-2025",
            "date_utc": 1742910300,
            "high": 34.16,
            "low": 33.87,
            "open": 33.91,
            "volume": 54804
        },
        "1742910600": {
            "close": 33.96,
            "date": "25-03-2025",
            "date_utc": 1742910600,
            "high": 33.97,
            "low": 33.81,
            "open": 33.94,
            "volume": 50242
        },
        "1742910900": {
            "close": 33.96,
            "date": "25-03-2025",
            "date_utc": 1742910900,
            "high": 33.99,
            "low": 33.94,
            "open": 33.96,
            "volume": 22214
        },
        "1742911200": {
            "close": 33.85,
            "date": "25-03-2025",
            "date_utc": 1742911200,
            "high": 33.95,
            "low": 33.82,
            "open": 33.95,
            "volume": 36328
        },
        "1742911500": {
            "close": 34.01,
            "date": "25-03-2025",
            "date_utc": 1742911500,
            "high": 34.04,
            "low": 33.82,
            "open": 33.83,
            "volume": 35054
        },
        "1742911800": {
            "close": 34.06,
            "date": "25-03-2025",
            "date_utc": 1742911800,
            "high": 34.12,
            "low": 34.01,
            "open": 34.01,
            "volume": 40733
        },
        "1742912100": {
            "close": 34.08,
            "date": "25-03-2025",
            "date_utc": 1742912100,
            "high": 34.08,
            "low": 34,
            "open": 34.06,
            "volume": 21746
        },
        "1742912400": {
            "close": 34.07,
            "date": "25-03-2025",
            "date_utc": 1742912400,
            "high": 34.15,
            "low": 34.04,
            "open": 34.06,
            "volume": 29874
        },
        "1742912700": {
            "close": 34.13,
            "date": "25-03-2025",
            "date_utc": 1742912700,
            "high": 34.15,
            "low": 34.05,
            "open": 34.07,
            "volume": 21532
        },
        "1742913000": {
            "close": 34.14,
            "date": "25-03-2025",
            "date_utc": 1742913000,
            "high": 34.14,
            "low": 34.08,
            "open": 34.12,
            "volume": 20355
        },
        "1742913300": {
            "close": 34.32,
            "date": "25-03-2025",
            "date_utc": 1742913300,
            "high": 34.4,
            "low": 34.15,
            "open": 34.15,
            "volume": 99846
        },
        "1742913600": {
            "close": 34.32,
            "date": "25-03-2025",
            "date_utc": 1742913600,
            "high": 34.37,
            "low": 34.28,
            "open": 34.32,
            "volume": 26202
        },
        "1742913900": {
            "close": 34.37,
            "date": "25-03-2025",
            "date_utc": 1742913900,
            "high": 34.44,
            "low": 34.3,
            "open": 34.31,
            "volume": 45003
        },
        "1742914200": {
            "close": 34.3,
            "date": "25-03-2025",
            "date_utc": 1742914200,
            "high": 34.37,
            "low": 34.25,
            "open": 34.35,
            "volume": 48475
        },
        "1742914500": {
            "close": 34.29,
            "date": "25-03-2025",
            "date_utc": 1742914500,
            "high": 34.33,
            "low": 34.19,
            "open": 34.27,
            "volume": 25732
        },
        "1742914800": {
            "close": 34.31,
            "date": "25-03-2025",
            "date_utc": 1742914800,
            "high": 34.31,
            "low": 34.22,
            "open": 34.28,
            "volume": 24126
        },
        "1742915100": {
            "close": 34.38,
            "date": "25-03-2025",
            "date_utc": 1742915100,
            "high": 34.41,
            "low": 34.29,
            "open": 34.3,
            "volume": 27302
        },
        "1742915400": {
            "close": 34.43,
            "date": "25-03-2025",
            "date_utc": 1742915400,
            "high": 34.45,
            "low": 34.37,
            "open": 34.38,
            "volume": 45812
        },
        "1742915700": {
            "close": 34.32,
            "date": "25-03-2025",
            "date_utc": 1742915700,
            "high": 34.42,
            "low": 34.25,
            "open": 34.41,
            "volume": 30113
        },
        "1742916000": {
            "close": 34.42,
            "date": "25-03-2025",
            "date_utc": 1742916000,
            "high": 34.43,
            "low": 34.31,
            "open": 34.32,
            "volume": 27485
        },
        "1742916300": {
            "close": 34.41,
            "date": "25-03-2025",
            "date_utc": 1742916300,
            "high": 34.45,
            "low": 34.4,
            "open": 34.44,
            "volume": 27532
        },
        "1742916600": {
            "close": 34.44,
            "date": "25-03-2025",
            "date_utc": 1742916600,
            "high": 34.44,
            "low": 34.36,
            "open": 34.42,
            "volume": 13583
        },
        "1742916900": {
            "close": 34.51,
            "date": "25-03-2025",
            "date_utc": 1742916900,
            "high": 34.51,
            "low": 34.39,
            "open": 34.42,
            "volume": 37498
        },
        "1742917200": {
            "close": 34.49,
            "date": "25-03-2025",
            "date_utc": 1742917200,
            "high": 34.53,
            "low": 34.46,
            "open": 34.53,
            "volume": 15835
        },
        "1742917500": {
            "close": 0,
            "date": "25-03-2025",
            "date_utc": 1742917500,
            "high": 0,
            "low": 0,
            "open": 0,
            "volume": 0
        },
        "1742917539": {
            "close": 34.49,
            "date": "25-03-2025",
            "date_utc": 1742917539,
            "high": 34.49,
            "low": 34.49,
            "open": 34.49,
            "volume": 0
        }
    },
    "meta": {
        "fiftyTwoWeekHigh": 47.77,
        "fiftyTwoWeekLow": 27.12,
        "longName": "Alcoa Corporation"
    }
}
    }

}
