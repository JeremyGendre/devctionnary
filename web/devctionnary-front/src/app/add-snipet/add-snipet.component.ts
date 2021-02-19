import { Component, Input, OnInit } from '@angular/core';
import { SnippetService } from './../services/snippet.service';
import { Snippet } from '../models/snippet';
import { User } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-snipet',
  templateUrl: './add-snipet.component.html',
  styleUrls: ['./add-snipet.component.scss']
})
export class AddSnipetComponent implements OnInit {

  baseHeaders = new HttpHeaders();

  constructor(private snippetService: SnippetService, private http: HttpClient) {
      this.baseHeaders = this.baseHeaders.set('Content-Type', 'application/json; charset=utf-8');
      this.baseHeaders = this.baseHeaders.set('Authorization', `Bearer ${​​localStorage.getItem('token')}​​`);
   }

  addSnipetForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl('')
  });
  onSubmit() {
    console.log(this.addSnippet());
    console.warn(this.addSnipetForm.value);

  }

  addSnippet(){
    this.snippetService.addSnippet(this.addSnipetForm.value)
    .subscribe(
      (data) => {​​
        console.log(data);
      }​​,
      (err: HttpErrorResponse) => {​​
        console.error(err.error);
      }​​
    );
    console.warn("start addSnippet");
  }

  ngOnInit(): void {
  }
}