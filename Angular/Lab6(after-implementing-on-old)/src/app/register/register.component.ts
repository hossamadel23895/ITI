import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user: User = new User(0, '', '');

  showForm(t:any) {
    console.log(t);
  }

  add(){
    console.log(this.user);
    
  }
}
