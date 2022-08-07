package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.repository.AssetRepository;
import com.example.app.service.AssetService;
import com.example.app.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/asset")
public class AssetController {

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    AssetService assetService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/view")
    public String getViewAsset() {
        return "This is view page";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public List<Asset> getAll(){
        List<Asset> assets = this.assetRepository.findAll();
        return assets;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public String addAsset(@RequestBody Asset asset){
        assetService.addAsset(asset);
        return "Successfully added";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/edit")
    public Asset editAsset( @Valid @RequestBody Asset asset){
        return assetService.editAsset(asset);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get/{assetId}")
    public Optional<Asset> getAsset(@PathVariable("assetId") String id) throws ResourceNotFoundException{
        return assetService.getAssetById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteByAssetId(@PathVariable("id") String id) {
        String result =assetService.deleteByAssetId(id);
        return result;
    }



}
