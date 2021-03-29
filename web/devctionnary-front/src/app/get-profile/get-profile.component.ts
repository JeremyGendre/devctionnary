import { DialogConfirmUserDeletionComponent } from './dialog-confirm/dialog-confirm-user-deletion.component';
import { DialogService } from './../services/dialog.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


type userType = "";

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent implements OnInit {
  user: User;
  editAllowed = true;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    // Check route params
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        // @ts-ignore
        this.userService.getUser(params['id']).subscribe((data: {data: {user: userType}}) => {
          this.user = JSON.parse(data.data.user);
          this.editAllowed = false;
        }, (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          } else {
            this.dialogService.openErrorDialog();
          }
        });
      } else {
        // @ts-ignore
        this.userService.getUser(null).subscribe((data: {data: {user: userType}}) => {
          this.user = JSON.parse(data.data.user);
          this.editAllowed = true;
        }, error => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          } else {
            this.dialogService.openErrorDialog();
          }
        });
      }
    })
  }

  confirmDeletion(): void{
    this.dialog.open(DialogConfirmUserDeletionComponent);
  }
}
