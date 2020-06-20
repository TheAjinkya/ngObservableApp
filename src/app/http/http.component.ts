import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private loginSrc : LoginService) { }

  ngOnInit(): void {
    this.getData()
  }
  posts:any = []

  getData(){
    this.loginSrc.getPosts().subscribe(
      (res:[])=>{
        for (let index = 0; index < res.length; index++) {
          this.posts.push(res[index]);
        }
        console.log("response posts", this.posts)
      },
      error=>{
        console.log(error.message)
      },
      ()=>{
        console.log("Get operation is complete")
      }
    )
  }

}
