import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee_dashboard/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './Employee_dashboard/employee-detail/employee-detail.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { UpdateEmployeeComponent } from './Employee_dashboard/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './Employee_dashboard/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    NavBarComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
