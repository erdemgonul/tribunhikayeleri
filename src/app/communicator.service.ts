
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  currentUser;
  baseUrl="http://127.0.0.1:8080/";
  constructor(private http: HttpClient) {
     this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
  }


  createUser(userData) : Observable<any>{
    return this.http.post(this.baseUrl + 'user',userData,httpOptions).pipe(
      map((response: Response) =>JSON.stringify(response)));
  }

  signUser(email,password) : Observable<any>{
    httpOptions.headers= httpOptions.headers.set('Authorization',"Basic " + btoa(email + ":" + password));
    return this.http.post(this.baseUrl + 'login',{},httpOptions).pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            var token="Basic " + btoa(email+":"+password);
            localStorage.setItem("currentUser",JSON.stringify({"username":email,"token": token}));
            this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
        }

        return user;
      }));
    }
  createTopic(topicname,content,isAnonym){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(!isAnonym)
      httpOptions.headers= httpOptions.headers.set('Authorization',this.currentUser.token);
    else
      httpOptions.headers= httpOptions.headers.set('Authorization',"Basic " + btoa("anonim:anonim"));
    const req = this.http.post(this.baseUrl +'topic',
    {
      "name":topicname,
    },httpOptions
    )
      .subscribe(
        res => {
          this.createThread(content,topicname,isAnonym);
        },
        err => {
          console.log("Error occured");
        });
  }
  createThread(content,topicname,isAnonym){
        if(!isAnonym)
          httpOptions.headers= httpOptions.headers.set('Authorization',this.currentUser.token);
        else
          httpOptions.headers= httpOptions.headers.set('Authorization',"Basic " + btoa("anonim:anonim"));
        const req = this.http.post(this.baseUrl +'thread',
        {
          "content": content,
          "topicName": topicname
        },httpOptions
        )
        .subscribe(
            res => {
              console.log("success");
            },
            err => {
              console.log("Error occured");
            });
      }
  getThreads(x:string):Observable<any>{
          console.log(this.baseUrl +'topic/' + x + '?page=0');
          return this.http.get(this.baseUrl +'topic/' + x + '?page=0');
  }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
  }
}
/*
*/
