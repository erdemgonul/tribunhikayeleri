import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import {CommunicatorService} from '../communicator.service'

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

  constructor(private router:Router,private http: HttpClient,private communicator:CommunicatorService) {

   }

  ngOnInit() {
  }
  submitStory(){
    if(!this.isAnonym){
      this.communicator.createTopic(this.topic,this.storyText,false);
    }else{
      this.communicator.createTopic(this.topic,this.storyText,true);
    }

  }
}
