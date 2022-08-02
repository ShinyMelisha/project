import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteAssetComponent } from './components/delete-asset/delete-asset.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';
import { LoginComponent } from './components/login/login.component';
import { ViewAssetComponent } from './components/view-asset/view-asset.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},//need to do canActivate:[authGuard]
  {path:"dashboard-admin",component:DashboardAdminComponent},
  {path:"add-asset",component:AddAssetComponent},
  {path:"view-asset",component:ViewAssetComponent},
  {path:"delete-asset",component:DeleteAssetComponent},
  {path:"edit-asset",component:EditAssetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
