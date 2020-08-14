import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = 2020;

  @Input()
  lastAccessed = ' ';

  // @Input()
  // footerNote = '';

  constructor() { }

  ngOnInit(): void {
  }

}
