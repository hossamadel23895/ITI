import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
})
export class RateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  rating: number = 5;
  cWidth = 0;
  ngOnChanges() {
    this.cWidth = this.rating * 15;
  }
}
