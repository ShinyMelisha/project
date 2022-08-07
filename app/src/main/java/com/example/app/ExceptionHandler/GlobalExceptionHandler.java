//package com.example.app.ExceptionHandler;
//
//import com.example.app.model.Error;
//import com.example.app.utils.ResourceNotFoundException;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.FieldError;
//import org.springframework.web.bind.MethodArgumentNotValidException;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@RestControllerAdvice
//public class GlobalExceptionHandler {
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public Error handleInvalidArgument(MethodArgumentNotValidException ex,HttpServletRequest request){
//        Error error =  new Error(400,ex.getMessage(), request.getServletPath());
//        BindingResult bindingResult = ex.getBindingResult();
//        Map<String,String> validationErrors = new HashMap<>();
//        for(FieldError fieldError: bindingResult.getFieldErrors()){
//            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
//        }
//        error.setValidationErrors(validationErrors);
//        return error;
//
////    public Map<String,String> handleInvalidArgument(MethodArgumentNotValidException ex){
////        Map<String,String> errorMap = new HashMap<>();
////        ex.getBindingResult().getFieldErrors().forEach(error->{
////            errorMap.put(error.getField(), error.getDefaultMessage());
////        });
////        return errorMap;
//
//    }
////    @ResponseStatus(HttpStatus.BAD_REQUEST)
////    @ExceptionHandler(ResourceNotFoundException.class)
////    public Map<String,String>handleInvalidArgument (ResourceNotFoundException ex){
////        Map<String,String> errorMap = new HashMap<>();
////        errorMap.put("errorMessage",ex.getMessage());
////        return errorMap;
//    }
//
//
//
////    @ExceptionHandler(ResourceNotFoundException.class)
////    public ResponseEntity<Object> resourceNotFound(ResourceNotFoundException ex,
////                                                   HttpServletRequest request) {
////        Error error = new Error();
////        error.setMessage(ex.getMessage());
////        error.setTimestamp(new Date().getTime());
////        error.setStatus(HttpStatus.NOT_FOUND.value());
////        return new ResponseEntity<>(error, null, HttpStatus.NOT_FOUND);
////    }
////
////    @ExceptionHandler(MethodArgumentNotValidException.class)
////    public ResponseEntity<Object> badRequest(MethodArgumentNotValidException ex,
////                                             HttpServletRequest request) {
////        Error error = new Error();
////        error.setMessage(ex.getMessage());
////        error.setTimestamp(new Date().getTime());
////        error.setStatus(HttpStatus.BAD_REQUEST.value());
////        return new ResponseEntity<>(error, null, HttpStatus.BAD_REQUEST);
////    }
//
