package com.example.app.service;

import com.example.app.model.Asset;
import com.example.app.model.Assignments;
import com.example.app.model.Employee;
import com.example.app.repository.AssignmentRepository;
import com.example.app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public Employee editEmployee(Employee  employee){
        return employeeRepository.save(employee);
    }
    public void deleteByEmployeeId(String employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
