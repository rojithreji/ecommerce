import { ExoticService } from './../exotic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exotic',
  templateUrl: './exotic.component.html',
  styleUrls: ['./exotic.component.css']
})
export class ExoticComponent implements OnInit {

  productList;
  constructor(service:ExoticService) {
    this.productList = service.getProducts()
  }

  ngOnInit() {
  }

}
