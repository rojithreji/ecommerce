
import { NavbarService } from '../navbar.service';
import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ])]
   
})
export class NavbarComponent implements OnInit {

  companyLogo;
  navbarItems;
  constructor(service:NavbarService,@Inject(DOCUMENT) document) {
    this.navbarItems = service.getNavbarItems();
    this.companyLogo = service.getCompanyLogo();
  }
  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset >0) {
       let element = document.getElementById('navbar');
       element.style.position = 'fixed'
     } else {
      let element = document.getElementById('navbar');
        element.style.position = 'relative'
     }
  }

}
