package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.NotNull;
@Validated
@Document(collection = "employees")
@Getter
@Setter
@NoArgsConstructor
public class Employee {
    @Id

    @NotNull(message = "Employee Id should not be null")
    private String id;

    @NotNull(message = "Employee name should not be null")
    private String name;

    @NotNull(message = "Employee address should not be null")
    private String address;

    @NotNull(message = "Employee contact should not be null")
    private String contact;

}
