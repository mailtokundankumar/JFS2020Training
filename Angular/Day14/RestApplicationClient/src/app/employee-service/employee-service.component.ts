import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-service',
  templateUrl: './employee-service.component.html',
  styleUrls: ['./employee-service.component.css']
})
export class EmployeeServiceComponent implements OnInit {

  employees: Array<Employee>;
  selectedEmployee: Employee;
  message: string;
  loadingData: boolean;
  reloadAttempts: number = 0;
  constructor(private restService: RestService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.employees = new Array<Employee>();
  }

  loadData() {
    this.restService.getAllEmployeeDetails().subscribe(
      (data) => {
        this.loadingData = false;
        this.employees = data;
        //console.log(data);
        // for (let o of data) {
        //   let eobj: Employee = Employee.fromHttp(o);
        //   //console.log(eobj);
        //   this.employees.push(eobj);
        // }
      },
      (error) => {
        this.loadingData = true;
        if (error.status === 402) {
          this.message = 'Sorry - You need to pay to use the application ' + error;
        } else {
          this.reloadAttempts++;
          if (this.reloadAttempts <= 20) {
            this.message = 'Sorry - Something went wrong, please try again. ' + error;
            this.loadData(); //reccursion call
          }
          //console.log('error', error);
        }

        //this.message = "Sorry - Something Went Wrong, Please Try Again";
      }
    );
  }

  ngOnInit(): void {

    // ActivatedRoute Can help to get the Activated URL's Query Parameter
    this.loadData();
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        //console.log(params);
        // http://localhost:4200/empdetails?eid=103
        const empId = params['eid']; //string
        //console.log(eid);
        this.selectedEmployee = this.employees.find((employee) => employee.employeeId === +empId);
        // + is used for string to number conversion

      }

    );

  }

  setEmployee(empId: number) {

    //this.selectedEmployee = this.employees.find((employee) => employee.employeeId === empId);
    this.router.navigate(['view'], { queryParams: { eid: empId } });
  }

}
