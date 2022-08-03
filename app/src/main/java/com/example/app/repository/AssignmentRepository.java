package com.example.app.repository;

import com.example.app.model.Asset;
import com.example.app.model.Assignments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.expression.spel.ast.Assign;

public interface AssignmentRepository extends MongoRepository<Assignments,String> {
    Assignments save(Assignments assignments);
    void deleteById(String assignmentId);
}
