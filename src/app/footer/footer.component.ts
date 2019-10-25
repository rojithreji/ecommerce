import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tempList;
  cardList;
  facebookUrl;instagramUrl;twitterUrl;LogoUrl;socialList;
  constructor(service:FooterService) { 
    this.tempList = service.getFooterItems();
    this.socialList = service.getFooterImages();
    this.cardList = service.getCardList();
    this.LogoUrl = this.socialList[0];
    this.facebookUrl = this.socialList[1];
    this.instagramUrl = this.socialList[2];
    this.twitterUrl = this.socialList[3];

  }

  ngOnInit() {
  }

}
