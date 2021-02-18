import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-snippet',
  templateUrl: './all-snippet.component.html',
  styleUrls: ['./all-snippet.component.scss']
})
export class AllSnippetComponent implements OnInit {
  date : Date =  new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
