import { DataService } from './../services/data.service';
import { Product } from './../model/product';
import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({ name: 'sortByPrice' })
export class Sort implements PipeTransform {
  transform(data: Product[], sortPrice: string) {
    if (sortPrice === 'All') {
      return data;
    } else if (sortPrice === 'Low') {
      return data.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortPrice === 'High') {
      return data.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }
}
