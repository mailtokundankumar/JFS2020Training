import { Book } from './../../../../sabari-workspace/projects/my-first-app/src/app/Book';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private dataService: DataService) { }


  deleteLastBook() {

    if (this.dataService.books.length > 0) {

      this.dataService.deleteLastBook();

    }

  }

  ngOnInit(): void {
  }

}
