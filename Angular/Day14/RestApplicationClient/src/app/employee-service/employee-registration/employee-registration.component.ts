import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  employee: Employee;

  constructor(private restService: RestService) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
    this.restService.insertEmployeeDetails(this.employee).subscribe(

        (data) => {
          console.log(data);
          //this.router
        }

    );

  }

}
