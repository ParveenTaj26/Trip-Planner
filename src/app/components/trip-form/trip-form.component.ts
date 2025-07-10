import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-form.component.html',
  styleUrl: './trip-form.component.scss'
})
export class TripFormComponent {
start = '';
end = '';

 constructor(private tripService: TripService) {}

  onSubmit() {
    this.tripService.updateTrip(this.start, this.end);
  }
}
