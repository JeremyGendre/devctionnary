import { UsersModule } from './users/users.module';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AaaComponent } from './aaa/aaa.component';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    UsersModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
