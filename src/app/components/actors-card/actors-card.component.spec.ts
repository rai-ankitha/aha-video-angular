import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsCardComponent } from './actors-card.component';

describe('ActorsCardComponent', () => {
  let component: ActorsCardComponent;
  let fixture: ComponentFixture<ActorsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsCardComponent]
    });
    fixture = TestBed.createComponent(ActorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
