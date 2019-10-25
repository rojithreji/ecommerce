import { Injectable } from '@angular/core';
import { Product } from './Product';


export class NewArrivalsService {

  constructor() { }
  getArrivals(){
    return [new Product('assets/images/sweetlime.PNG',"Sweet Lime (1Kg)",25,20,20),
            new Product('assets/images/capsicumred.png','Capsicum (1Kg)',20,10,50),
            new Product('assets/images/seeds.png','Black Seeds (200g)',10,5,50),
            new Product('assets/images/ghee.png','Cow Ghee (200g)',25,10,65),
            new Product('assets/images/blackberry.JPG','Organic Blueberries (1Kg)',10,7,30),
            new Product('assets/images/oats.jpg','Oats (500g)',15,10,25),
            new Product('assets/images/sweetlime.PNG',"Sweet Lime (1Kg)",25,20,20),
            new Product('assets/images/capsicumred.png','Capsicum (1Kg)',20,10,50),
            new Product('assets/images/seeds.png','Black Seeds (200g)',10,5,50),
            new Product('assets/images/ghee.png','Cow Ghee (200g)',25,10,65),
            new Product('assets/images/blackberry.JPG','Organic Blueberries (1Kg)',10,7,30),
            new Product('assets/images/oats.jpg','Oats (500g)',15,10,25)]
  }
}
