import { categories } from '../../data/data-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listCategory = categories;

  constructor() { }

  ngOnInit() {
  }

}
