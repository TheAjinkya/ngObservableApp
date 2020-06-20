import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute ) { 
    this.route.params.subscribe(res=>{
      this.paramName = res.id
      console.log(this.paramName)
    })
  }

  paramName : any
  ngOnInit(): void {
    console.log("this.route.snapshot", this.route.snapshot)
  }

}
