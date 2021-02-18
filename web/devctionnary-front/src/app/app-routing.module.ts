import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
