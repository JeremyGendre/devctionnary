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
  isLoaded: boolean = false;
  user: User;
  isSubmitDisabled: boolean = false;

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    biography: new FormControl('')
  });

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
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

      this.isLoaded = true;
    },(error: HttpErrorResponse) => {
      if (error.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.dialogService.openErrorDialog();
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isSubmitDisabled === false) {
      this.isLoaded = false;
      this.userService.patchMe(this.profileForm.value)
        .subscribe((data: {data: any}) => {
          this.isLoaded = true;
          this._snackBar.open('Changements enregistrés !', 'Fermer', {
            duration: 1500
          });

        if (this.user.username !== this.username.value) {
          // Redirect on login form
          this.router.navigate(['/login']);
        }

      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.dialogService.openErrorDialog();
        }
      });
    }
  }

  onUsernameChange() {
    this.isSubmitDisabled = true;
    if (this.username.value !== '') {
      this.userService.getUsernameAvailability(this.username.value)
      .subscribe((data: {data: {available: boolean}}) => {
        if (data.data.available === false) {
          this.username.setErrors({
            'available': false
          });
          this.isSubmitDisabled = false;
        }
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.dialogService.openErrorDialog();
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
}
