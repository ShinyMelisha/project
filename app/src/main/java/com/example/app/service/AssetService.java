package com.example.app.service;

import com.example.app.model.Asset;
import com.example.app.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AssetService {
    @Autowired
    AssetRepository assetRepository;

    public Asset addAsset(Asset asset){
        return assetRepository.save(asset);
    }

    public void deleteByAssetId(String assetId) {
        assetRepository.deleteById(assetId);
    }
    public Asset editAsset(Asset asset){
        return assetRepository.save(asset);
    }
}
