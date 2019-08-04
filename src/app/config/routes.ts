// tslint:disable-next-line: max-line-length
import { ProductManagementCreateComponent } from '../admin/product/components/product-management-create/product-management-create.component';
import { AdminPageComponent } from '../admin/admin-page/admin-page.component';
import { CartPageComponent } from './../cart/components/cart-page/cart-page.component';
import { HomePageComponent } from './../home/components/home-page/home-page.component';
import { DetailPageComponent } from './../product/components/detail-page/detail-page.component';
import { ProductPageComponent } from './../product/components/product-page/product-page.component';
import { Routes } from '@angular/router';

export const routesConfig: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: '', component: HomePageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'create-product', component: ProductManagementCreateComponent}
];
