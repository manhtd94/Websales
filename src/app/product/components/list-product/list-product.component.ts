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

  numberTest: number;

  constructor(private data: DataService, private cart: CartService) {}

  addToCart(product: Product) {
    const item = new Item(product, 1);
    this.cart.insertToCart(product);
  }

  ngOnInit() {
    this.idCategory = this.data.getValueOfCategory();
    // this.listProduct = this.data.getListProduct(this.idCategory);
    // this.data.idCateFromSearch$.subscribe(numberTest => this.numberTest = numberTest);
    this.data.productsByCateogory$.subscribe(productsByCateogory => this.listProduct = productsByCateogory);

    // console.log('in list ' + this.numberTest);
    // console.log(this.listProduct);
  }

}
