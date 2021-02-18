import { Snippet } from './../models/snippet';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    username: 'Lorem',
    firstName: 'fsfs',
    lastName: 'sdgsg',
    biography: 'dsqdqsd',
    email: 'qfqfq',
    id: '1',
    password: 'fsfsd',
    updatedAt: new Date(),
    createdAt: new Date()
  }

  constructor() {
  }

  ngOnInit(): void {
    // TODO Get user on API
  }

}
