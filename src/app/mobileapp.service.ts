import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileappService {

  mobileImageUrl;
  appStoreImageUrl;
  playStoreImageUrl;
  constructor() { }

  getAllUrl(){
    this.mobileImageUrl = 'assets/images/iphone.png'
    this.appStoreImageUrl = 'assets/images/appstore.png'
    this.playStoreImageUrl = 'assets/images/gplay.png'
    return [this.mobileImageUrl,this.appStoreImageUrl,this.playStoreImageUrl]
  }

}
