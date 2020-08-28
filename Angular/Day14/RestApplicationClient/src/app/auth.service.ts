import { Injectable, EventEmitter } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false; //authentication flag

  authenticationResultEvent = new EventEmitter<boolean>();

  constructor(private restService: RestService) { }

  authenticate(name: string, password: string) {//: boolean {


    //This is for Asynchronous Communication
    this.restService.validateUser(name, password).subscribe(

      (next) => {
        console.log(next);
        this.isAuthenticated = true;
        this.authenticationResultEvent.emit(true);
      },

      (error) => {
        this.isAuthenticated = false;
        this.authenticationResultEvent.emit(false);
      }

    );

    // if (name === 'sundar' && password === 'pichai') {
    //   this.isAuthenticated = true;
    // }

    //This is for Synchronous Communication
    //return this.isAuthenticated;
  }
}
