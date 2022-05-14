import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  private depts: Department[] = [
    new Department(100, 'OS', 'Alexandria'),
    new Department(200, 'SD', 'Cairo'),
    new Department(300, 'AI', 'Mansoura'),
  ];

  getAllDepartments() {
    return this.depts;
  }

  addDepartment(dept: Department) {
    this.depts.push(new Department(dept._id, dept.name, dept.location));
  }

  getDepartment(id: number) {
    return this.depts.find((dept) => dept._id == id);
  }
}
