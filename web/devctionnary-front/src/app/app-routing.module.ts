import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSnipetComponent } from './add-snipet/add-snipet.component';
import {LoginComponent} from "./login/login.component";
import { AuthGuardService as AuthGuard } from './services/guards/auth-guard.service';

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
  { path:'login', component: LoginComponent},
  { path: 'add-snipet', component: AddSnipetComponent },
  { path: 'profile/:id', component: GetProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', redirectTo: 'profile/', pathMatch: 'full' },
  { path: 'modify-profile', component: ModifyProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
