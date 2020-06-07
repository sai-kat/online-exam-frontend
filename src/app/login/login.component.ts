import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPayload: any = {};
  signupPayload: any = {};

  loginUrl: string = "/login";
  signupUrl: string = "/signup";

  constructor() { }

  submitLoginPayload(){
    console.log(this.loginPayload);
  }

  submitSignupPayload(){
    console.log(this.signupPayload);
  }

  ngOnInit(): void {
  }
}
