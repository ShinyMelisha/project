package com.example.app.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class LoginRequest {
    private String username;
    private String password;
}
