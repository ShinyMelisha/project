import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Assignment } from '../shared/models/assignment.model';
import { ApiService } from './api.service';
import { catchError, map, Observable, Subject ,tap} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  constructor(private apiService: ApiService,private http: HttpClient,) { }
  addAssignment(assignData:Assignment): Promise<any> {

    console.log(assignData)
    return new Promise((resolve) => {
      this.apiService.post(`${environment.backendUrl}assign/add`, assignData).subscribe(
        res => {
          console.log(res)
          resolve(true)
          //console.log(res.roles)
        }
      );
      resolve(false)
    });
  }

  getAllAssignments(): Observable<Assignment> {
    // console.log(assetData)
     return this.http.get<any>(`${environment.backendUrl}assign/all`)
   } 
   
   deleteAssignment(id: any): Observable<Assignment> {
    console.log(id)
    return this.http.delete<any>(`${environment.backendUrl}assign/delete/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }
  updateAssignment(assignData: Assignment): Observable<Assignment> {
    return this.http.put<any>(`${environment.backendUrl}assign/edit`, assignData).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  
}
}
