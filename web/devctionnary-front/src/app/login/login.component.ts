import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  formError: string = null;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',  [Validators.required, Validators.minLength(4)]),
    password: new FormControl('',  [Validators.required, Validators.minLength(4)]),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log('login component init')
  }

  onLogin(e: Event): void{
    e.preventDefault();
    this.isLoading = true;
    this.formError = null;
    this.loginService
      .login(this.username.value, this.loginForm.get('password').value)
      .subscribe((data: {token:string}) => {
        //token
        localStorage.setItem('token', data.token);

        // Redirect
        if (!localStorage.getItem('token')){
          console.log("erreur token")
        }
        window.location.href='/';

      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.formError = 'Problème rencontré, veuillez vérifier vos identifiants, puis réessayez';
        }
        this.isLoading = false;
      });
  }

  // Getters
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
