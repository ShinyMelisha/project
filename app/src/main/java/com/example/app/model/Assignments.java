package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assignments")
@Getter
@Setter
@NoArgsConstructor

public class Assignments {
    @Id
    private String assignmentId;
    private String employeeId;
    private String assetId;
}
