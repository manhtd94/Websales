import { Sort } from './pipe/sort-by-price.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SearchProductComponent } from './product/components/search-product/search-product.component';
import { ListProductComponent } from './product/components/list-product/list-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPageComponent } from './product/components/product-page/product-page.component';
import { DetailPageComponent } from './product/components/detail-page/detail-page.component';
import { from } from 'rxjs';
import { routesConfig } from './config/routes';
import { ContentCategoryComponent } from './home/components/content-category/content-category.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { ContentServiceComponent } from './home/components/content-service/content-service.component';
import { ContentAboutusComponent } from './home/components/content-aboutus/content-aboutus.component';
import { ContentContactComponent } from './home/components/content-contact/content-contact.component';
import { ListItemComponent } from './cart/components/list-item/list-item.component';
import { CartPageComponent } from './cart/components/cart-page/cart-page.component';
import { ComponentsComponent } from './admin/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    SearchProductComponent,
    ListProductComponent,
    FooterComponent,
    ProductPageComponent,
    DetailPageComponent,
    Sort,
    ContentCategoryComponent,
    HomePageComponent,
    ContentServiceComponent,
    ContentAboutusComponent,
    ContentContactComponent,
    ListItemComponent,
    CartPageComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
