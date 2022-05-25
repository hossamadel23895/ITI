import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeptService } from './dept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab6-3';
  subscriptionObject: Subscription | null = null;
  constructor(public deptService: DeptService) {}

  intervalDataTest() {
    this.deptService.intervalDataSource().subscribe({
      next: (a) => console.log(a),
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }

  subscribeTest() {
    this.subscriptionObject = this.deptService
      .nonStopDataTest()
      .subscribe((args) => console.log(args));
  }

  unSubscribeTest() {
    this.subscriptionObject?.unsubscribe();
  }
}
