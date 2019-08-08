import { Product } from './../../../../model/product';
import { DataApiService } from './../../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management-list',
  templateUrl: './product-management-list.component.html',
  styleUrls: ['./product-management-list.component.css']
})
export class ProductManagementListComponent implements OnInit {
  products: Product[];
  lengthOfProducts: number;

  constructor(private data: DataApiService) {}

  refreshPage() {
    this.data.getProducts().subscribe(data => {
      this.products = data;
      this.lengthOfProducts = this.products.length;
    });
  }

  ngOnInit() {
    this.refreshPage();
  }

  deleteProduct(idProduct: number) {
    this.data.deleteProduct(idProduct).subscribe(data => {
      this.refreshPage();
    });
    // this.refreshPage();
  }
}
