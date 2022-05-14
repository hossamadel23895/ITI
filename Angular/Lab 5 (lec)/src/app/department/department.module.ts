import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'add', component: DepartmentAddComponent },
  { path: 'details/:id', component: DepartmentDetailsComponent },
];

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
  ],
})
export class DepartmentModule {}
