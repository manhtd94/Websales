import { NgModule } from '@angular/core';
import { ProductManagementPageComponent } from './../admin/product/components/product-management-page/product-management-page.component';
import { AdminPageComponent } from './../admin/admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';


const routesAdminConfig: Routes = [
  // { path: 'admin', component: AdminPageComponent,
  // children: [
  //   { path: 'list-product', component: ProductManagementPageComponent},
  // ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(routesAdminConfig),
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesAdminConfig { }
