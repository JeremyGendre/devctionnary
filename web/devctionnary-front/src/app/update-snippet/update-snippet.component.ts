import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snippet } from '../models/snippet';
import { DialogService } from '../services/dialog.service';
import { SnippetService } from '../services/snippet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-snippet',
  templateUrl: './update-snippet.component.html',
  styleUrls: ['./update-snippet.component.scss']
})
export class UpdateSnippetComponent implements OnInit {
  isLoading: boolean = false;
  isSubmitDisabled: boolean = false;
  formError: string = null;
  snippet: Snippet = <Snippet>{};
  id: number;

  snippetForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(
    private snippetService: SnippetService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute, 
    private router: Router,
    private dialogService: DialogService
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isLoading = true;
    this.snippetService.getSnippetById(this.id)
    .subscribe((data: {data: {snippet: string}}) => {
      const snippet: Snippet = JSON.parse(data.data.snippet);
      this.snippet = snippet;
      
      this.snippetForm.patchValue({
        title: snippet.title,
        description: snippet.description,
        content: snippet.content,
      });

      this.isLoading = false;
    },(error: HttpErrorResponse) => {
      this.isLoading = false;
      if (error.status === 401) {
        this.router.navigate(['/login']);
      } else {
        this.dialogService.openErrorDialog();
      }
    });
  }

  updateSnippet(){
    this.snippetService.updateSnippet(this.snippetForm.value)
    .subscribe(
      (data) => {​​
        console.log(data);
        this._snackBar.open('Snippet enregistrés !', 'Fermer', {
          duration: 1500
        });
      }​​,
      (error: HttpErrorResponse) => {​​
        console.error(error);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.formError = error.error.message;
        }
      }​​
    );
    console.warn("start addSnippet");
    this.router.navigate(['/']);
  }

  deleteSnippet(){

  }

  onSubmit(e) {
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

