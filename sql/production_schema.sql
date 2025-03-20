drop database if exists portfolio;
create database portfolio;
use portfolio;

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
