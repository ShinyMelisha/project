package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.model.Assignment;
import com.example.app.model.Employee;
import com.example.app.repository.AssetRepository;
import com.example.app.repository.EmployeeRepository;
import com.example.app.service.AssetService;
import com.example.app.service.EmployeeService;
import com.example.app.utils.ResourceNotFoundException;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;
@Validated
@RestController
@RequestMapping("/emp")
public class EmployeeController {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }

    @GetMapping("/view")
    public String viewEmployee() {
        return "This is view page";
    }
    @GetMapping("/all")
    public List<Employee> getAll(){
        List<Employee> employee = this.employeeRepository.findAll();
        return employee;
    }

    @PostMapping("/add")
    public String addEmployee(@Valid @RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return "Successfully added";
    }
    @PostMapping("/edit")
    public Employee editEmployee(@RequestBody Employee employee){

        return employeeService.editEmployee(employee);
    }
    @GetMapping("/get/{id}")
    public Optional<Employee> getEmployee(@PathVariable("id") String id)throws ResourceNotFoundException {
        return employeeService.getEmployeeById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteByEmployeeId(@PathVariable("id") String id){
        String result =employeeService.deleteByEmployeeId(id);
        return result;
    }
}
