import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Asset } from '../shared/models/asset.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private apiService: ApiService) { }
  addAsset(assetData: Asset): Promise<any> {

    console.log(assetData)
    return new Promise((resolve) => {
      this.apiService.post(`${environment.backendUrl}asset/add`, assetData).subscribe(
        res => {
          console.log(res)

          //console.log(res.roles)


        }

      );
    });

  }
}

