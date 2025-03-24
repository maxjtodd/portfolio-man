import { StockSearch } from "./stock-search";
export interface StockDetailsData {
    stockSearchData: StockSearch,
    portfolioToActUpon: number,
    action: boolean | null
}
