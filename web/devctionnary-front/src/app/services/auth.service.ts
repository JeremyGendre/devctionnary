import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService;
  
  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }

  register(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    return this.http.post(environment.apiUrl + '/register', {
      username: username,
      password: password,
      firstname: firstName,
      lastname: lastName,
      email: email
    });
  }
}