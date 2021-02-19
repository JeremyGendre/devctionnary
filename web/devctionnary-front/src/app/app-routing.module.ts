import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSnipetComponent } from './add-snipet/add-snipet.component';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
  { path:'login', component: LoginComponent},
  { path: 'add-snipet', component: AddSnipetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
