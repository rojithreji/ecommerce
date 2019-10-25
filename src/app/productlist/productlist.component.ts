import { ProductlistService } from './../productlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList;
  constructor(service:ProductlistService) {
    this.productList = service.getProducts()
  }

  ngOnInit() {
  }
}
