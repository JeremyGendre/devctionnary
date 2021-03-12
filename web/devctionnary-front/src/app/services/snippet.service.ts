import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SnippetService {

  header = localStorage.getItem('token') ? new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    Accept : 'application/json'
  }) : new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept : 'application/json'
  });
  /*patchHeaders = {
    'Content-Type': 'application/merge-patch+json',
    Accept : 'application/json'
  };*/
  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getAllSnippets(): Observable<Object>{
    return this.http.get(this.apiUrl + '/api/snippets', {headers: this.header});
  }
  addSnippet(snippet: {}): Observable<Object>{
    return this.http.post(
      environment.apiUrl + '/api/snippets',
      snippet,
      {
        headers: this.header
      }
    );
  }

  getSnippetById(id: number): Observable<Object>{
    return this.http.get(this.apiUrl + `/api/snippets/${id}`, { headers: this.header });
  }
  deleteSnippet(id: any) {
    return this.http.delete(environment.apiUrl + `/api/snippets/${id}`,{
      headers: this.header,
    });
  }

  updateSnippet(snippet: {id: number}): Observable<Object>{
    return this.http.post(environment.apiUrl + `/api/snippets/${snippet.id}`, snippet, {
      headers: this.header,
    });
  }
}
