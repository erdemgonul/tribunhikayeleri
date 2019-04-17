import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
})
};
@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  topic:string;
  storyText:string;
  isAnonym:boolean;

  baseUrl="http://localhost:8080/";
  constructor(private router:Router,private http: HttpClient) {

   }

  ngOnInit() {
  }
  submitStory(topic:string,storyText:string,isAnonym:boolean){
    var storyData;
    if(!isAnonym){
      storyData={
        'user':'rup',
        'topic':topic,
        'storytext':storyText,
      }
    }else{
      storyData={
        'user':'anonym',
        'topic':topic,
        'storytext':storyText,
      }
    }
    var storyJSON = JSON.stringify(storyData);
    console.log(storyJSON);


      const req = this.http.post(this.baseUrl +'topic',
      storyJSON,httpOptions
    )
        .subscribe(
          res => {
            console.log("success!");
          },
          err => {
            console.log("Error occured");
          });
      }


}
