import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeButtonComponent } from './orange-button.component';

describe('OrangeButtonComponent', () => {
  let component: OrangeButtonComponent;
  let fixture: ComponentFixture<OrangeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrangeButtonComponent]
    });
    fixture = TestBed.createComponent(OrangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
