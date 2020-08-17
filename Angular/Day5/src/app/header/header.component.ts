import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pageRequested: number = 0;

  @Output()
  pageChangedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  //pageName = "Page"
  onChangePage(pageNo:number){

    this.pageRequested = pageNo;
    console.log(this.pageRequested);
    this.pageChangedEvent.emit(this.pageRequested);
    //Manually we are triggering a Custom event
    //And along with the event triggering we are also
    //Sending some data for further manipulation
    //by the Observer(Listner)-> AppRoot Component
    //this.pageName = this.pageName + pageNo;

  }

}
