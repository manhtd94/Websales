import { DataApiService } from './../../../services/data-api.service';
import { HttpClient } from '@angular/common/http';
import { products } from 'src/app/data/data-product';
import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  product: Product;
  listProduct = products;
  id: number;
  productAPI: Product;


  constructor(private route: ActivatedRoute, private dataAPI: DataApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });

    // for (const prod of this.listProduct) {
    //   if (prod.id === this.id) {
    //     this.product = prod;
    //   }
    // }

    this.dataAPI.getProduct(this.id).subscribe(data => this.productAPI = data);
  }
}
