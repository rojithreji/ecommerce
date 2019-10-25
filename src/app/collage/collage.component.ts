import { Component, OnInit } from '@angular/core';
import { CollageService } from '../collage.service';

@Component({
  selector: 'collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent implements OnInit {

  catOne;catTwo;catThree;catFour;tempList;
  constructor(service:CollageService) {
    this.tempList = service.getCollageItems();
    console.log(this.tempList)
    this.catOne = this.tempList[0]
    this.catTwo = this.tempList[1]
    this.catThree = this.tempList[2]
    this.catFour = this.tempList[3]
  }

  ngOnInit() {
  }

}
