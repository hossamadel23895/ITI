import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  // Student Table Data
  students: Student[] = [
    new Student(1, 'Hossam', 26, 1),
    new Student(2, 'Yousef', 15, 2),
    new Student(3, 'Ahmed', 28, 3),
  ];
  student = new Student(0, '', 0, 0);

  // Action Div Data
  actionHeader = '';

  inputDivIsActive: boolean = false;
  addDivIsActive: boolean = false;
  editDivIsActive: boolean = false;
  deleteDivIsActive: boolean = false;

  // "Action Div" render functions
  addSectionRender() {
    this.actionHeader = 'Add Student';
    this.resetInputFields();
    this.showAddDiv();
  }

  editSectionRender(studentId: number) {
    this.actionHeader = 'Update Student';
    this.showEditDiv();
    let studentIndex = this.students.findIndex((e) => e.id == studentId);
    this.student = this.createNewStudent(this.students[studentIndex]);
  }

  deleteSectionRender(studentId: number) {
    this.actionHeader = 'Delete Student';
    this.showDeleteDiv();
    let studentIndex = this.students.findIndex((e) => e.id == studentId);
    this.student = this.createNewStudent(this.students[studentIndex]);
  }

  // Confirm Buttons functionality (CRUD functions)
  addStudent() {
    this.students.push(this.createNewStudent(this.student));
    this.resetInputFields();
    this.hideActionDiv();
  }

  editStudent(studentId: number) {
    let studentIndex = this.students.findIndex((e) => e.id == studentId);
    this.students[studentIndex] = this.createNewStudent(this.student);
    this.resetInputFields();
    this.hideActionDiv();
  }

  deleteStudent(studentId: number) {
    let studentIndex = this.students.findIndex((e) => e.id == studentId);
    console.log(studentId);
    this.students.splice(studentIndex,1);
    this.resetInputFields();
    this.hideActionDiv();
  }

  // Helper functions.
  createNewStudent(student: Student) {
    return new Student(student.id, student.name, student.age, student.deptNo);
  }

  resetInputFields() {
    this.student.id = 0;
    this.student.name = '';
    this.student.age = 0;
    this.student.deptNo = 0;
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
