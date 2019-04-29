import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  stories=[];
  topicUrl;
  constructor(private router: Router,private communicator:CommunicatorService) {
    this.topicUrl=window.location.href;
    this.topicUrl=this.topicUrl.substr(this.topicUrl.lastIndexOf('/')+1,this.topicUrl.length);

    //Refresh Component When Navigating to Same Route
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // End
    this.communicator.searchAtTopics(this.topicUrl).subscribe(
      data => { console.log(data); // Data which is returned by call
                let topics=data;
                this.stories=topics;
                console.log("siktir");
                console.log(this.stories[0]);
                this.ngOnInit();
      },
      error => {  console.log(error);
         // Error if any
      },
      ()=> {}// Here call is completed. If you wish to do something
      // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    );
   }

  ngOnInit() {
  }

}
