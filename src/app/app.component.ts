import { fromEvent } from 'rxjs';
import { Component, Input, Output } from '@angular/core';
import { ajax } from 'rxjs/ajax'; // ajax function
import { from } from 'rxjs'; // from function

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Works';
  
  message = "Hello Child"
  messageToParent
  

  
}
