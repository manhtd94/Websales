import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { products } from '../data/data-product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrProduct = products;
  newArrProduct: Product[] = [];
  valueOfCategory: number;


  productsByCateogory: BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);
  productsByCateogory$: Observable<Array<Product>> = this.productsByCateogory.asObservable();

  numberTest: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  idCateFromSearch$: Observable<number> = this.numberTest.asObservable();

  constructor() {}

  setProductsByCateogory(productsByCateogory: Product[]) {
    this.productsByCateogory.next(productsByCateogory);
  }

  setNumberTest(numberTest: number) {
    this.numberTest.next(numberTest);
  }


  getValueOfCategory() {
    return this.valueOfCategory;
  }

  setValueOfCategory(valueOfCategory: number) {
    this.valueOfCategory = valueOfCategory;
  }

  getListProduct() {
      return this.arrProduct;
  }

  setListProduct(arrProduct: Product[])  {
    this.arrProduct = arrProduct;
  }

  // filterByCategory(numb: number) {
  //   if (numb === 0) {
  //     return this.arrProduct;
  //   } else {
  //     for (const prodcut of this.arrProduct) {
  //       if (prodcut.category === numb) {
  //         this.newArrProduct.push(prodcut);
  //         return this.newArrProduct;
  //       }
  //     }
  //   }
  // }
}
