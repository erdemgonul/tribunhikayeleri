
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
  autoSigned;
  isUserSigned;
  baseUrl="http://127.0.0.1:8080/";
  constructor(private http: HttpClient,private router:Router) {
    if(localStorage.getItem("currentUser")!=null){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
      this.autoSigned=true;
      this.isUserSigned=true;
    }
  }


  createUser(userData) : Observable<any>{
    return this.http.post(this.baseUrl + 'user',userData,httpOptions).pipe(
      map((response: Response) =>JSON.stringify(response)));
  }

  signUser(email,password,checked) : Observable<any>{
    httpOptions.headers= httpOptions.headers.set('Authorization',"Basic " + btoa(email + ":" + password));
    return this.http.post(this.baseUrl + 'login',{},httpOptions).pipe(map(user => {
        if (user) {
            var token="Basic " + btoa(email+":"+password);
            this.isUserSigned=true;
            if (checked) {
                localStorage.setItem("currentUser",JSON.stringify({"username":email,"token": token}));
                this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
            } else {
                sessionStorage.setItem("currentUser",JSON.stringify({"username":email,"token": token}));
                this.currentUser=JSON.parse(sessionStorage.getItem("currentUser"));
            }
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
      "content":content,
    },httpOptions
    )
      .subscribe(
        res => {
          console.log("successful");
          this.router.navigateByUrl(topicname);
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
  readRecentThreads(): Observable<any> {
      return this.http.get<any>(this.baseUrl + 'threads/recent?page=0');
    }
  logout() {
        // remove user from local storage to log user out
        this.isUserSigned=false;
        this.currentUser=null;
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
  }
}
/*
*/
