import { Book } from './../Book';
import { DataService } from './../data.service';
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

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  addBook(){

    let book = new Book('another Book','Matt',5.6);
    //this.dataService.books.push(book);
    this.dataService.addBook(book);
    console.log(this.dataService.books);

  }

}
