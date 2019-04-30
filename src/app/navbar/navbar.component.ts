import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommunicatorService} from '../communicator.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  errorUser;
  errorName;
  isSigned=false;
  username;
  parameter;
  constructor(private router: Router,private communicator:CommunicatorService) {

   }

  ngOnInit() {
    if(this.communicator.isUserSigned){
    this.isSigned=this.communicator.isUserSigned;
    this.username=this.communicator.currentUser.username;
    }
  }
  signInAccount(email:string,password:string,checkedlogin:boolean){

      var userData = {'username': email, 'password' : password};
      var userJSON = JSON.stringify(userData);

      this.communicator.signUser(email,password,checkedlogin).pipe(first())
            .subscribe(
                data => {

                    this.ngOnInit();
                },
                error => {
                    console.log("fuck");
                    this.errorUser=true;
                    this.errorName="kullanıcı adı ya da parola yanlış.";
                });
  }
  navigateToSearch(parameter:string){
            this.router.navigateByUrl('search/'+parameter);
  }
  navigateToStoryCreator(){
            this.router.navigateByUrl('story');
  }
  navigateToHome(){
            this.router.navigateByUrl('');
  }
  navigateToSignUp(){
            this.router.navigateByUrl('signup');
  }
  signOutAccount(){
    this.communicator.logout();
    this.isSigned=false;
    this.ngOnInit();

  }
}
