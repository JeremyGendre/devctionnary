import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  reload(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    console.log('modal loaded');
  }
}
