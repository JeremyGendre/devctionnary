import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.scss']
})
export class GetProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getMe()
      .subscribe((data: {data: any}) => {
        this.user = JSON.parse(data.data);
      }, error => {
        console.error(error)
      });
  }
}
