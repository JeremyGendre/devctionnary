import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Snippet } from '../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  header = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    Accept : 'application/json'
  });
  patchHeaders = {
    'Content-Type': 'application/merge-patch+json',
    Accept : 'application/json'
  };
  apiUrl:string = 'http://localhost:8000';
  baseHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { 

  }

  getAllSnippets(){
    return this.http.get<any>(this.apiUrl + '/api/snippets', {headers: this.header});
  }
  addSnippet(snippet: any){
    return this.http.post(
      environment.apiUrl + '/api/snippets',
      snippet,
      {​​
        headers: this.header
      }​​
    );
  }
}
