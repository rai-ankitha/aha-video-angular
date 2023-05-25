import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderCardComponent } from './image-slider-card.component';

describe('ImageSliderCardComponent', () => {
  let component: ImageSliderCardComponent;
  let fixture: ComponentFixture<ImageSliderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSliderCardComponent]
    });
    fixture = TestBed.createComponent(ImageSliderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
