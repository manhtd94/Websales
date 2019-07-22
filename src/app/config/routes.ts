import { CartPageComponent } from './../cart/components/cart-page/cart-page.component';
import { HomePageComponent } from './../home/components/home-page/home-page.component';
import { DetailPageComponent } from './../product/components/detail-page/detail-page.component';
import { ProductPageComponent } from './../product/components/product-page/product-page.component';
import { Routes } from '@angular/router';

export const routesConfig: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: '', component: HomePageComponent},
  { path: 'cart', component: CartPageComponent}
];
