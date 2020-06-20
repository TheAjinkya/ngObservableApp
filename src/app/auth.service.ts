import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  constructor(private loginSrc : LoginService, private router : Router) { }

  canActivate(route :  ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<boolean> | 
  Promise<boolean> | boolean{
    return this.loginSrc.isAuthenticated().then(
        (authenticated:boolean)=>{
          if (authenticated) {
            return true
          } else {
            this.router.navigate(['home'])
          }
      }
      )
  }

  canActivateChild(route, state): Observable<boolean> | 
  Promise<boolean> | boolean{
    return this.loginSrc.isAuthenticated().then(
        (authenticated:boolean)=>{
          if (authenticated) {
            return true
          } else {
            this.router.navigate(['home'])
          }
      }
      )
    }
}
