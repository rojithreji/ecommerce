import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicfruitsComponent } from './organicfruits.component';

describe('OrganicfruitsComponent', () => {
  let component: OrganicfruitsComponent;
  let fixture: ComponentFixture<OrganicfruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicfruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicfruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
