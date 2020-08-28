import { Employee } from './employee.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  validateUser(name: string, password: string): Observable<string> {

    const authData = btoa(`${name}:${password}`);
    console.log(authData);
    const headerInfo = new HttpHeaders().append('Authorization', 'Basic ' + authData);
    return this.httpService.get<string>(this.restUrl + '/api/basicAuth/validate', { headers: headerInfo });
  }

  public insertEmployeeDetails(employee: Employee): Observable<boolean> {

     return this.httpService.post<boolean>(this.restUrl + "/api/ems/insert", employee);
  }

}
