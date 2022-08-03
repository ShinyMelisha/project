package com.example.app.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employees")
@Getter
@Setter
@NoArgsConstructor
public class Employee {
    @Id
    private String employeeId;
    private String employeeName;
    private String employeeAddress;
    private String employeeContact;

}
