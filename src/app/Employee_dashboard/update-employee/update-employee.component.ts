import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: any;
  constructor(private service: EmployeeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }

  getEmployeeById(){
    const id = this.route.snapshot.paramMap.get('id')
    return this.service.getDetailsEmployee(id).subscribe(res => {
      this.employee = res;
    })
  }

  submit(id: any){
    this.service.updateEmployee(id.id, this.employee).subscribe(result =>{
      alert('Updated Sucessfully');
      this.location.back();
    })
  }

}
