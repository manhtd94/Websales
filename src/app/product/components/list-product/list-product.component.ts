import { DataApiService } from './../../../services/data-api.service';
import { CartService } from './../../../services/cart.service';
import { Product } from './../../../model/product';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  filterPrice = 'All';

  idCategory: number;
  listProduct: Product[];
  productsAPI: Product[];

  numberTest: number;

  constructor(private data: DataService, private cart: CartService, private dataAPI: DataApiService) {}

  addToCart(product: Product) {
    const item = new Item(product, 1);
    this.cart.insertToCart(product);
  }

  ngOnInit() {
    this.idCategory = this.data.getValueOfCategory();
    this.dataAPI.getProducts().subscribe(item => this.listProduct = item);
    this.data.productsByCateogory$.subscribe(productsByCateogory => this.listProduct = productsByCateogory);
    // this.dataAPI.getProducts().subscribe(data => this.productsAPI = data);
  }

}
