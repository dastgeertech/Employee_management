import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: any;

  constructor(private rooute: ActivatedRoute, private service: EmployeeService) { }

  ngOnInit(): void {
    this.getDetailById();
  }

  getDetailById(){
    const id = this.rooute.snapshot.paramMap.get('id');
    this.service.getDetailsEmployee(id).subscribe( res => {
      this.employee = res;
    })
  }

}
