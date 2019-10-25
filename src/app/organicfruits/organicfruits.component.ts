import { OrganicfruitsService } from './../organicfruits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organicfruits',
  templateUrl: './organicfruits.component.html',
  styleUrls: ['./organicfruits.component.css']
})
export class OrganicfruitsComponent implements OnInit {
  productList;
  constructor(service:OrganicfruitsService) {
    this.productList = service.getProducts()
  }

  ngOnInit() {
  }
}
