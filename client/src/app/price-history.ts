import { PriceHistoryMeta } from "./price-history-meta";
import { PriceHistoryMoment } from "./price-history-moment";

export interface PriceHistory {
    body: { [key: string]: PriceHistoryMoment },
    meta: PriceHistoryMeta,
}
