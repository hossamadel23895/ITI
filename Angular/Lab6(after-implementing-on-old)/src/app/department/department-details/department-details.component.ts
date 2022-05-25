import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit, OnDestroy {
  constructor(
    public ac: ActivatedRoute,
    public departmentService: DepartmentService
  ) {}
  id = 0;
  subscriptionObject: Subscription | null = null;
  department: Department | undefined = new Department(0, '', '');
  ngOnInit(): void {
    this.subscriptionObject = this.ac.params.subscribe((params) => {
      this.departmentService
        .getDepartment(params['id'])
        .subscribe((department) => (this.department = department));
    });
  }
  ngOnDestroy(): void {
    this.subscriptionObject?.unsubscribe();
  }
}
