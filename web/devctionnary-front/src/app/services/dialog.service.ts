import { ErrorModalComponent } from './../error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openErrorDialog(): void {
    this.dialog.open(ErrorModalComponent);
  }
}
