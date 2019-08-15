import { Category } from './../../model/category';
import { categories } from '../../data/data-category';
import { Component, OnInit } from '@angular/core';
import { CateDataService } from 'src/app/services/cate-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listCategory: Category[];

  constructor(private cateService: CateDataService) { }

  ngOnInit() {
    this.cateService.getCategories().subscribe(data => {
      this.listCategory = data;
    });
  }

}
