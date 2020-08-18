import { DataService } from './../data.service';
import { Component, OnInit, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {


  constructor(@Inject('ds') public ds: DataService) {
    //this.dataService = new DataService();
   }

  ngOnInit(): void {
  }

}
