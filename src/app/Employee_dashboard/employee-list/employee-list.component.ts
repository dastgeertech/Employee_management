import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any;
  constructor(private service: EmployeeService) { 
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.getEmployees().subscribe(res => {
      this.employeeList = res;
    })
  
  }

  deleteEmployee(id: any){
    this.service.deleteEmployee(id).subscribe(res =>{
      alert('Deleted Sucessfully');
      this.getList()
    })
  }

}
