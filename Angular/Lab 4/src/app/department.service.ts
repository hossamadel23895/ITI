import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  private departments: Department[] = [
    new Department(100, 'OS', 'Alexandria'),
    new Department(200, 'SD', 'Cairo'),
    new Department(100, 'AI', 'Mansoura'),
  ];

  getAllDepartments() {
    return this.departments;
  }

  addDepartment(department: Department) {
    this.departments.push(
      new Department(department.id, department.name, department.location)
    );
  }

  getDepartment(id: number) {
    return this.departments.find((department) => department.id == id);
  }
}
