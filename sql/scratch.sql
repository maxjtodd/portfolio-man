-- use portfolio;
use portfolio_test;

-- call set_known_good_state();

SELECT h.holding_id, h.portfolio_id, h.amount,
    s.stock_id, s.ticker_symbol, s.company_name
FROM holding AS h
JOIN stock AS s ON s.stock_id = h.stock_id;
