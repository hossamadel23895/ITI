import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {
  constructor(public studentService: StudentService) {}
  ngOnInit(): void {}

  newStudent = new Student(0, '', 0, 0);

  // Action Div Data
  actionHeader = '';

  inputDivIsActive: boolean = false;
  addDivIsActive: boolean = false;

  // "Action Div" render functions
  addSectionRender() {
    this.actionHeader = 'Add Student';
    this.resetInputFields();
    this.showAddDiv();
  }

  // Confirm Buttons functionality (CRUD functions)
  addStudent() {
    this.studentService.addStudent(this.newStudent);
    this.resetInputFields();
    this.hideActionDiv();
  }

  // Helper functions.
  createNewStudent(student: Student) {
    return new Student(student.id, student.name, student.age, student.deptNo);
  }

  resetInputFields() {
    this.newStudent.id = 0;
    this.newStudent.name = '';
    this.newStudent.age = 0;
    this.newStudent.deptNo = 0;
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
