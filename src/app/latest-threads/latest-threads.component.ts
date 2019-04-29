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

  constructor(private router: Router,private communicator:CommunicatorService) { }

  ngOnInit() {
    this.readRecentTopics();
  }
  readRecentTopics(){

    this.communicator.readRecentTopics().subscribe(
      data => { console.log(data); // Data which is returned by call
                let topics=data["topicDTOs"];
                this.stories=topics;
                console.log("siktir");
                console.log(topics);
      },
      error => {  
         // Error if any
      },
      ()=> {}// Here call is completed. If you wish to do something
      // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    );
  }



}
