package com.example.app.repository;

import com.example.app.model.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssignmentRepository extends MongoRepository<Assignment,String> {
    Assignment save(Assignment assignment);
    void deleteById(String assignmentId);
}
