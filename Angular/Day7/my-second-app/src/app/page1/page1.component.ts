import { Book } from './../Book';
import { DataService2 } from './../data.service2';
import { DataService } from './../data.service';
import { Component, OnInit, Inject, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit, OnDestroy {


  addSubscription: Subscription;
  deleteSubscription: Subscription;

  //@Inject('ds')
  //public ds2: DataService2
  totalBooks: Array<Book>;
  numberOfBooksWrittenByMatt: number;
  constructor(private ds: DataService) {
    //this.dataService = new DataService();

  }


  ngOnInit(): void {
    this.totalBooks = this.ds.books;
    this.numberOfBooksWrittenByMatt = this.ds.books.filter((b) => b.author === 'Matt').length;
    //bookAddedEvent is like Airtel or Vodafone

    this.addSubscription = this.ds.bookAddedEvent.subscribe(

      (newBook: Book) => {
        console.log('Book Added and Event Susbcirbed');
        if (newBook.author === 'Matt') {
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error) => {
        console.log('an Error Occured', error);
      },
      () => {
        //do some logic
        console.log("Complete");
      }

    );

    this.deleteSubscription = this.ds.bookDeletedEvent.subscribe(

      (newBook: Book) => {
        console.log('Book Added and Event Susbcirbed');
        if (newBook.author === 'Matt') {
          this.numberOfBooksWrittenByMatt--;
        }
      }

    )

  }

  ngOnDestroy() {

    this.addSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }

}
