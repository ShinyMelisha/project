package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.repository.AssetRepository;
import com.example.app.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.AccessType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/asset")
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    AssetService assetService;

    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }

    @GetMapping("/view")
    public String getViewAsset() {
        return "This is view page";
    }

    @GetMapping("/all")
    public List<Asset> getAll(){
        List<Asset> assets = this.assetRepository.findAll();
        return assets;
    }

    @ PostMapping("/add")
    public String addAsset(@RequestBody Asset asset){
        assetService.addAsset(asset);
        return "Successfully added";
    }
    @PostMapping("/edit")
    public Asset editAsset(@RequestBody Asset asset){

        return assetService.editAsset(asset);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteByAssetId(@PathVariable("id") String id){
        assetService.deleteByAssetId(id);
        return "Successfully deleted";
    }

}
