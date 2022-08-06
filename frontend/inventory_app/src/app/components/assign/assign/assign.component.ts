import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmentService } from 'src/app/core/assignment.service';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  assignForm = new FormGroup({
    assignmentId: new FormControl('', Validators.required),
    assetId: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
  });
  constructor(private assignService :AssignmentService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){

    console.log(this.assignForm.value)
    const assign = new Assignment();
    assign.assignmentId = this.assignForm.value.assignmentId!;
    assign.assetId= this.assignForm.value.assetId!;
    assign.employeeId = this.assignForm.value.employeeId!;
    this.assignService.addAssignment(assign)
  
   }

}
