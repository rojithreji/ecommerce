import { SpicesService } from './../spices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {

  productList;
  constructor(service:SpicesService) {
    this.productList = service.getProducts()
  }

  ngOnInit() {
  }

}
