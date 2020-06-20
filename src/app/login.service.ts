import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoggedIn = false

  constructor(private http : HttpClient) { }

  isAuthenticated(){
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.LoggedIn)
      },1000)
    })
    return promise
  }

  isLoggedIn(){
    this.LoggedIn = true
  }

  isLoggedOut(){
    this.LoggedIn = false
  }
  getPosts(){
    let searchParams = new HttpParams()
    searchParams = searchParams.append('username', 'Bret')
    searchParams = searchParams.append('id', '1')

      return this.http.get('https://jsonplaceholder.typicode.com/users',
      {
        headers: new HttpHeaders({'mesage':'This is Header message', 
        'Custom-Header': 'This is custom Header'}),
        params: searchParams
      }
      ).pipe(
        catchError(res=>{
          return res
          console.log(res)
        })
      )
  }
}
