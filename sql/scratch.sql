use portfolio;
-- use portfolio_test;

-- call set_known_good_state();

insert into stock(ticker_symbol, company_name) values
    ("AAPL", "Apple"),
    ("MSFT", "Microsoft");


select * from stock;
