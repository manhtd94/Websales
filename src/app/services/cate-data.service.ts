import { Category } from './../model/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateDataService {

  constructor(private http: HttpClient) { }

  cateAPI = 'http://localhost:8080/api/sales/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.cateAPI);
  }

  getCategory(idCat: number): Observable<Category> {
    return this.http.get<Category>(this.cateAPI + '/' + idCat);
  }
}
