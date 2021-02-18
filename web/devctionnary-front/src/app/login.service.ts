import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl:string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(this.apiUrl + '/api/login_check',{username: username, password: password});
  }
}
