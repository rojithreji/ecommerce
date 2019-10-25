import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicesPageComponent } from './spices-page.component';

describe('SpicesPageComponent', () => {
  let component: SpicesPageComponent;
  let fixture: ComponentFixture<SpicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
