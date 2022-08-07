package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document(collection = "assignments")
@Getter
@Setter
@NoArgsConstructor

public class Assignment {
    @Id
    @NotNull(message = "Assignment Id should not be null")
    private String assignmentId;

    @NotNull(message = "Employee Id should not be null")
    private String employeeId;

    @NotNull(message = "Asset Id should not be null")
    private String assetId;
}
