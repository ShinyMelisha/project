package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.xml.transform.sax.SAXResult;

@Document(collection = "assets")
@Getter
@Setter
@NoArgsConstructor
public class Asset {
    @Id
    private String assetId;
    private String assetName;
    private String assetType;
    private String givenDate;
    private String returnDate;
}
