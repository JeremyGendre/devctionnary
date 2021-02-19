import { ActivatedRoute, Router } from '@angular/router';
import { SnippetService } from './../services/snippet.service';
import { Component, OnInit } from '@angular/core';
import { Snippet } from '../models/snippet';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details-snippet',
  templateUrl: './details-snippet.component.html',
  styleUrls: ['./details-snippet.component.scss']
})
export class DetailsSnippetComponent implements OnInit {

  snippet: Snippet = <Snippet>{};
  id: number;

  constructor(private snippetService: SnippetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.snippetService.getSnippetById(this.id).subscribe(
      (data) => {
        if (!data || !data.data){
          this.router.navigate(['/']);
        }
        this.snippet = data.data;
        console.log(this.snippet);
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
      });
  }

  back(){
    this.router.navigate(['/']);
  }

}
