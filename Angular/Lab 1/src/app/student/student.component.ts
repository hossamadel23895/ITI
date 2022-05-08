import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `<h1 style="color:red">Inside Student Component</h1>`,
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
