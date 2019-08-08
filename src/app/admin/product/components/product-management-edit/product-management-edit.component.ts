import { Category } from './../../../../model/category';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CateDataService } from './../../../../services/cate-data.service';
import { DataApiService } from './../../../../services/data-api.service';
import { Product } from './../../../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management-edit',
  templateUrl: './product-management-edit.component.html',
  styleUrls: ['./product-management-edit.component.css']
})
export class ProductManagementEditComponent implements OnInit {
  productEdit: Product;
  categories: Category[] = [];

  constructor(
    private data: DataApiService,
    private dataCate: CateDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productEdit = new Product();

    this.dataCate.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.activatedRoute.paramMap.subscribe((pram: ParamMap) => {
      this.productEdit.id = Number(pram.get('id'));
    });

    this.data
      .getProduct(this.productEdit.id)
      .subscribe(data => (this.productEdit = data));
  }

  editProduct() {
    for (const cat of this.categories) {
      if (cat.id === Number(this.productEdit.category.id)) {
        this.productEdit.category = cat;
      }
    }

    if (this.productEdit.id != null) {
      this.data.editProduct(this.productEdit).subscribe(data => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
