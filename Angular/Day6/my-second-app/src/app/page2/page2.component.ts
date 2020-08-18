import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  hits: number = 0;

  ngOnInit(): void {
  }

  //this method is not called by any means
  incrementHitCounter(pageNo){
    console.log(pageNo);
    if(pageNo === 2){
    this.hits++;
  }
  }
}
