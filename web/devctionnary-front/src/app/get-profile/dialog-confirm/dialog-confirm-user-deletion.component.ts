import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from './../../services/dialog.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'dialog-confirm-user-deletion',
  templateUrl: 'dialog-confirm-user-deletion.html',
})
export class DialogConfirmUserDeletionComponent {
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  deleteAccount() {
    this.isLoading = true;
    this.userService.deleteMe()
      .subscribe(() => {
        this.router.navigate(['login']);
        this.isLoading = false;
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.dialogService.openErrorDialog();
        }
      })
  }
}