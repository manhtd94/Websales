import { Product } from './../../../model/product';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/data/data-category';
import { products } from 'src/app/data/data-product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  listCategory = categories;

  arrProduct = products;
  productsByCateogory: Product[] = [];
  idCategory = 0;
  // this.filterByCate.setValueOfCategory(this.idCategory);

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.arrProduct = products;
    // console.log(this.arrProduct);
    this.data.setProductsByCateogory(this.arrProduct);
  }

  changeProduts() {
    this.data.setNumberTest(this.idCategory);
    //    this.arrProduct = this.data.filterByCategory(this.idCategory);
    // tslint:disable-next-line: triple-equals
    if (this.idCategory == 0) {
      this.data.setProductsByCateogory(this.arrProduct);
      console.log(this.arrProduct);
    } else {
      this.productsByCateogory = [];
      for (const product of this.arrProduct) {
        // tslint:disable-next-line: triple-equals
        if (product.category.id == this.idCategory) {
          this.productsByCateogory.push(product);
        }
      }
      this.data.setProductsByCateogory(this.productsByCateogory);
    }
  }
}
