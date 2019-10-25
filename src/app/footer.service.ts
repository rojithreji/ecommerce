import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterItem{
  itemName:string;
  itemUrl:string;

  constructor(name:string,url:string){
    this.itemName = name;
    this.itemUrl = url;
  }
}
export class FooterSection{
  sectionName:string;
  item:FooterItem[];

  constructor(name:string,itm:FooterItem[]){
    this.sectionName = name;
    this.item = itm;
  }
}
export class FooterService {
  
  constructor() { }
  getCardList(){
    return 'assets/images/cards.png'
  }
  getFooterItems(){
    return[
      new FooterSection('About',[new FooterItem('Contact Us',''),new FooterItem('About Us',''),new FooterItem('Careers','')]),
      new FooterSection('Help',[new FooterItem('Payments',''),new FooterItem('Shipping',''),new FooterItem('Cancellation & Returns',''),new FooterItem('F.A.Q','')]),
      new FooterSection('Policy',[new FooterItem('Return Policy',''),new FooterItem('Terms of Use',''),new FooterItem('Security',''),new FooterItem('Privacy','')]),
      new FooterSection('Contact',[new FooterItem('Phone:231123324','tel:231123324'),new FooterItem('Email:support@company.com','mailto:support@company.com')])
    ]
  }
  getFooterImages(){
    return[
      'assets/images/logo.svg','https://facebook.com','https://instagram.com','https://twitter.com'
    ]
  }
}
