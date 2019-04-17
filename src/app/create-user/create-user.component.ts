import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createAccount(email,username,password,checked){
    if(checked){
      var userData = {email:email,name: name, password:password};
      userData = JSON.stringify(userData);
      console.log(userData);
      document.getElementById('useragreementbox').style=""
      this.router.navigateByUrl('');

    }
    else{
      document.getElementById('useragreementbox').style="color:red";
    }
  }
}
