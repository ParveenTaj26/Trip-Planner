import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCanvasComponent } from './trip-canvas.component';

describe('TripCanvasComponent', () => {
  let component: TripCanvasComponent;
  let fixture: ComponentFixture<TripCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
