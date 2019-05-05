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
  imgAsBase64;
  imageType;
  errorUser:boolean;
  errorName:string;
  baseUrl="http://localhost:8080/";
    imageuploaded;
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
      var userData = { "username":username,"password": username,"base64ProfilePicture":this.imgAsBase64,"imageType":this.imageType};
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
  readfiles(files){
      console.log('files from readfiles -  ',files[0]);

      const reader = new FileReader();
      let image = new Image();

      reader.onload =  (event) =>{
        console.log("ssst");
        this.imageType=files[0].type;
        let fileReader = event.target as FileReader;
        //image.src = fileReader.result;
        //image.width = 150;
        //this.imageuploaded="<img src='" +fileReader.result + "'>";
        //reader.result diyince dönüyo  o arrayi buranın içinde yapman lazım
        console.log("RESULT:",reader.result);
        this.imgAsBase64= btoa(String.fromCharCode.apply(null, new Uint8Array(reader.result as ArrayBuffer)));

      };
      reader.readAsArrayBuffer(files[0]);

    }//readfiles
    imageChange(event){
      this.readfiles(event.target.files);
    }//imageChange
}
