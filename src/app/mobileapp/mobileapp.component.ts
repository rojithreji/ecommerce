import { MobileappService } from './../mobileapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  mobileImage;
  appStore;
  playStore;
  tempList;
  constructor(service:MobileappService) {
    this.tempList = service.getAllUrl()
    this.mobileImage = this.tempList[0];
    this.appStore = this.tempList[1];
    this.playStore = this.tempList[2];
  }
  ngOnInit() {
  }

}
