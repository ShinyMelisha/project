package com.example.app.controller;

import com.example.app.model.Asset;
import com.example.app.model.Assignments;
import com.example.app.repository.AssetRepository;
import com.example.app.repository.AssignmentRepository;
import com.example.app.service.AssetService;
import com.example.app.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/assign")
public class AssignmentController {
    @Autowired
    AssignmentRepository assignmentRepository;

    @Autowired
    AssignmentService assignmentService;

    @GetMapping("/home")
    public String getHome() {
        return "This is home page";
    }

    @GetMapping("/view")
    public String viewAssignment() {
        return "This is view page";
    }
    @GetMapping("/all")
    public List<Assignments> getAll(){
        List<Assignments> assignments = this.assignmentRepository.findAll();
        return assignments;
    }

    @PostMapping("/add")
    public String addAssignment(@RequestBody Assignments assignments){
        assignmentService.addAssignment(assignments);
        return "Successfully added";
    }
    @PostMapping("/edit")
    public Assignments editAssignment(@RequestBody Assignments assignment){

        return assignmentService.editAssignment(assignment);
    }

    @DeleteMapping("/delete/{assignmentId}")
    public String deleteByAssignmentId(@PathVariable("assetId") String assignmentsId){
        assignmentService.deleteByAssignmentId(assignmentsId);
        return "Successfully deleted";
    }
}
