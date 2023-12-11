import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '', component: LandingPageComponent
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').
            then((load) => load.ProductsComponent) //For lazy loading the product component
    },
    { path: "**", redirectTo: '' }
];
