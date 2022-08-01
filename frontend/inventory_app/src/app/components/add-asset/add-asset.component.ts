import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User('22','shiny','fer','colombo','12WE','laptop','dell','22/3/22','12/5/22')
 onSubmit(){
  console.log(this.userModel)
 }

}
