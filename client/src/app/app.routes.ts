import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        title: 'Portfolio Man'
    },
    {
        path: 'signup',
        component: UserFormComponent,
        data: {login: false},
        title: 'Sign Up'
    },
    {
        path: 'login',
        component: UserFormComponent,
        data: {login: true},
        title: 'Log In'
    },
    {
        path: 'portfolios',
        component: PortfolioListComponent,
        data: {myPortfolios: false},
        title: 'Browse Portfolios'
    },
    {
        path: 'myPortfolios',
        component: PortfolioListComponent,
        data: {myPortfolios: true},
        title: 'My Portfolios'
    },
    {
        path: 'myPortfolios/create',
        component: PortfolioFormComponent,
        title: 'Create Portfolio'
    },
    {
        path: 'portfolios/:id',
        component: PortfolioComponent,
        title: 'Portfolio Details'
    },
    {
        path: 'portfolios/:id/buy',
        component: StockSearchComponent,
        data: {buy: true},
        title: 'Portfolio Details'
    },
    {
        path: 'portfolios/:id/sell',
        data: {buy: false},
        component: StockSearchComponent,
        title: 'Portfolio Details'
    },
    {
        path: 'stock/:ticker',
        component: StockDetailsComponent,
        title: 'Portfolio Details'
    },
];
