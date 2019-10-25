import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticPageComponent } from './exotic-page.component';

describe('ExoticPageComponent', () => {
  let component: ExoticPageComponent;
  let fixture: ComponentFixture<ExoticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
