import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offerList;
  constructor(service:OffersService) {
    this.offerList = service.getOffers()
  }

  ngOnInit() {
  }

}
