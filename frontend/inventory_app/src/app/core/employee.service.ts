import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../shared/models/employee.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private apiService: ApiService,private http: HttpClient,) { }
  addEmployee(employeeData: Employee): Promise<any> {

    console.log(employeeData)
    return new Promise((resolve) => {
      this.apiService.post(`${environment.backendUrl}emp/add`, employeeData).subscribe(
        res => {
          console.log(res)
          resolve(true)
          //console.log(res.roles)
        }
      );
      resolve(false)
    });
  }
  getAllEmployee(): Observable<Employee> {
    // console.log(assetData)
     return this.http.get<any>(`${environment.backendUrl}emp/all`)
   }
   deleteEmployee(id: string): Observable<Employee> {
    console.log(id)
    return this.http.delete<any>(`${environment.backendUrl}emp/delete/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

}
