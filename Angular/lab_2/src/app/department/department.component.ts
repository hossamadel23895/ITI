import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  // Department Table Data
  departments: Department[] = [
    new Department(1, 'OS', 'Alexandria'),
    new Department(2, 'Mobile', 'Cairo'),
    new Department(3, 'Java', 'Mansoura'),
  ];
  department = new Department(0, '', '');

  // Action Div Data
  actionHeader = '';

  inputDivIsActive: boolean = false;
  addDivIsActive: boolean = false;
  editDivIsActive: boolean = false;
  deleteDivIsActive: boolean = false;

  // "Action Div" render functions
  addSectionRender() {
    this.actionHeader = 'Add Department';
    this.resetInputFields();
    this.showAddDiv();
  }

  editSectionRender(departmentId: number) {
    this.actionHeader = 'Update Department';
    this.showEditDiv();
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    this.department = this.createNewDepartment(
      this.departments[departmentIndex]
    );
  }

  deleteSectionRender(departmentId: number) {
    this.actionHeader = 'Delete Department';
    this.showDeleteDiv();
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    this.department = this.createNewDepartment(
      this.departments[departmentIndex]
    );
  }

  // Confirm Buttons functionality (CRUD functions)
  addDepartment() {
    this.departments.push(this.createNewDepartment(this.department));
    this.resetInputFields();
    this.hideActionDiv();
  }

  editDepartment(departmentId: number) {
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    this.departments[departmentIndex] = this.createNewDepartment(
      this.department
    );
    this.resetInputFields();
    this.hideActionDiv();
  }

  deleteDepartment(departmentId: number) {
    let departmentIndex = this.departments.findIndex(
      (e) => e.id == departmentId
    );
    console.log(departmentId);
    this.departments.splice(departmentIndex, 1);
    this.resetInputFields();
    this.hideActionDiv();
  }

  // Helper functions.
  createNewDepartment(department: Department) {
    return new Department(department.id, department.name, department.location);
  }

  resetInputFields() {
    this.department.id = 0;
    this.department.name = '';
    this.department.location = '';
  }

  hideActionDiv() {
    this.actionHeader = '';
    this.inputDivIsActive = false;
    this.addDivIsActive = false;
    this.editDivIsActive = false;
    this.deleteDivIsActive = false;
  }

  showAddDiv() {
    this.inputDivIsActive = true;
    this.addDivIsActive = true;
    this.editDivIsActive = false;
    this.deleteDivIsActive = false;
  }

  showEditDiv() {
    this.inputDivIsActive = true;
    this.addDivIsActive = false;
    this.editDivIsActive = true;
    this.deleteDivIsActive = false;
  }

  showDeleteDiv() {
    this.inputDivIsActive = false;
    this.addDivIsActive = false;
    this.editDivIsActive = false;
    this.deleteDivIsActive = true;
  }
}
