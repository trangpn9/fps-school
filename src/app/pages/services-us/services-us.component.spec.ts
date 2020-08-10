import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesUsComponent } from './services-us.component';

describe('ServicesUsComponent', () => {
  let component: ServicesUsComponent;
  let fixture: ComponentFixture<ServicesUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
