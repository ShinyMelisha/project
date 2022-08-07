package com.example.app.service;

import com.example.app.model.Asset;
import com.example.app.repository.AssetRepository;
import com.example.app.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.ResourceAccessException;

import java.util.Optional;

@Service
public class AssetService {
    @Autowired
    AssetRepository assetRepository;

//    @ExceptionHandler(ResourceNotFoundException.class)



    public Asset addAsset(Asset asset) throws ResourceNotFoundException{
        Optional<Asset> assetCheck = assetRepository.findById(asset.getAssetId());
        if (!assetCheck.isPresent()){
            return assetRepository.save(asset);
        }else {
            throw new ResourceNotFoundException("Id is already there");
        }
    }


    public String deleteByAssetId(String assetId)  {
        Optional<Asset> asset = assetRepository.findById(assetId);
        if (assetId == null) {
            return "Id must not be null";
        }
        if(!asset.isPresent()){
            return "Invalid Id";
        }
            assetRepository.deleteById(assetId);
            return "Successfully deleted";
    }


    public Asset editAsset(Asset asset){
        return assetRepository.save(asset);
    }


    public Optional<Asset> getAssetById(String assetId) {
        Optional<Asset> asset = assetRepository.findById(assetId);
        if(assetId!=null){
            return asset;
        }
        if(!asset.isPresent()){
            throw new ResourceNotFoundException("Invalid");
        }
        return assetRepository.findById(assetId);

    }
}
