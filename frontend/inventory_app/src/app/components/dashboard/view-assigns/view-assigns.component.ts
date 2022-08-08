import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/core/assignment.service';
import { Assignment } from 'src/app/shared/models/assignment.model';

@Component({
  selector: 'app-view-assigns',
  templateUrl: './view-assigns.component.html',
  styleUrls: ['./view-assigns.component.scss']
})
export class ViewAssignsComponent implements OnInit {

  public assignments: any = [];
  public assignment:any;
  private getid:any;
  public mainModel = new Assignment();

  
 
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
   
 getId(id: any) {
  this.getid = id;
}

}
