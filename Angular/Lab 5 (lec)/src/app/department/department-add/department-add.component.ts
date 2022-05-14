import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {
  newDepartment = new Department(0, '', '');
  addDepartment() {
    this.departmentService.addDepartment(this.newDepartment);
    this.router.navigateByUrl('/departments/list');
  }
  constructor(
    public departmentService: DepartmentService,
    public router: Router
  ) {}

  ngOnInit(): void {}
}
