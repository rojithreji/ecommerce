import { FeaturedItem,FeaturesService } from './../features.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featuredItemList;
  constructor(service:FeaturesService) { 
    this.featuredItemList = service.getFeaturedItems();
    console.log(this.featuredItemList)
  }

  

  ngOnInit() {
  }

}
