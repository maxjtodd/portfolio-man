import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        title: 'Portfolio Man'
    },
    {
        path: 'signup',
        component: UserFormComponent,
        title: 'Sign Up'
    }
];
