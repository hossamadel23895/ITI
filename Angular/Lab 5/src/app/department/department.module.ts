import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'add', component: DepartmentAddComponent },
  { path: 'edit/:id', component: DepartmentEditComponent },
  { path: 'delete/:id', component: DepartmentDeleteComponent },
];

@NgModule({
  declarations: [DepartmentListComponent, DepartmentAddComponent, DepartmentEditComponent, DepartmentDeleteComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [DepartmentListComponent, DepartmentAddComponent],
})
export class DepartmentModule {}
