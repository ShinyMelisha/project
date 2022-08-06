import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './components/asset/add-asset/add-asset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ViewAssetComponent } from './components/asset/view-asset/view-asset.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { AssignComponent } from './components/assign/assign/assign.component';
import { ViewAssignmentComponent } from './components/assign/view-assignment/view-assignment.component';

const routes: Routes = [
  {path:"", component:LoginComponent},//need to do canActivate:[authGuard]
  {path:"dashboard-admin",component:DashboardAdminComponent},
  {path:"add-asset",component:AddAssetComponent},
  {path:"view-asset",component:ViewAssetComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"view-employee",component:ViewEmployeeComponent},
  {path:"assign",component:AssignComponent},
  {path:"view-assign",component:ViewAssignmentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
