import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.scss'
})
export class TripCardComponent {
  @Input() trip!: { start: string; end: string; type: 'continued' | 'disjoint' | 'repeated' };

}
