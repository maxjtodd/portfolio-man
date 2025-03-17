drop database if exists portfolio_test;
create database portfolio_test;
use portfolio_test;

create table user (
    user_id int primary key auto_increment,
    email varchar(50) not null unique,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    `password` varchar(72) not null
);

create table friend (
    friend_id int primary key auto_increment,
    low_user_id int,
    high_user_id int,
    foreign key (low_user_id) references user(user_id),
    foreign key (high_user_id) references user(user_id)
);

create table portfolio (
    portfolio_id int primary key auto_increment,
    user_id int,
    name varchar(100) not null,
    private boolean not null,
    foreign key (user_id) references user(user_id)
);

create table stock (
    stock_id int primary key auto_increment,
    ticker_symbol varchar(10) unique not null
);

create table holding (
    holding_id int primary key auto_increment,
    portfolio_id int not null,
    stock_id int not null,
    amount decimal not null,
    foreign key (portfolio_id) references portfolio(portfolio_id),
    foreign key (stock_id) references stock(stock_id)
);

delimiter //
create procedure set_known_good_state()
begin

    delete from user;
    delete from friend;
    delete from portfolio;
    delete from stock;
    delete from holding;

    alter table user auto_increment=1;
    alter table friend auto_increment=1;
    alter table portfolio auto_increment=1;
    alter table stock auto_increment=1;
    alter table holding auto_increment=1;


    insert into user (email, first_name, last_name, `password`) values
        ("test1@test.com", "f1", "l1", "password1"),
        ("test2@test.com", "f2", "l2", "password2"),
        ("test3@test.com", "f3", "l3", "password3");

    insert into friend (low_user_id, high_user_id) values
        (1, 2);

    insert into portfolio(user_id, name, private) values
        (1, "Portfolio 1", true),
        (2, "Portfolio 2", true),
        (3, "Portfolio 3", true),
        (4, "Portfolio 4", false);

    insert into stock(ticker_symbol) values
        ("ST1"),
        ("ST2");
    insert into holding(portfolio_id, stock_id, amount) values
        (1, 1, 1),
        (2, 2, 1);

end//
delimiter ;
