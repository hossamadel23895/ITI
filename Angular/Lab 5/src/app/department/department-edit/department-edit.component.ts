import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
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

  editDepartmentConfirm(departmentId: number) {
    this.departmentService.editDepartment(departmentId, this.department!);
    this.resetInputFields();
    this.router.navigateByUrl('/departments');
  }

  resetInputFields() {
    this.department!.id = 0;
    this.department!.name = '';
    this.department!.location = '';
  }
}
