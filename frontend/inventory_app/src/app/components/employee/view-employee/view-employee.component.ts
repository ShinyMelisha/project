import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  private getid:any;
  public mainModel = new Employee();

  employeeForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });
  
  
  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.refreshNeeded$.subscribe(() => {
      this.getAllEmployees()
    });
    this.getAllEmployees()
  }
  onSubmit(){

    console.log(this.employeeForm.value)
    const employee = new Employee();
    employee.id = this.getid!;
    employee.name = this.employeeForm.value.name!;
    employee.address = this.employeeForm.value.address!;
    employee.contact =  this.employeeForm.value.contact!;
    this.employeeService.addEmployee(employee)
  
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
getId(id: any) {
  this.getid = id;
}

updateEmployee(): void {
  this.employeeService
    .updateEmployee(this.mainModel)
    .subscribe((response) => (this.employee));
  console.log(this.employee);
}


}
