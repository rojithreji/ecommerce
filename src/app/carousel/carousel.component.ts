import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  fullImageList;
  displayImage:string;
  thisImage:string;
  imageNumber=0;
  images = [  
    { img: "../assets/images/slide1.png" },  
    { img: "../assets/images/slide2.png" },  
    { img: "../assets/images/slide3.png" },  
  ];  
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };  

  constructor(service:CarouselService) {

  }
  
   
  nextImage(){
    if(this.fullImageList[this.imageNumber + 1]){
      this.thisImage = this.fullImageList[this.imageNumber + 1];
      this.imageNumber++;
    }
    else{
      this.imageNumber=0;
      this.thisImage = this.fullImageList[this.imageNumber];
    }
  }

  previousImage(){
    if(this.fullImageList[this.imageNumber - 1]){
      this.thisImage = this.fullImageList[this.imageNumber - 1];
      this.imageNumber--;
    }
    else{
      this.imageNumber=this.fullImageList.length-1;
      this.thisImage = this.fullImageList[this.imageNumber];
    }
  }
  ngOnInit() {
  }

}
