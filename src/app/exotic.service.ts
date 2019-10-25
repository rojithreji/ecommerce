import { Product } from './Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExoticService {

  constructor() { }
  getProducts(){
    return [
            new Product('assets/images/ghee.png','Cow Ghee (200g)',25,10,65),
    ] 
  }
}
