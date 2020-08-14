import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageRequested: number=0;
  //pageName = "Page"
  onChangePage(pageNo:number){

    this.pageRequested = pageNo;
    console.log(this.pageRequested);
    //this.pageName = this.pageName + pageNo;

  }

}
