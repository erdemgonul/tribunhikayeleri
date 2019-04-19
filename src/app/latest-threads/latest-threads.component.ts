import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
@Component({
  selector: 'app-latest-threads',
  templateUrl: './latest-threads.component.html',
  styleUrls: ['./latest-threads.component.css']
})
export class LatestThreadsComponent implements OnInit {


  stories=[];

  constructor(private router: Router,private communicator:CommunicatorService) { }

  ngOnInit() {

    this.communicator.readRecentThreads().subscribe((threads) => {
      threads['threadDTOs'].forEach(element => {
            let data=element;
            this.stories.push(data);
          })

      });

  }

}
