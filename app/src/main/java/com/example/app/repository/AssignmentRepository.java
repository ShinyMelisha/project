package com.example.app.repository;

import com.example.app.model.Asset;
import com.example.app.model.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AssignmentRepository extends MongoRepository<Assignment,String> {
    Assignment save(Assignment assignment);
    void deleteById(String assignmentId);
    Optional<Assignment> findById(String assignmentId);
}
