import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { AuthorizedGuard } from './app/authorized.guard';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { RegisterComponent } from './app/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [AuthorizedGuard],
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  {
    path: 'departments',
    loadChildren: () =>
      import('./app/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
