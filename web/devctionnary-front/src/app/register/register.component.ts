import { UserService } from './../services/user.service';
import { DialogService } from './../services/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitDisabled: boolean = false;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('',  [Validators.required, Validators.minLength(4)]),
    password: new FormControl('',  [Validators.required, Validators.minLength(4)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialogService: DialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onRegister(e) {
    e.preventDefault();
      this.isLoading = true;
      this.authService
        .register(
          this.username.value,
          this.password.value,
          this.firstName.value,
          this.lastName.value,
          this.email.value
        )
        .subscribe((data: any) => {
          if (data.success === true) {
            this.isLoading = false;
            this._snackBar.open('Inscription effectuée !', 'Fermer', {
              duration: 1500
            });

            // Redirect
            this.router.navigate(['/login']);
          }
        }, (error: HttpErrorResponse) => {
          console.log(error.error);
          this.isLoading = false;
          this.dialogService.openErrorDialog();
        })
  }

  // Getters
  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
}
