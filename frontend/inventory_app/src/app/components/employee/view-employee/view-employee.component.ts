import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/employee.service';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  public employees: any = [];
  public employee:any;
  
  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.refreshNeeded$.subscribe(() => {
      this.getAllEmployees()
    });
    this.getAllEmployees()
  }
  getAllEmployees(): void { 
    this.employeeService 
      .getAllEmployee()
      .subscribe((response) => 
      (this.employees=response));
      console.log(this.employees.response)
  }
  deleteEmployee(employee:Employee) :void{
    console.log(employee.id)
    this.employeeService.deleteEmployee(employee.id).subscribe((response) => {
      console.log(response);  
  })
  
}


}
