import { DataService } from './../data.service';
import { Book } from './../Book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';

describe('Page1Component', () => {

  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('no of books written by Matt is getting incremented',
  //   () => {

  //     const startValue = component.numberOfBooksWrittenByMatt;
  //     const book = new Book('page1testing', 'Matt', 4.5);
  //     const dataService = fixture.debugElement.injector.get(DataService);
  //     //component.dataService.addBook(book); //its not accesible becoz the property is private
  //     dataService.addBook(book);
  //     expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  //   }
  // );

  fit('no of books written by Matt is getting incremented version 2',
    () => {

      const startValue = component.numberOfBooksWrittenByMatt;
      const book = new Book('page1testing', 'Matt', 4.5);
      //const dataService = fixture.debugElement.injector.get(DataService);
      //component.dataService.addBook(book); //its not accesible becoz the property is private
      const dataService = new DataService();
      component = new Page1Component(dataService);
      component.ngOnInit();
      dataService.addBook(book);
      expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
    }
  );


});
