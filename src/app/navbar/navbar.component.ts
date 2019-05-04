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
  expanded=false;
  errorUser;
  errorName;
  isSigned=false;
  username;
  parameter:string;
  hey:string;
  topicList=[];
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



  onKey(value: KeyboardEvent) {
    console.log(this.hey);
   const charCode  = value.key.length == 1 ? value.key.charCodeAt(0) : 0; //if user pressed a single key get charCode
   if(this.parameter!=""){

   if (value.key == 'Enter'){
    this.searcher();
    if(this.topicList.includes(this.parameter)){
      this.router.navigateByUrl(this.parameter);
    }else{
      this.navigateToSearch(this.parameter);
    }

   }
   else if ((charCode > 47 && charCode < 58) || // numeric (0-9)
       (charCode > 64 && charCode < 91) || // upper alpha (A-Z)
       (charCode > 96 && charCode < 123) || value.key =='Backspace'){ // lower alpha (a-z)
         this.searcher();
   }
     else {
       //do nothing
     }

   }
  }
   searcher(){
     this.communicator.searchAtTopics(this.parameter.substr(6,this.parameter.length)).subscribe(
       data => {  // Data which is returned by call
                 let topics=data;
                 for(var i=0;i<topics.length;i++){
                   this.topicList[i]=topics[i].name;
                 }
                 console.log(this.topicList);
       },
       error => {  console.log(error);
          // Error if any
       },
       ()=> {}// Here call is completed. If you wish to do something
       // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
     );
   }


}
