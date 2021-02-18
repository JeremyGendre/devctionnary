import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.baseHeaders = this.baseHeaders.set('Content-Type', 'application/json; charset=utf-8');
    this.baseHeaders = this.baseHeaders.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
   }

  getUser(id?: number) {
    if (id === null) {
      return this.http.get(
        environment.apiUrl + '/api/users/me',
        {
          headers: this.baseHeaders
        }
      );
    }
  }

  patchMe(user: User) {
    return this.http.patch(
      environment.apiUrl + '/api/users/me',
      user,
      {
        headers: this.baseHeaders
      }
    );
  }

  getUsernameAvailability(username: string) {
    return this.http.get(
      environment.apiUrl + '/api/users/username-availability/' + username,
      {
        headers: this.baseHeaders
      }
    );
  }
}