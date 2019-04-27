import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private _http: HttpClient) { }

  postToAPI(data) {

   return this._http.post('http://0.0.0.0:8080/api/signin', data);

  }
}
