package com.example.app.repository;

import com.example.app.model.Asset;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssetRepository extends MongoRepository<Asset, String> {
    Asset save(Asset asset);
    void deleteById(String assetId);

}
