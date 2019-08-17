import { Category } from './../../../../model/category';
import { CateDataService } from './../../../../services/cate-data.service';
import { DataApiService } from './../../../../services/data-api.service';
import { Product } from './../../../../model/product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-management-create',
  templateUrl: './product-management-create.component.html',
  styleUrls: ['./product-management-create.component.css']
})
export class ProductManagementCreateComponent implements OnInit {
  newProduct: Product;
  categories: Category[] = [];

  constructor(
    private data: DataApiService,
    private dataCate: CateDataService,
    private router: Router
  ) {
    this.newProduct = new Product();
    this.newProduct.category = new Category();
  }

  ngOnInit() {
    this.dataCate.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  createProduct(product: Product) {
    // get category from select tag
    for (const cat of this.categories) {
      if (cat.id === Number(this.newProduct.category.id)) {
        this.newProduct.category = cat;
      }
    }

    if (product.id === 0) {
      this.data.createProduct(product).subscribe(res => {
        console.log(res);
        this.router.navigate(['/admin/list-product']);
      });
    }
  }
}
