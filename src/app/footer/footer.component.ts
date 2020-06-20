import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  homeRoute(){
    this.router.navigate(['home'], {relativeTo : this.route})
  }
  templateRoute(){
    this.router.navigate(['template','abc','{"frequent"="loading"}'], {relativeTo : this.route})
  }
  reactiveRoute(){
    this.router.navigate(['rective'], {relativeTo : this.route})
  }

}
