import { ActivatedRoute, Router } from '@angular/router';
import { SnippetService } from './../services/snippet.service';
import { Component, OnInit } from '@angular/core';
import { Snippet } from '../models/snippet';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-snippet',
  templateUrl: './details-snippet.component.html',
  styleUrls: ['./details-snippet.component.scss'],
})
export class DetailsSnippetComponent implements OnInit {
  snippet: Snippet = <Snippet>{};
  id: number;
  formError: string = null;

  constructor(
    private snippetService: SnippetService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.snippetService.getSnippetById(this.id).subscribe(
      (data) => {
        if (!data || !data.data) {
          this.router.navigate(['/']);
        }
        this.snippet = data.data;
        console.log(this.snippet);
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
      }
    );
  }

  back() {
    this.router.navigate(['/']);
  }
  onUpdate(id: number): void {
    this.router.navigate(['snippets', 'details', 'update', id]);
  }

  onDelete(id) {
    this.snippetService.deleteSnippet(id).subscribe(
      (data) => {
        console.log(data);
        this._snackBar.open('Snippet supprimé !', 'Fermer', {
          duration: 1500,
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
    console.warn('start delete');
    this.router.navigate(['/']);
  }
}
