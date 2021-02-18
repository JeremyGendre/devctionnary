import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(environment.apiUrl + '/api/login_check',{username: username, password: password});
  }
}
