import { AuthService } from './../auth.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthenticatedStoreService {
  constructor(private authService: AuthService) {}

  private readonly _authenticated = new BehaviorSubject<boolean>(this.authService.isAuthenticated());

  readonly authenticated$ = this._authenticated.asObservable();

  get authenticated(): boolean {
    return this._authenticated.getValue();
  }

  updateAuthenticated(): void {
    this._authenticated.next(this.authService.isAuthenticated());
  }
}
