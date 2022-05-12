import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DepartmentListComponent, DepartmentAddComponent],
  imports: [CommonModule, FormsModule],
  exports: [DepartmentListComponent, DepartmentAddComponent],
})
export class DepartmentModule {}
