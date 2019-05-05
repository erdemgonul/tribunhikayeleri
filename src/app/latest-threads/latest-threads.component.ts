import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-latest-threads',
  templateUrl: './latest-threads.component.html',
  styleUrls: ['./latest-threads.component.css']
})
export class LatestThreadsComponent implements OnInit {


  stories=[];
  hasProfilePicture=false;
  constructor(private router: Router,private communicator:CommunicatorService) {

    //Refresh Component When Navigating to Same Route
   }

  ngOnInit() {
    this.readRecentTopics();
  }
  readRecentTopics(){

    this.communicator.readRecentTopics().subscribe(
      data => {
                // Data which is returned by call
                let topics=data["topicDTOs"];
                for(var i=0;i<topics.length;i++){
                  topics[i].createdOn=topics[i].createdOn.substr(0,topics[i].createdOn.lastIndexOf('T'));
                }
                this.stories=topics;
      },
      error => {
         // Error if any
      },
      ()=> {}// Here call is completed. If you wish to do something
      // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    );
  }



}
