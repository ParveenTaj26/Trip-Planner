import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripFormComponent } from "./components/trip-form/trip-form.component";
import { TripCanvasComponent } from "./components/trip-canvas/trip-canvas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TripFormComponent, TripCanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trip-planner';
}
