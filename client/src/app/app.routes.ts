import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

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
        path: 'myPortfolios',
        component: PortfolioListComponent,
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
    }
];
