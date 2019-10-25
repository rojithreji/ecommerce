import { Product } from './Product';
import { Injectable } from '@angular/core';


export class OrganicfruitsService {

  constructor() { }
  getProducts(){
    return [new Product('assets/images/sweetlime.PNG',"Sweet Lime (1Kg)",25,20,20),
            new Product('assets/images/blackberry.JPG','Organic Blueberries (1Kg)',10,7,30),
            new Product('assets/images/green-apple.jpg','Green Apple (1Kg)',10,7,30),
            new Product('assets/images/banana.jpg','Organic Bananas (1Kg)',10,7,30),
    ]
  }
}
