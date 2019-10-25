import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesPageComponent } from './vegetables-page.component';

describe('VegetablesPageComponent', () => {
  let component: VegetablesPageComponent;
  let fixture: ComponentFixture<VegetablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
