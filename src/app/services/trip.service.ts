import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private currentTrip = new BehaviorSubject<{ start: string; end: string } | null>(null);
  tripData$ = this.currentTrip.asObservable();
  private tripHistory: { start: string; end: string; type: 'continued' | 'disjoint' | 'repeated' }[] = [];
  tripHistory$ = new BehaviorSubject(this.tripHistory);


  private lastTrip: { start: string; end: string } | null = null;

  getTripType(start: string, end: string): 'continued' | 'disjoint' | 'repeated' {
    if (!this.lastTrip) return 'continued';
    if (this.lastTrip.start === start && this.lastTrip.end === end) return 'repeated';
    if (this.lastTrip.end === start) return 'continued';
    return 'disjoint';
  }

updateTrip(start: string, end: string) {
  const type = this.getTripType(start, end);
  const newTrip = { start, end, type };
  this.currentTrip.next(newTrip); // ✅
  this.tripHistory.push(newTrip);
  this.tripHistory$.next([...this.tripHistory]); // emit copy to trigger update
  this.lastTrip = { start, end };
}

}

