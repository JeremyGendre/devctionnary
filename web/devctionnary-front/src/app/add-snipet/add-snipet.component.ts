import { Component, Input, OnInit } from '@angular/core';
import { Snippet } from '../models/snippet';
import { User } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-snipet',
  templateUrl: './add-snipet.component.html',
  styleUrls: ['./add-snipet.component.scss']
})
export class AddSnipetComponent implements OnInit {

  addSnipetForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addSnipetForm.value);
  }

  user: User = {​​
    id: '1',
    username: 'test',
    email: '',
    roles: ['fsfs'],
    biography: 'dsqdqsd',
    firstName: 'qfqfq',
    lastName: 'qfqfq',
    password: 'test',
    createdAt: new Date(),
    updatedAt: new Date()
  }​​
  snipet: Snippet = {
    id: 1,
    title: 'UnSnipet',
    content: "<h1>COUCOU JE SUIS LE CODE</h1>",
    createdAt: new Date(),
    updatedAt: new Date(),
    description: "une description",
    author: this.user
  };

  constructor() { }

  ngOnInit(): void {
  }

  addSnipet(){
    console.log("test");
  }

}