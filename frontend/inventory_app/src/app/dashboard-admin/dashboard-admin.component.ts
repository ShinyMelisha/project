import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addAsset(){
    this.router.navigate(['/add-asset'])  };
    viewAsset(){
      this.router.navigate(['/view-asset'])  };
      editAsset(){
        this.router.navigate(['/edit-asset'])  };
        deleteAsset(){
          this.router.navigate(['/delete-asset'])  };
      
    
  

}
