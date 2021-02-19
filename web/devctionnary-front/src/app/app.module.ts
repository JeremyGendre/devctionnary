import { DialogConfirmUserDeletionComponent } from './get-profile/dialog-confirm/dialog-confirm-user-deletion.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { DetailsSnippetComponent } from './details-snippet/details-snippet.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { RegisterComponent } from './register/register.component';
import { AddSnipetComponent } from './add-snipet/add-snipet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AllSnippetComponent,
    LoginComponent,
    AddSnipetComponent,
    DetailsSnippetComponent,
    GetProfileComponent,
    ModifyProfileComponent,
    ErrorModalComponent,
    DialogConfirmUserDeletionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    HighlightJsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
