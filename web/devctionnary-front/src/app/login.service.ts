import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Object>{
    return this.http.post(environment.apiUrl + '/api/login_check',{username: username, password: password});
  }
}
