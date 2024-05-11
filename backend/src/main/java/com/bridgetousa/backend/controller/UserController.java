package com.bridgetousa.backend.controller;

import com.bridgetousa.backend.model.User;
import com.bridgetousa.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.validation.ObjectError;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/connectWithUs")
@CrossOrigin
@Validated
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/send")
    public String send(@Valid @RequestBody User user, Errors errors) {
        validate(user);


        if (errors.hasErrors()) {
            return errors.getAllErrors().stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.joining(", "));
        }
        userService.saveUser(user);
        return "Getting info about new user successfully!";
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleValidationExceptions(MethodArgumentNotValidException ex) {
        return ex.getBindingResult().getAllErrors().stream()
                .map(ObjectError::getDefaultMessage)
                .collect(Collectors.joining(", "));
    }
    private void validate(User user){
        if (user.getName().isEmpty()) {
            throw new IllegalArgumentException("Name is required");
        }
        if (user.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email is required");
        }
        if (!user.getEmail().matches("^[a-zA-Z0-9.,;:]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]$")) {
            throw new IllegalArgumentException("Email is invalid");
        }
        if (user.getPhoneNumber().isEmpty()) {
            throw new IllegalArgumentException("Phone number is required");
        }
    }
}
