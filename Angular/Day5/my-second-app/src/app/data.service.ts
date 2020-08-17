import { dataServiceFactory } from './instance.factory';
import { Injectable } from '@angular/core';
import { Book } from './Book';
@Injectable({
  providedIn:'root',
  useFactory:dataServiceFactory
})
export class DataService{

  public books: Array<Book>;

   constructor(x: number){

    this.books = new Array<Book>();

    const book1 = new Book('first book', 'Matt', 5.9);
    const book2 = new Book('second book', 'James', 3.5);
    const book3 = new Book('third book', 'Philip', 8.7);
    const book4 = new Book('fourth book', 'John', 7.7);
    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
    this.books.push(book4);

   }
}
