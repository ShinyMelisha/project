package com.example.app.service;

import com.example.app.model.Asset;
import com.example.app.model.Assignment;
import com.example.app.model.Employee;
import com.example.app.repository.AssetRepository;
import com.example.app.repository.AssignmentRepository;
import com.example.app.repository.EmployeeRepository;
import com.example.app.utils.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AssignmentService {
    @Autowired
    AssignmentRepository assignmentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    AssetRepository assetRepository;

    public String addAssignment(Assignment assignment){

        Optional<Assignment> assignCheck = assignmentRepository.findById(assignment.getAssetId());
        Optional<Asset> assetCheck= assetRepository.findById(assignment.getAssetId());
        Optional<Employee> employeeCheck = employeeRepository.findById(assignment.getEmployeeId());

        if (!assignCheck.isPresent() && !assetCheck.isPresent() && !employeeCheck.isPresent()){
            assignmentRepository.save(assignment);
            return "Successfully added";
        }else {
            throw new ResourceNotFoundException("Id is already there");
        }
    }

    public String deleteByAssignmentId(String assignmentId) {
        Optional<Assignment> assignment = assignmentRepository.findById(assignmentId);
        if (assignmentId == null) {
            return "Id must not be null";
        }
        if(!assignment.isPresent()){
            return "Invalid Id";
        }
        assignmentRepository.deleteById(assignmentId);
        return "Successfully deleted";
    }

    public Assignment editAssignment(Assignment assignment){
        return assignmentRepository.save(assignment);
    }

    public Optional<Assignment> getAssignmentById(String assignmentId) {
        Optional<Assignment> assignment = assignmentRepository.findById(assignmentId);
        if (assignmentId != null) {
            return assignment;
        }
        if (!assignment.isPresent()) {
            throw new ResourceNotFoundException("Invalid");
        }
        return assignmentRepository.findById(assignmentId);
    }
}
