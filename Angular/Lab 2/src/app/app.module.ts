import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    StudentModule,
    DepartmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
