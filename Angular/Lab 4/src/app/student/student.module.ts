import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentListComponent, StudentAddComponent],
  imports: [CommonModule, FormsModule],
  exports: [StudentListComponent, StudentAddComponent],
})
export class StudentModule {}
