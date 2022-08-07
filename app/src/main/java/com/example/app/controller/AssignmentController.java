package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.model.Assignment;
import com.example.app.repository.AssignmentRepository;
import com.example.app.service.AssignmentService;
import com.example.app.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/assign")
public class AssignmentController {
    @Autowired
    AssignmentRepository assignmentRepository;

    @Autowired
    AssignmentService assignmentService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/view")
    public String viewAssignment() {
        return "This is view page";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public List<Assignment> getAll(){
        List<Assignment> assignments = this.assignmentRepository.findAll();
        return assignments;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public String addAssignment(@Valid @RequestBody Assignment assignment){
        assignmentService.addAssignment(assignment);
        return "Successfully added";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/edit")
    public Assignment editAssignment(@RequestBody Assignment assignment){

        return assignmentService.editAssignment(assignment);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{assignmentId}")
    public String deleteByAssignmentId(@PathVariable("assignmentId") String assignmentsId){
        assignmentService.deleteByAssignmentId(assignmentsId);
        return "Successfully deleted";
}
    @GetMapping("/get/{id}")
    public Optional<Assignment> getAssignment(@PathVariable("id") String id)throws ResourceNotFoundException {
        return assignmentService.getAssignmentById(id);
    }

   
    
}
