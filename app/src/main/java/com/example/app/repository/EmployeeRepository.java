package com.example.app.repository;

import com.example.app.model.Asset;
import com.example.app.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee,String> {
    Employee save(Employee employee);
    void deleteById(String employeeId);

}
