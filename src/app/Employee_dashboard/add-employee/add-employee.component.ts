import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee[] = [];

  constructor(private service: EmployeeService, private location: Location) {
   }

  ngOnInit(): void {
  }

  createEmployee(employee: any){
    this.service.createEmployee(employee).subscribe(res=>{
      this.employee.push(res);
      alert('Employee Added Sucessfully');
      this.location.back();
    })
  }

}
