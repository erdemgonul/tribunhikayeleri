
import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

var httpOptions = {
  headers: new HttpHeaders({
    //'Authorization': 'Basic cm9vdDpyb290',
    'Content-Type':  'application/json'

  })
};

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  baseUrl="http://127.0.0.1:8080/";
  constructor(private http: HttpClient) { }


  createUser(userData) : Observable<any>{
    return this.http.post(this.baseUrl + 'user',userData,httpOptions).pipe(
      map((response: Response) =>JSON.stringify(response)));
  }

  signUser(email,password) : Observable<any>{
    httpOptions.headers= httpOptions.headers.set('Authorization',"Basic " + btoa(email + ":" + password));
    return this.http.post(this.baseUrl + 'login',{},httpOptions).pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
    }



  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
  }
}
/*
*/
