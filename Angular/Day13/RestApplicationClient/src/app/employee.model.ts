export class Employee{

  employeeId: number;
  employeeName: string;
  employeeSalary: number;
  employeeGrade: string;

  //Helper Method
  static fromHttp(employee) : Employee {

    const newEmployee = new Employee();
    newEmployee.employeeId = employee.employeeId;
    newEmployee.employeeName = employee.employeeName;
    newEmployee.employeeSalary = employee.employeeSalary;
    newEmployee.employeeGrade = employee.employeeGrade;
    return newEmployee;
  }

}
