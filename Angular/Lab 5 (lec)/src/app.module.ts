import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './app/department/department.module';
import { HomeComponent } from './app/home/home.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { AboutComponent } from './app/about/about.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { CoreModule } from './app/core/core.module';
import { LoginComponent } from './app/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './app/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DepartmentModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
