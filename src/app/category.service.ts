import { Injectable } from '@angular/core';


export class CategoryItem{
  categoryName : string;
  categoryLink : string;
  categoryImage: string;

  constructor(name:string,link:string,image:string){
    this.categoryName = name;
    this.categoryLink = link;
    this.categoryImage = image;
  }
}
export class CategoryService {

  c1 = new CategoryItem('Organic Fruits','organic-fruits','assets/images/fruits.svg');
  c2 = new CategoryItem('Vegetables','vegetables','assets/images/vegetables.svg');
  c3 = new CategoryItem('Exotic','exotic','assets/images/exotic.svg');
  c4 = new CategoryItem('Groceries','groceries','assets/images/grocery.svg');
  c5 = new CategoryItem('Spices','spices','assets/images/spices.svg');
  c6 = new CategoryItem('Seeds & Oats','seeds-oats','assets/images/oat.svg');

  getCategory(){
    return [this.c1,this.c2,this.c3,this.c4,this.c5,this.c6];
  }

  constructor() { }

  
}
