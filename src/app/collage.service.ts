import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollageItem{
  categoryName:string;
  categoryImageUrl:string;

  constructor(name:string,url:string){
    this.categoryName = name;
    this.categoryImageUrl = url;
  }
}
export class CollageService {

  constructor() { }
  getCollageItems(){
    return[
      new CollageItem('Oats','assets/images/oatsimage.svg'),
      new CollageItem('Vegetables','assets/images/vegimages.svg'),
      new CollageItem('Fruits','assets/images/fruitsimages.svg'),
      new CollageItem('Seeds','assets/images/seedsimages.svg')
    ]
  }
}
