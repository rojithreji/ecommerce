import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryItems;
  constructor(service:CategoryService) { 
    this.categoryItems = service.getCategory();
  }
  ngOnInit() {
  }

}
