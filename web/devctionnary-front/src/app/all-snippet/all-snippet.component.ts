import { Snippet } from './../models/snippet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-snippet',
  templateUrl: './all-snippet.component.html',
  styleUrls: ['./all-snippet.component.scss']
})
export class AllSnippetComponent implements OnInit {
  allSnippets: Snippet[] = [{
    author: 'user1',
    content : 'helloword',
    description : 'helloworld',
    title:'helloworld',
    id: '1',
    createdAt: new Date(),
    updatedAt : new Date(),
  },{
    author: 'user1',
    content : 'helloword',
    description : 'helloworld',
    title:'helloworld',
    id: '1',
    createdAt: new Date(),
    updatedAt : new Date(),
  },
  {
    author: 'user1',
    content : 'helloword',
    description : 'helloworld',
    title:'helloworld',
    id: '1',
    createdAt: new Date(),
    updatedAt : new Date(),
  },
  {
    author: 'user1',
    content : 'helloword',
    description : 'helloworld',
    title:'helloworld',
    id: '1',
    createdAt: new Date(),
    updatedAt : new Date(),
  },
  {
    author: 'user1',
    content : 'helloword',
    description : 'helloworld',
    title:'helloworld',
    id: '1',
    createdAt: new Date(),
    updatedAt : new Date(),
  }
];
  constructor() { }

  ngOnInit(): void {
  }

  
}
