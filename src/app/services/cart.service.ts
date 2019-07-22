import { Product } from "./../model/product";
import { Item } from "./../model/item";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartItem: Map<number, Item>;

  constructor() {
    this.cartItem = new Map<number, Item>();
  }

  getCartItem() {
    return this.cartItem;
  }

  setCartItem(cartItem: Map<number, Item>) {
    return (this.cartItem = cartItem);
  }

  insertToCart(product: Product) {
    let haveItem: boolean;
    let oldQuantity: number;
    let item: Item;

    haveItem = this.cartItem.has(product.id);

    if (haveItem) {
      item = this.cartItem.get(product.id);
      oldQuantity = item.quantity;
      item.quantity = oldQuantity + 1;
      this.cartItem.set(item.product.id, item);
    } else {
      item = new Item(product, 1);
      this.cartItem.set(item.product.id, item);
    }
  }

  removeToCart(productId: number) {
    this.cartItem.delete(productId);
  }

  totalPrice() {
    let toltal = 0;
    if (this.cartItem.size > 0) {
      for (const [key, value] of this.cartItem) {
        toltal = toltal + value.product.price * value.quantity;
      }
      return toltal;
    }
    return 0;
  }

  plusQuantity(idProduct: number) {
    let haveItem: boolean;
    let item: Item;

    haveItem = this.cartItem.has(idProduct);
    if (haveItem) {
      item = this.cartItem.get(idProduct);
      item.quantity += 1;
    }
  }

  minusQuantity(idProduct: number) {
    let haveItem: boolean;
    let item: Item;

    haveItem = this.cartItem.has(idProduct);
    if (haveItem) {
      item = this.cartItem.get(idProduct);
      item.quantity -= 1;
      if (item.quantity < 0) {
        this.removeToCart(idProduct);
      }
    }
  }
}
