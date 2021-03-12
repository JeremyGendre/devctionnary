import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snippet } from '../models/snippet';
import { SnippetService } from '../services/snippet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-snippet',
  templateUrl: './update-snippet.component.html',
  styleUrls: ['./update-snippet.component.scss']
})
export class UpdateSnippetComponent implements OnInit {
  formError: string = null;
  snippet: Snippet = <Snippet>{};
  id: number;

  snippetForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(
    private snippetService: SnippetService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.snippetService.getSnippetById(this.id).subscribe(
      (data) => {
        if (!data || !data.data){
          this.router.navigate(['/']);
        }
        this.snippet = data.data;
        console.log(this.snippet);
        this.snippetForm.patchValue({
          id: this.snippet.id,
          title: this.snippet.title,
          description: this.snippet.description,
          content: this.snippet.content,
        });
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
      });
  }

  updateSnippet(){
    this.snippetService.updateSnippet(this.snippetForm.value)
    .subscribe(
      (data) => {
        console.log(data);
        this._snackBar.open('Snippet mofifié !', 'Fermer', {
          duration: 1500
        });
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        if (error.status === 401) {
          this.router.navigate(['/']);
        } else {
          this.formError = error.error.message;
        }
      }
    );
    console.warn("start updateSnippet");
    this.router.navigate(['/']);
  }

  onSubmit(e: Event): void {
    this.formError = null;
    e.preventDefault();
    console.log(this.updateSnippet());
    console.warn(this.snippetForm.value);
  }

  // Getters
  get title(): FormControl {
    return this.snippetForm.get('title') as FormControl
  }

  get description(): FormControl {
    return this.snippetForm.get('description') as FormControl
  }

  get content(): FormControl {
    return this.snippetForm.get('content') as FormControl
  }

}

