import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
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
  public mainModel = new Asset();

  assetForm = new FormGroup({
    assetId: new FormControl('', Validators.required),
    assetName: new FormControl('', Validators.required),
    assetType: new FormControl('', Validators.required),
    givenDate: new FormControl('', Validators.required),
    returnDate: new FormControl('', Validators.required)

  });
  
  constructor(private assetService :AssetService) { }
  public createdBy1!: string;
  private getid:any;
  private componentDestroyed$ = new Subject<void>();

  ngOnInit(): void {
   
    this.assetService.refreshNeeded$.subscribe(() => {
      console.log("hi")
      this.getAllAssets()
    });
    this.getAllAssets()    
  }
  
  onSubmit(){

    console.log(this.assetForm.value)
    const asset = new Asset();
    asset.assetId = this.getid!;
    asset.assetName = this.assetForm.value.assetName!;
    asset.assetType = this.assetForm.value.assetType!;
    asset.givenDate =  this.assetForm.value.givenDate!;
    asset.returnDate = this.assetForm.value.returnDate!;
    this.assetService.addAsset(asset)
  console.log(asset)
   }
  getAllAssets(): void { 
    this.assetService 
      .getAllAsset()
      .subscribe((response) => 
      (this.assets=response));
      console.log(this.assets.response)
  }
  deleteAsset(asset:Asset) :void{
    this.assetService.deleteAsset(asset.assetId).subscribe((response) => {
      console.log(response);
    
  })
  
}
getId(id: any) {
  this.getid = id;
}

updateAsset(): void {
  this.assetService
    .updateAsset(this.mainModel)
    .subscribe((response) => (this.asset));
  console.log(this.asset);
}

}
