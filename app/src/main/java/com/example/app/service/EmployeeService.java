package com.example.app.service;


import com.example.app.model.Asset;
import com.example.app.model.Assignment;
import com.example.app.model.Employee;
import com.example.app.repository.EmployeeRepository;
import com.example.app.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee){
        Optional<Employee> employeeCheck = employeeRepository.findById(employee.getId());
        if (!employeeCheck.isPresent()){
            return employeeRepository.save(employee);
        }else {
            throw new ResourceNotFoundException("Id is already there");
        }
    }
    public Employee editEmployee(Employee  employee){
        return employeeRepository.save(employee);
    }
    public String deleteByEmployeeId(String id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if (id == null) {
            return "Id must not be null";
        }
        if(!employee.isPresent()){
            return "Invalid Id";
        }
        employeeRepository.deleteById(id);
        return "Successfully deleted";
    }

    public Optional<Employee> getEmployeeById(String id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if (id != null) {
            return employee;
        }
        if (!employee.isPresent()) {
            throw new ResourceNotFoundException("Invalid");
        }
        return employeeRepository.findById(id);
    }
}
