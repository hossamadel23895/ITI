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

  getDepartment(id: number) {
    return this.departments.find((department) => department.id == id);
  }

  addDepartment(department: Department) {
    this.departments.push(this.createNewDepartment(department));
  }

  editDepartment(departmentId: number, department: Department) {
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    this.departments[departmentIndex] = this.createNewDepartment(department);
  }

  deleteDepartment(departmentId: number) {
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    this.departments.splice(departmentIndex, 1);
  }

  createNewDepartment(department: Department) {
    return new Department(department.id, department.name, department.location);
  }
}
