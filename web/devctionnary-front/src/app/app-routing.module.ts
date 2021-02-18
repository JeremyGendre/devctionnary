import { GetProfileComponent } from './get-profile/get-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'profile', component: GetProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
