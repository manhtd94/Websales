import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  readonly linkApi = 'http://localhost:8080/api/sales/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.linkApi + 'products');
  }

  getProduct(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(this.linkApi + 'products/' + idProduct);
  }

  createProduct(formProduct: Product) {
    return this.httpClient.post<Product>(this.linkApi + 'products', formProduct);
  }
}
