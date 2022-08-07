import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignmentService } from 'src/app/core/assignment.service';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.scss']
})
export class ViewAssignmentComponent implements OnInit {
  public assignments: any = [];
  public assignment:any;
  private getid:any;
  public mainModel = new Assignment();

  
  assignForm = new FormGroup({
    assignmentId: new FormControl('', Validators.required),
    assetId: new FormControl('', Validators.required),
    employeeId: new FormControl('', Validators.required),
  });
  constructor(private assignmentService :AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignments()
  }
  onSubmit(){

    console.log(this.assignForm.value)
    const assign = new Assignment();
    assign.assignmentId = this.getid!;
    assign.assetId= this.assignForm.value.assetId!;
    assign.employeeId = this.assignForm.value.employeeId!;
    this.assignmentService.addAssignment(assign)
  
   }
  
  getAllAssignments():void { 
    this.assignmentService 
      .getAllAssignments()
      .subscribe((response: any) => 
      (this.assignments=response));
      console.log(this.assignments.response)
  }
  deleteAssignment(assignment:Assignment) :void{
    console.log(assignment.assignmentId)
    this.assignmentService.deleteAssignment(assignment.assignmentId).subscribe((response) => {
      console.log(response);

    // .subscribe() => (this.getAllAssets());
    
    }
 ) }
 getId(id: any) {
  this.getid = id;
}

updateAssignment(): void {
  this.assignmentService
    .updateAssignment(this.mainModel)
    .subscribe((response) => (this.assignment));
  console.log(this.assignment);
}

}
