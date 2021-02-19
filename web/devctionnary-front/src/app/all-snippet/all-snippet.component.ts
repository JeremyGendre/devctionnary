import { SnippetService } from './../services/snippet.service';
import { Snippet } from './../models/snippet';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-snippet',
  templateUrl: './all-snippet.component.html',
  styleUrls: ['./all-snippet.component.scss']
})
export class AllSnippetComponent implements OnInit {
  allSnippets;

  constructor(private snippetService: SnippetService) { }

  ngOnInit(): void {
    this.getAllSnippets();
  }

  getAllSnippets(){
    this.snippetService.getAllSnippets().subscribe((data) => {

      this.allSnippets = JSON.parse(data.data);
      console.log(this.allSnippets);
    },
    (err: HttpErrorResponse)=>{
      console.error(err.error);
    })
  }
  
}
