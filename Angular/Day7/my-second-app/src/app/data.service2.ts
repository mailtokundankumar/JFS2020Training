import { DataService } from './data.service';
import { Injectable, Inject } from '@angular/core';
@Injectable({
  providedIn:'root'
})
export class DataService2{

  constructor( dataService: DataService){

  }
}

