import { Component, OnInit } from '@angular/core';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  productList;
  constructor(service:VegetablesService) {
    this.productList = service.getProducts()
  }

  ngOnInit() {
  }

}
