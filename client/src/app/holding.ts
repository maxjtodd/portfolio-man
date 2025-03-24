import { Stock } from "./stock"

export interface Holding {
    holdingId: number,
    portfolioId: number,
    stock: Stock,
    amount: number
}
