import { Component, OnInit } from '@angular/core';
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
  
  constructor(private assignmentService :AssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignments()
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

}
