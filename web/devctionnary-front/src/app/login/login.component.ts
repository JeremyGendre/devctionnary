import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({​​
    username: new FormControl('',  [Validators.required, Validators.minLength(4)]),
    password: new FormControl('',  [Validators.required, Validators.minLength(4)]),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(e) {
    e.preventDefault();
    this.loginService
      .login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe((data: {token:string}) => {
        //token
        localStorage.setItem('token', data.token);

        // Redirect
        this.router.navigate(['']);
      },error => {
        console.error(error);
      });
  }
}
