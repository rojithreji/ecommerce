import { Injectable } from '@angular/core';


export class FeaturedItem{
  text:string;
  src:string;

  constructor(textVal:string,srcVal:string){
    this.text = textVal;
    this.src = srcVal;
  }
}
export class FeaturesService {

  constructor() { }
  getFeaturedItems(){
    return[
      new FeaturedItem('Amazing Offers','assets/images/discount.svg'),
      new FeaturedItem('Pure and Organic Food','assets/images/sprout.svg'),
      new FeaturedItem('100% Quality Assurance','assets/images/hundred.svg'),
      new FeaturedItem('24x7 Customer Support','assets/images/customer-service.svg')
    ]
  }
}
