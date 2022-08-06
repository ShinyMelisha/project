import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/employee.service';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });
  constructor( private employeeService:EmployeeService,private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit(){

    console.log(this.employeeForm.value)
    const employee = new Employee();
    employee.id = this.employeeForm.value.id!;
    employee.name = this.employeeForm.value.name!;
    employee.address = this.employeeForm.value.address!;
    employee.contact =  this.employeeForm.value.contact!;
    this.employeeService.addEmployee(employee)
  
   }

}
