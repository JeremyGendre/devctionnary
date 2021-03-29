import { AuthenticatedStoreService } from './../stores/authenticated-store.service';
import { AuthService } from './../auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private authenticatedStoreService: AuthenticatedStoreService
  ) {}

  canActivate(): boolean {
    if (!this.authenticatedStoreService.authenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}