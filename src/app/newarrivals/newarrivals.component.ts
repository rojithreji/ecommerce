import { NewArrivalsService } from './../newarrivals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-arrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  productList;
  constructor(service:NewArrivalsService) {
    this.productList = service.getArrivals()
  }

  ngOnInit() {
  }
}
