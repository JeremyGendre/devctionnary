import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import { DetailsSnippetComponent } from './details-snippet/details-snippet.component'
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
  { path:'login', component: LoginComponent},
  { path: 'snippets/details/:id', component: DetailsSnippetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
