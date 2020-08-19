import { Page2Component } from './page2/page2.component';
import { FooterComponent } from './footer/footer.component';
import { OnInit, ViewChild } from '@angular/core';
//import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Page App';

  //The variable is not Instantiated
  //We should not instantiate manually
  @ViewChild('foot')
  footerComponentObject: FooterComponent;

  @ViewChild('page2')
  page2ComponentObject: Page2Component;

  updateLastAccessedDetail() {

    //Cannot set property 'lastAccessed' of undefined
    console.log(this.footerComponentObject);
    this.footerComponentObject.lastAccessed =
      new Date().toString();
  }

  startTime: string = new Date().toString();

  constructor() {
    console.log("This is App Component Constructor!");
  }
  //after creatng an instance
  ngOnInit(): void {
    console.log("This is App Component ngOnInit Life Cycle Method!");
    this.startTime = new Date().toString();
  }

  incrementHitCounter(pageNo) {
    console.log("Called");
    // if (pageNo === 2) {
    //   this.page2ComponentObject.incrementHitCounter();
    // }
  }


}
