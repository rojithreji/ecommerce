import { Injectable } from '@angular/core';


export class NavbarItem{
  iconContent;
  iconLink;

  constructor(content:string,link:string){
    this.iconContent = content;
    this.iconLink = link;
  }
}
export class NavbarService {

  cartValue = 0;
  notificationValue = 0;
  location = 'Location';

  notificationIcon = new NavbarItem(`<button class="btn btn-xs btn-link">
                                      <i class="fa fa-bell"></i>
                                     </button>
                                     <span class="badge badge-notify">`+ this.notificationValue +  `</span>`,'#');

  cartIcon = new NavbarItem(`<button class="btn btn-xs btn-link">
                              <i class="fa fa-shopping-cart"></i>
                             </button>
                             <span class="badge badge-notify">`+ this.cartValue + `</span>`,'cart');

  locationIcon = new NavbarItem(`<i class="fa fa-map-marker"></i> ` + this.location,'#');   
  
  login = new NavbarItem('Login','login');
  constructor() { }

  getNavbarItems(){
    return [this.locationIcon,this.login,this.cartIcon,this.notificationIcon];
  }
  getCompanyLogo(){
    return 'assets/images/logo.svg'
  }
}
