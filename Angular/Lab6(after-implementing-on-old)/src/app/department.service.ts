import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(public httpClient: HttpClient) {}
  departmentsUrl: string = 'http://localhost:8080/departments/';
  getAllDepartments() {
    return this.httpClient.get<Department[]>(this.departmentsUrl);
  }

  getDepartment(id: number) {
    return this.httpClient.get<Department>(this.departmentsUrl+id)
  }
  
  addDepartment(dept: Department) {
    return this.httpClient.post<Department>(this.departmentsUrl, dept);
  }

}
