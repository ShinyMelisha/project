package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.model.Employee;
import com.example.app.repository.AssetRepository;
import com.example.app.repository.EmployeeRepository;
import com.example.app.service.AssetService;
import com.example.app.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emp")
public class EmployeeController {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EmployeeService employeeService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/view")
    public String viewEmployee() {
        return "This is view page";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public List<Employee> getAll(){
        List<Employee> employee = this.employeeRepository.findAll();
        return employee;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return "Successfully added";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/edit")
    public Employee editEmployee(@RequestBody Employee employee){

        return employeeService.editEmployee(employee);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{employeeId}")
    public String deleteByEmployeeId(@PathVariable("employeeId") String employeeId){
        employeeService.deleteByEmployeeId(employeeId);
        return "Successfully deleted";
    }
}
