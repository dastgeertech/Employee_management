import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Employee_dashboard/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './Employee_dashboard/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './Employee_dashboard/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './Employee_dashboard/update-employee/update-employee.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  { path: 'addEmployee', component: AddEmployeeComponent },
  {path: 'details/:id', component: EmployeeDetailComponent},
  { path: 'editEmployee/:id', component: UpdateEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
