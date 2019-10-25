import { Product } from './Product';
import { Injectable } from '@angular/core';


export class VegetablesService {

  constructor() { }
  getProducts(){
    return [
            new Product('assets/images/capsicumred.png','Capsicum (1Kg)',20,10,50),
            new Product('assets/images/ghee.png','Cow Ghee (200g)',25,10,65),
          ]
  }
}
