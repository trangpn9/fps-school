import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShortAboutComponent } from './short-about.component';

describe('ShortAboutComponent', () => {
  let component: ShortAboutComponent;
  let fixture: ComponentFixture<ShortAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
