import { Category } from './../../../../model/category';
import { CateDataService } from './../../../../services/cate-data.service';
import { DataApiService } from './../../../../services/data-api.service';
import { Product } from './../../../../model/product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-management-create',
  templateUrl: './product-management-create.component.html',
  styleUrls: ['./product-management-create.component.css']
})
export class ProductManagementCreateComponent implements OnInit {

  newProduct: Product;
  categories: Category[] = [];

  constructor(private data: DataApiService, private dataCate: CateDataService) {
    this.newProduct = new Product();
    this.newProduct.category = new Category();
  }

  ngOnInit() {
    this.dataCate.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  createProduct(product: Product) {
    for (const cat of this.categories) {
        // tslint:disable-next-line: triple-equals
        if (cat.id == this.newProduct.category.id) {
          this.newProduct.category = cat;
          console.log(cat);
        }
    }

    console.log(this.newProduct.category.id);
    console.log(this.newProduct.category.name);
    // if (product.id == null) {
    //   this.data.createProduct(product).subscribe(res => {
    //     console.log(res);
    //   });
    // }
  }

}
