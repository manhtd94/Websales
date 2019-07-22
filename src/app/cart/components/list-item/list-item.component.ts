import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cart: Map<number, Item> = this.cartService.getCartItem();
  totalPrice = this.cartService.totalPrice();

  removeItem(idProduct: number) {
    this.cartService.removeToCart(idProduct);
    this.totalPrice = this.cartService.totalPrice();
  }

  plusQuantity(idProduct: number) {
    this.cartService.plusQuantity(idProduct);
    this.totalPrice = this.cartService.totalPrice();
  }

  minusQuantity(idProduct: number) {
    this.cartService.minusQuantity(idProduct);
    this.totalPrice = this.cartService.totalPrice();
  }

  ngOnInit() {}
}
