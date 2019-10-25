import { Injectable } from '@angular/core';

export class Product {
  productName: string;
  rating:string;
  numberOfRatings:number;
  maxPrice: number;
  quantity: number;
  sellers:string[]
  price: number;
  offer: number;
  imageUrl: string;
  description:string;
  assurance:string;
  constructor(img: string, name: string, mprice: number, rprice: number, off: number,rat?:string,numberofrat?:number,qty?:number,sold?:string[],descript?:string,assure?:string) {
    this.imageUrl = img;
    this.productName = name;
    this.maxPrice = mprice;
    this.price = rprice;
    this.offer = off;
    this.rating = rat;
    this.numberOfRatings = numberofrat;
    this.quantity = qty;
    this.sellers =sold;
    this.description =descript;
    this.assurance = assure;
  }
}
