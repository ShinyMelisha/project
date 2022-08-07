import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { Observable,Subject,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asset } from '../shared/models/asset.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  // deleteAsset(aseetId: any) {
  //   throw new Error('Method not implemented.');
  // }
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private apiService: ApiService,private http: HttpClient,) { }
  addAsset(assetData: Asset): Promise<any> {

    console.log(assetData)
    return new Promise((resolve) => {
      this.apiService.post(`${environment.backendUrl}asset/add`, assetData).subscribe(
        res => {
          console.log(res)
          resolve(true)
          //console.log(res.roles)
        }     
      );
      resolve(false)
    });

  }
  
  getAllAsset(): Observable<Asset> {
   // console.log(assetData)
    return this.http.get<any>(`${environment.backendUrl}asset/all`)
  }

   deleteAsset(id: string): Observable<Asset> {
    console.log(id)
    return this.http.delete<any>(`${environment.backendUrl}asset/delete/${id}`).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }
  
}

