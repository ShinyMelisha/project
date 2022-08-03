package com.example.app.service;

import com.example.app.model.Asset;
import com.example.app.model.Assignments;
import com.example.app.repository.AssetRepository;
import com.example.app.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssignmentService {
    @Autowired
    AssignmentRepository assignmentRepository;

    public Assignments addAssignment(Assignments assignments){
        return assignmentRepository.save(assignments);
    }
    public void deleteByAssignmentId(String assignmentId) {
        assignmentRepository.deleteById(assignmentId);
    }
    public Assignments editAssignment(Assignments assignments){
        return assignmentRepository.save(assignments);
    }
}
