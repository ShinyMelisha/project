package com.example.app.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Map;
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class Error {
    private String message;
    private int status;
    private Long timestamp;
    private String path;
    Map<String,String> validationErrors;


    public Error(String message, int status, Long timestamp, String path) {
        super();
        this.message = message;
        this.status = status;
        this.timestamp = new Date().getTime();
        this.path = path;
    }

    public Error(int i, String message, String servletPath) {
    }


    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Map<String, String> getValidationErrors() {
        return validationErrors;
    }

    public void setValidationErrors(Map<String, String> validationErrors) {
        this.validationErrors = validationErrors;
    }
}
