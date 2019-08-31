import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
import { Observable, of, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string;
  checked:boolean;
  password:string;
  errorUser:boolean;
  errorName:string;
  constructor(private router: Router,private communicator:CommunicatorService) {
  this.errorUser=false;
}

  ngOnInit() {
    this.errorUser=false;
  }

  signInAccount(){


      this.communicator.signUser(this.email,this.password,this.checked).pipe(first())
            .subscribe(
                data => {
                  window.location.replace(this.communicator.homePage);
                },
                error => {
                    console.log("fuck");
                    this.errorUser=true;
                    this.errorName="kullanıcı adı ya da parola yanlış.";
                });
  }


}
