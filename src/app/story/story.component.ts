import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  topicUrl:string;
  storyTopic:string;
  storyContent:string;
  storyAuthor:string;
  likeCount:number;
  publishDate:string;

  constructor(private router: Router,private communicator:CommunicatorService) {
    this.topicUrl=window.location.href;
    this.topicUrl=this.topicUrl.substr(this.topicUrl.lastIndexOf('/')+1,this.topicUrl.length);
  }

  ngOnInit() {
    console.log("ee");

    console.log(this.topicUrl);
    this.communicator.getThreads(this.topicUrl).subscribe((thread) => {
            let data=thread['threadDTOs'][0];
            this.storyTopic=data.topicName;
            this.storyContent=data.content;
            this.storyAuthor=data.username;
            this.likeCount=data.likeCount;
            this.publishDate=data.createdOn;

      })
  }



}