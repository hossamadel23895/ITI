import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css'],
})
export class DepartmentDeleteComponent implements OnInit {
  constructor(
    public ac: ActivatedRoute,
    public departmentService: DepartmentService,
    public router: Router
  ) {}

  department: Department | undefined = new Department(0, '', '');

  ngOnInit(): void {
    this.department = this.departmentService.getDepartment(
      this.ac.snapshot.params['id']
    );
  }

  deleteDepartmentConfirm(departmentId: number) {
    this.departmentService.deleteDepartment(departmentId);
    this.resetInputFields();
    this.router.navigateByUrl('/departments');
  }

  resetInputFields() {
    this.department!.id = 0;
    this.department!.name = '';
    this.department!.location = '';
  }
}
