import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-snippet-component',
  templateUrl: './update-snippet-component.component.html',
  styleUrls: ['./update-snippet-component.component.scss']
})
export class UpdateSnippetComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log('update snippet init')
  }
}
