import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postWithoutHeader(apiUrl: string, requestObject: {}) {
    return this.http.post<any>(apiUrl, requestObject).pipe( 
      map(response => {
        return response;
      }),
       catchError(async (err) => console.log(err)
      ));
  }
  get(apiUrl: string, headerType: {}) {
    const header = new HttpHeaders(headerType);
    return this.http.get(apiUrl, { headers: header }).pipe(
      map(response => {
        return response;
      }),
      catchError(async (err) => console.log(err)));
  }
}
