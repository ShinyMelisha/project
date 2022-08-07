import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from 'src/app/shared/models/asset.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssetService } from 'src/app/core/asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {
  public assets: any = [];

  assetForm = new FormGroup({
    assetId: new FormControl('', Validators.required),
    assetName: new FormControl('', Validators.required),
    assetType: new FormControl('', Validators.required),
    givenDate: new FormControl('', Validators.required),
    returnDate: new FormControl('', Validators.required)

  });
  // assetForm: any;
  // assetService: any;

  constructor(private assetService :AssetService,private router: Router) { }

  ngOnInit(): void {
  
  }
  onSubmit(){

    console.log(this.assetForm.value)
    const asset = new Asset();
    asset.assetId = this.assetForm.value.assetId!;
    asset.assetName = this.assetForm.value.assetName!;
    asset.assetType = this.assetForm.value.assetType!;
    asset.givenDate =  this.assetForm.value.givenDate!;
    asset.returnDate = this.assetForm.value.returnDate!;
    this.assetService.addAsset(asset)
  
   }
  //  getAllAsset():void{

  // }
  // getAllAsset(): void {
  //   this.assetService
  //     .getAllAsset()
  //     .subscribe((response) => (this.assets=response));
  // }
  
}
