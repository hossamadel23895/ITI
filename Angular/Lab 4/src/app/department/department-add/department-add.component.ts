import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {
  constructor(public departmentService: DepartmentService) {}
  ngOnInit(): void {}

  newDepartment = new Department(0, '', '');

  // Action Div Data
  actionHeader = '';

  inputDivIsActive: boolean = false;
  addDivIsActive: boolean = false;

  // "Action Div" render functions
  addSectionRender() {
    this.actionHeader = 'Add Department';
    this.resetInputFields();
    this.showAddDiv();
  }

  // Confirm Buttons functionality (CRUD functions)
  addDepartment() {
    this.departmentService.addDepartment(this.newDepartment);
    this.resetInputFields();
    this.hideActionDiv();
  }

  // Helper functions.
  createNewDepartment(department: Department) {
    return new Department(department.id, department.name, department.location);
  }

  resetInputFields() {
    this.newDepartment.id = 0;
    this.newDepartment.name = '';
    this.newDepartment.location = '';
  }

  hideActionDiv() {
    this.actionHeader = '';
    this.inputDivIsActive = false;
    this.addDivIsActive = false;
  }

  showAddDiv() {
    this.inputDivIsActive = true;
    this.addDivIsActive = true;
  }

  showEditDiv() {
    this.inputDivIsActive = true;
    this.addDivIsActive = false;
  }
}
