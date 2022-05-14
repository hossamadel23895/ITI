import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  constructor(
    public ac: ActivatedRoute,
    public departmentService: DepartmentService
  ) {}
  id = 0;
  department: Department | undefined = new Department(0, '', '');
  ngOnInit(): void {
    this.department = this.departmentService.getDepartment(
      this.ac.snapshot.params['id']
    );
    this.id = this.ac.snapshot.params['id'];
  }
}
