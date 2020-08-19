import { Book } from './Book';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); //this obj is not null
  });

  //null - false
  //obj - true
  it('addBook() should increase the size of the Array',
    () => {
      const book = new Book('testing book', 'sabari', 2.3);
      const service: DataService = TestBed.inject(DataService);
      service.addBook(book); // a new book is getting added
      //fail();
      const myBoolean: boolean = false;
      //expect(service.books.length).toEqual(5);
      //expect(myBoolean)

    });

  it('Check that the event emitter is firing an event when a book is added',
    () => {
      const service: DataService = TestBed.inject(DataService);
      spyOn(service.bookAddedEvent, 'emit');
      const book = new Book('testing book', 'balaji', 3.3);
      service.addBook(book);
      expect(service.bookAddedEvent.emit).toHaveBeenCalledWith(book);
    });

});
