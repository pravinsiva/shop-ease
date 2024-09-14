import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // Default routing component
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/products/products.component').then(
        (load) => load.ProductsComponent
      ), //For lazy loading the product component
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
