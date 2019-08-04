import { Product } from './../../../../model/product';
import { products } from 'src/app/data/data-product';
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

  ngOnInit() {
    this.data.getProducts().subscribe(data => {
      this.products = data;
      this.lengthOfProducts = this.products.length;
    });
  }
}
