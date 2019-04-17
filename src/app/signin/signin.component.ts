import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  email:string;
  checked:boolean;
  password:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signInAccount(email,password,checked){
    if(checked){
      var userData = {email:email,name: name, password:password};
      userData = JSON.stringify(userData);
      console.log(userData);

      this.router.navigateByUrl('');

    }
    else{
    
    }
  }
}
