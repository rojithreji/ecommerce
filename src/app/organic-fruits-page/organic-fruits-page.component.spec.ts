import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFruitsPageComponent } from './organic-fruits-page.component';

describe('OrganicFruitsPageComponent', () => {
  let component: OrganicFruitsPageComponent;
  let fixture: ComponentFixture<OrganicFruitsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicFruitsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicFruitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
