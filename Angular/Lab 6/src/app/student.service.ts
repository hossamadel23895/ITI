import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  private students: Student[] = [
    new Student(1, 'Hossam', 26, 1),
    new Student(2, 'Yousef', 15, 2),
    new Student(3, 'Ahmed', 28, 3),
  ];

  getAllStudents() {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(
      new Student(student.id, student.name, student.age, student.deptNo)
    );
  }

  getStudent(id: number) {
    return this.students.find((student) => student.id == id);
  }
}
