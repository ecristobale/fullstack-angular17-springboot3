import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'catalog', component: CatalogComponent }
];
