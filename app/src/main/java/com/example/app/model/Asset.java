package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document(collection = "assets")
@Getter
@Setter
@NoArgsConstructor
public class Asset {
    @Id
    @NotNull(message = "Asset ID cannot be  null")
    private String assetId;

    @NotNull(message = "Asset name cannot be  null")
    private String assetName;

    @NotNull(message = "Asset type cannot be  null")
    private String assetType;

    @NotNull(message = "Asset given date cannot be  null")
    private String givenDate;

    @NotNull(message = "Asset return date cannot be  null")
    private String returnDate;
}
