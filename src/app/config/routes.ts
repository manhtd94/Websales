import { ProductManagementPageComponent } from './../admin/product/components/product-management-page/product-management-page.component';
import { ContactPageComponent } from './../contact/contact-page/contact-page.component';
import { ProductManagementEditComponent } from './../admin/product/components/product-management-edit/product-management-edit.component';
// tslint:disable-next-line: max-line-length
import { ProductManagementCreateComponent } from '../admin/product/components/product-management-create/product-management-create.component';
import { AdminPageComponent } from '../admin/admin-page/admin-page.component';
import { CartPageComponent } from './../cart/components/cart-page/cart-page.component';
import { HomePageComponent } from './../home/components/home-page/home-page.component';
import { DetailPageComponent } from './../product/components/detail-page/detail-page.component';
import { ProductPageComponent } from './../product/components/product-page/product-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../404/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';

const routesConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'products', component: ProductPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: 'admin/create-product', component: ProductManagementCreateComponent},
  { path: 'admin/list-product', component: ProductManagementPageComponent},
  { path: 'admin/edit-product/:id', component: ProductManagementEditComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: '**', component: PagenotfoundComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routesConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesConfig { }



