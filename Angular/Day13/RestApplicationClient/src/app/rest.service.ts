import { Employee } from './employee.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  restUrl: string;

  constructor(private httpService: HttpClient) {
    this.restUrl = environment.restUrl;
  }

  public getAllEmployeeDetails(): Observable<Employee[]> {

    //Pre-Process the Incoming Data prior the data
    //Goes to the Coomponent
    let employees = new Array<Employee>();

    //Jaba 8 Streams -> map
    return this.httpService.get<Employee[]>(this.restUrl + '/api/ems')
      .pipe(
        map(data => {
          for (let d of data) {
            employees.push(Employee.fromHttp(d));
          }
          return employees;
        })
      );

  }


}
