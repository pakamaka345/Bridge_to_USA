package com.bridgetousa.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(max = 25, message = "Name is too long")
    @Column(length = 25)
    private String name;

    @NotBlank(message = "Email is required")
    @Pattern(regexp = "^[a-zA-Z0-9.,;:]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]$", message = "Email is invalid")
    @Size(max = 30, message = "Email is too long")
    @Column(length = 30)
    private String email;

    @Size(max = 20, message = "Phone number is too long")
    @Column(length = 20)
    private String phoneNumber;

    @Size(max = 25, message = "Telegram is too long")
    @Column(length = 25)
    private String telegram;

    private String description;
}
