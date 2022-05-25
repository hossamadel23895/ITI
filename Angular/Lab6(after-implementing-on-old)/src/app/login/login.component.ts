import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  username = '';
  login() {
    localStorage.setItem('username', this.username);
    this.router.navigateByUrl('/contact-us');
  }
}
