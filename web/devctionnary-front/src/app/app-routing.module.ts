import { RegisterComponent } from './register/register.component';
import { AllSnippetComponent } from './all-snippet/all-snippet.component';
import { ModifyProfileComponent } from './modify-profile/modify-profile.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsSnippetComponent } from './details-snippet/details-snippet.component'
import {LoginComponent} from "./login/login.component";
import { AuthGuardService as AuthGuard } from './services/guards/auth-guard.service';
import { AddSnipetComponent } from './add-snipet/add-snipet.component';
import { UpdateSnippetComponent } from './update-snippet/update-snippet.component';

const routes: Routes = [
  { path:'', component: AllSnippetComponent},
  { path: 'snippets/details/:id', component: DetailsSnippetComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: GetProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', redirectTo: 'profile/', pathMatch: 'full' },
  { path: 'modify-profile', component: ModifyProfileComponent, canActivate: [AuthGuard] },
  { path: 'add-snipet', component: AddSnipetComponent, canActivate: [AuthGuard] },
  { path: 'snippets/details/update/:id', component: UpdateSnippetComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
