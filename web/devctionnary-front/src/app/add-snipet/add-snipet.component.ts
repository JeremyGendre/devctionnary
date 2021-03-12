import { Component, OnInit } from '@angular/core';
import { SnippetService } from './../services/snippet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-snipet',
  templateUrl: './add-snipet.component.html',
  styleUrls: ['./add-snipet.component.scss']
})
export class AddSnipetComponent implements OnInit {
  formError: string = null;
  baseHeaders = new HttpHeaders();

  constructor(private snippetService: SnippetService, private router: Router, private _snackBar: MatSnackBar, private http: HttpClient) {
      this.baseHeaders = this.baseHeaders.set('Content-Type', 'application/json; charset=utf-8');
      this.baseHeaders = this.baseHeaders.set('Authorization', `Bearer ${localStorage.getItem('token')}​​`);
  }

  onSubmit(): void {
    console.log(this.addSnippet());
    console.warn(this.addSnipetForm.value);
  }

  ngOnInit(): void {
    console.log('add snipet init')
  }

  addSnipetForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  addSnippet(): void{
    this.snippetService.addSnippet(this.addSnipetForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        this._snackBar.open('Snippet enregistrés !', 'Fermer', {
          duration: 1500
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.formError = error.error.message;
        }
      }
    );
    console.warn("start addSnippet");
    this.router.navigate(['/']);
  }
}
