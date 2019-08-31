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
  image:string;
  constructor(private router:Router,private http: HttpClient,private communicator:CommunicatorService) {

   }
   onFileChanged(evt){
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }



  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            console.log(btoa(binaryString));
            this.image=btoa(binaryString);
    }
  ngOnInit() {
  }
  submitStory(){
    if(!this.isAnonym){
      this.communicator.createTopic(this.topic,this.storyText,false,this.image);
    }else{
      this.communicator.createTopic(this.topic,this.storyText,true,this.image);
    }

  }
}
