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
      addEmployee(){
        this.router.navigate(['/add-employee'])  };
        viewEmployee(){
          this.router.navigate(['/view-employee'])  };
          viewAssignment(){
            this.router.navigate(['/view-assign'])  };
            Assign(){
              this.router.navigate(['/assign'])  }; 
}
