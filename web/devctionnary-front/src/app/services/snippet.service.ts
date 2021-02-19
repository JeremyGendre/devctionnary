import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snippet } from '../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  header = localStorage.getItem('token') ? new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
    Accept : 'application/json'
  }) : new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept : 'application/json'
  }) ;
  patchHeaders = {
    'Content-Type': 'application/merge-patch+json',
    Accept : 'application/json'
  };
  apiUrl:string = 'http://localhost:8000';

  constructor(private http: HttpClient) {

  }

  getAllSnippets(){
    return this.http.get<any>(this.apiUrl + '/api/snippets', {headers: this.header});
  }

  getSnippetById(id: number){
    return this.http.get<any>(this.apiUrl + `/api/snippets/${id}`, { headers: this.header });
  }


}
