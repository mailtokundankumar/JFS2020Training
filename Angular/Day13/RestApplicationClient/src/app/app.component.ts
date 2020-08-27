import { RestService } from './rest.service';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'RestApplicationClient';


  constructor(){
   //console.log(environment.restUrl);
  }

  ngOnInit(){}
}
