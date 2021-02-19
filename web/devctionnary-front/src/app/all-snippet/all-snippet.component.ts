import { SnippetService } from './../services/snippet.service';
import { Snippet } from './../models/snippet';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-snippet',
  templateUrl: './all-snippet.component.html',
  styleUrls: ['./all-snippet.component.scss']
})
export class AllSnippetComponent implements OnInit {
  allSnippets: Snippet[];

  constructor(private snippetService: SnippetService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSnippets();
  }

  getAllSnippets(){
    this.allSnippets = [];
    this.snippetService.getAllSnippets().subscribe((data) => {
      this.allSnippets = data.data;
      console.log(this.allSnippets);
    },
    (err: HttpErrorResponse)=>{
      console.error(err.error);
    })
  }

  onDetails(id: string) {
    this.router.navigate(['snippets', 'details', id]);
  }
  
}
