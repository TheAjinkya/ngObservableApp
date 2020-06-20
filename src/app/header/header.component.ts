import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('name') data

 @Output() childEvent = new EventEmitter()

 sendData(){
   this.childEvent.emit("Hello Dad")
 }



}
