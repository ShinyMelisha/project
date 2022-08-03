package com.example.app.service;

import com.example.app.model.Assignment;
import com.example.app.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {
    @Autowired
    AssignmentRepository assignmentRepository;

    public Assignment addAssignment(Assignment assignment){
        return assignmentRepository.save(assignment);
    }
    public void deleteByAssignmentId(String assignmentId) {
        assignmentRepository.deleteById(assignmentId);
    }
    public Assignment editAssignment(Assignment assignment){
        return assignmentRepository.save(assignment);
    }
}
