import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.baseHeaders = this.baseHeaders.set('Content-Type', 'application/json; charset=utf-8');
    this.baseHeaders = this.baseHeaders.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.baseHeaders = this.baseHeaders.set('Accept', 'application/json');
   }

  getUser(id?: number): Observable<Object>|void {
    if (id === null) {
      return this.http.get(
        environment.apiUrl + '/api/users/me',
        {
          headers: this.baseHeaders
        }
      );
    }
  }

  patchMe(user: User, password: string): Observable<Object> {
    return this.http.patch(
      environment.apiUrl + '/api/users/me',
      {
        ...user,
        password: password
      },
      {
        headers: this.baseHeaders
      }
    );
  }

  deleteMe(): Observable<Object>{
    return this.http.delete(
      environment.apiUrl + '/api/users/me',
      {
        headers: this.baseHeaders
      }
    );
  }
}
