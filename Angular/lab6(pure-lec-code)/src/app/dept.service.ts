import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  constructor() {}


  nonStopDataTest() {
    return interval(1000);
  }

  intervalDataSource() {
    return new Observable<number>((a) => {
      setTimeout(() => {
        a.next(200);
      }, 1000);

      setTimeout(() => {
        a.next(800);
      }, 3000);

      setTimeout(() => {
        a.error('an error has occurred at data source');
      }, 4500);

      setTimeout(() => {
        a.next(1200);
      }, 6000);
    }).pipe(
      map((a) => a * 2)
    );
  }
}
