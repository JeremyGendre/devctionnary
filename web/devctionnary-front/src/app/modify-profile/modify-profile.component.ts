import { DialogService } from './../services/dialog.service';
import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.scss']
})
export class ModifyProfileComponent implements OnInit {
  isLoading = false;
  user: User;
  isSubmitDisabled = false;
  formError: string = null;

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    biography: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUser(null)
    .subscribe((data: {data: {user: string}}) => {
      const user: User = JSON.parse(data.data.user);
      this.user = user;

      this.profileForm.patchValue({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        biography: user.biography
      });

      this.isLoading = false;
    },(error: HttpErrorResponse) => {
      this.isLoading = false;
      if (error.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.dialogService.openErrorDialog();
      }
    });
  }

  onSubmit(e: Event): void {
    this.formError = null;
    e.preventDefault();
    if (this.isSubmitDisabled === false) {
      this.isLoading = true;
      this.userService.patchMe(this.profileForm.value, this.password.value)
        .subscribe(() => {
          this.isLoading = false;
          this._snackBar.open('Changements enregistrés !', 'Fermer', {
            duration: 1500
          });

        if (this.user.username !== this.username.value) {
          // Redirect on login form
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/profile'])
        }

      }, (error: HttpErrorResponse) => {
        this.isLoading = false;
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.formError = error.error.message;
        }
      });
    }
  }

  // Getters
  get username(): FormControl {
    return this.profileForm.get('username') as FormControl
  }

  get email(): FormControl {
    return this.profileForm.get('email') as FormControl
  }

  get firstName(): FormControl {
    return this.profileForm.get('firstName') as FormControl
  }

  get lastName(): FormControl {
    return this.profileForm.get('lastName') as FormControl
  }

  get biography(): FormControl {
    return this.profileForm.get('biography') as FormControl
  }

  get password(): FormControl {
    return this.profileForm.get('password') as FormControl
  }
}
