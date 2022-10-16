import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = environment.URL;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  
  httpOptions = {
    headers: this.headers
  };


  Employee: Employee[] = []

  constructor(private _http: HttpClient) { }

  createEmployee(data: Employee): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this._http.post(API_URL, data);
  }

  getEmployees(): Observable<Employee> {
  return this._http.get<Employee>(this.apiUrl);
  }

  getDetailsEmployee(id: any){
    return this._http.get(`${this.apiUrl}/${id}`)
  }

  updateEmployee(id: any, employee: Employee){
    let API_URL = `${this.apiUrl}/${id}`;
    return this._http.put(API_URL, employee);
  }

  deleteEmployee(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this._http.delete(API_URL);
  }
}
