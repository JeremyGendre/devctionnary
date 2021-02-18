import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
  { path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
