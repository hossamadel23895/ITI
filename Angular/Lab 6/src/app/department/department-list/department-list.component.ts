import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departmentsList: Department[] = [];

  constructor(
    public departmentService: DepartmentService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe((data) => {
      this.departmentsList = data;
    });
  }

  addSectionRender() {
    this.router.navigateByUrl('/departments/add');
  }
}
