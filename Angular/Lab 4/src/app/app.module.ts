import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DepartmentModule, StudentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
