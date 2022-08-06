import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/core/asset.service';
import { Asset } from 'src/app/shared/models/asset.model';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})


export class ViewAssetComponent implements OnInit {
  public assets: any = [];
  public asset:any;
  
  constructor(private assetService :AssetService) { }

  ngOnInit(): void {
   
    this.assetService.refreshNeeded$.subscribe(() => {
      this.getAllAssets()
    });
    this.getAllAssets()
  }
  getAllAssets(): void { 
    this.assetService 
      .getAllAsset()
      .subscribe((response) => 
      (this.assets=response));
      console.log(this.assets.response)
  }
  deleteAsset(asset:Asset) :void{
    console.log(asset.assetId)
    this.assetService.deleteAsset(asset.assetId).subscribe((response) => {
      console.log(response);

    // .subscribe() => (this.getAllAssets());
    
  })
  
}

}
