import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { JwtClientService } from '../../core/jwt-client.service';
import { LoginUser } from '../../shared/models/login-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  //
  user:any=[];
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
   
  });
  errMsg: boolean;
  //res: any;
//  res:string;
  
  constructor(private auth: JwtClientService, private router: Router, private api: ApiService) {
    this.errMsg = false;
    
    // res=this.auth.userLogin.arguments.res.token;
  }

  // constructor() { }

  ngOnInit() {
   this.auth.getRole()
   .subscribe(response => {this.user = response;});
   
  }
  onLogin() {
    console.log(this.loginForm)
    

    if (this.loginForm.valid) {
      const loginData = new LoginUser();
   
      loginData.username = this.loginForm.value.username!;
      loginData.password = this.loginForm.value.password!; 

      this.auth.userLogin(loginData).then(val => {
       
        if (val) {
         
        //this.auth.getRole(loginData)
         this.router.navigate(['dashboard-admin'])
          // this.router.navigate(['dashboard'])

        }
        else {
          this.errMsg = true;
        }

      });
    }

  }
  // loginUser(){
  //   this.auth.loginUser('${this.loginUserData}')
  //   .subscribe(

  //     res => console.log(res),
  //     err => console.log(err)
  //   )
  // }
  //
  // loginUser(){
  //   console.log(this.loginUserData)
  // }

}
