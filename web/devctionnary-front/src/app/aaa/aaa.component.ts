import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.scss']
})
export class AaaComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
