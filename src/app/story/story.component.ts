import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  topicUrl:string;
  story:string;
  comments=[];
  commentText:string;
  isLoading=true;
  constructor(private router: Router, public communicator:CommunicatorService) {
    this.topicUrl=window.location.href;
    this.topicUrl=this.topicUrl.substr(this.topicUrl.lastIndexOf('/')+1,this.topicUrl.length);
  }

  ngOnInit() {
    this.communicator.getTopic(this.topicUrl).subscribe((topic) => {
            topic.createdOn=topic.createdOn.substr(0,topic.createdOn.lastIndexOf('T'));
            this.story=topic;
            this.isLoading = false;
          })
  }
  submitComment(storyTopic,commentText){
      this.communicator.createComment(commentText,storyTopic);
  }



}
