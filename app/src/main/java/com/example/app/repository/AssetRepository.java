package com.example.app.repository;

import com.example.app.model.Asset;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AssetRepository extends MongoRepository<Asset, String> {
    Asset save(Asset asset);
    void deleteById(String assetId);
    Optional<Asset> findById(String assetId);
//    Asset findById(String assetId);

}
