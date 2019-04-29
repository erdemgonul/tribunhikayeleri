import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
import { Observable, of, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],

})

export class CreateUserComponent implements OnInit {

  email:string;
  checked:boolean;
  username:string;
  password:string;
  errorUser:boolean;
  errorName:string;
  baseUrl="http://localhost:8080/";
  constructor(private router: Router,private communicator:CommunicatorService) {
this.errorUser=false;
 }

  ngOnInit() {
    this.errorUser=false;
  }

  createAccount(email:string,username:string,password:string,checked:boolean){
    if(checked){
      console.log("hey");
      document.getElementById('useragreementbox').style.color=""
      var userData = { "username":username,"password": username};
      var userJSON = JSON.stringify(userData);

      this.communicator.createUser(userJSON).subscribe(
        data => { console.log(data); // Data which is returned by call
                  this.errorUser=false;
                  this.router.navigateByUrl('');
        },
        error => {  console.log(error);
                  this.errorUser=true;
                  this.errorName="bu isimde bir kullanıcı zaten var.";
           // Error if any
        },
        ()=> {}// Here call is completed. If you wish to do something
        // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
      );



    }
    else{
      console.log("wtf");
      document.getElementById('useragreementbox').style.color="red";
    }
  }
}
