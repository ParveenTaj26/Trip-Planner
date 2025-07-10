import { Component } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from "../trip-card/trip-card.component";

@Component({
  selector: 'app-trip-canvas',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-canvas.component.html',
  styleUrl: './trip-canvas.component.scss'
})
export class TripCanvasComponent {
 start = '';
  end = '';
  tripType: 'continued' | 'disjoint' | 'repeated' = 'continued';
  tripHistory: any[] = [];


  constructor(private tripService: TripService) {}

ngOnInit() {
  this.tripService.tripData$.subscribe((data: any) => {
    if (data) {
      this.start = data.start;
      this.end = data.end;
      this.tripType = data.tripType;
    }
  });

  this.tripService.tripHistory$.subscribe(history => {
    this.tripHistory = history;
  });
}

}
