import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginSrc : LoginService) {
    this.isLoggedIn()
   }
  loginFlag : boolean = false
  ngOnInit(): void {
    
  }
  signIn(){
    this.loginSrc.isLoggedIn()
    this.loginFlag = true
  }
  signOut(){
    this.loginSrc.isLoggedOut();
    this.loginFlag = false

  }
  isLoggedIn(){
    this.loginSrc.isAuthenticated().then((loginResponse : boolean)=>{
      this.loginFlag = loginResponse
      console.log("login flag", loginResponse)
    })
  }
}
