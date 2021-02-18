import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent implements OnInit {
  user: User;
  editAllowed: boolean = true;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check route params
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.userService.getUser(params['id'])
        .subscribe((data: {data: {user: any}}) => {
          this.user = JSON.parse(data.data.user);
          this.editAllowed = false;
        }, error => {
          console.error(error)
        });
      } else {
        this.userService.getUser(null)
        .subscribe((data: {data: {user: any}}) => {
          this.user = JSON.parse(data.data.user);
          this.editAllowed = true;
        }, error => {
          console.error(error)
        });
      }
    })
  }
}
