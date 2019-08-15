import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
