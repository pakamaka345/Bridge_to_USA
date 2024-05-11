package com.bridgetousa.backend.service;

import com.bridgetousa.backend.model.User;
import com.bridgetousa.backend.repository.UserRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final JavaMailSender mailSender;
    public UserServiceImpl(UserRepository userRepository, JavaMailSender mailSender) {
        this.userRepository = userRepository;
        this.mailSender = mailSender;
    }
    @Override
    public void saveUser(User user) {
        userRepository.save(user);
        sendEmail(user);
    }
    private void sendEmail(User user) {
        StringBuilder messageText = new StringBuilder();
        messageText.append("Новий користувач залишив свої контактні дані\n");
        messageText.append("Ім'я: ").append(user.getName()).append("\n");
        messageText.append("Email: ").append(user.getEmail()).append("\n");
        messageText.append("Телефон: ").append(user.getPhoneNumber()).append("\n");
        if (user.getTelegram() != null) {
            messageText.append("Telegram: ").append(user.getTelegram()).append("\n");
        }
        if (user.getDescription() != null) {
            messageText.append("Опис: ").append(user.getDescription()).append("\n");
        }
        String text = messageText.toString();


        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("bridgetousa34@gmail.com");
        message.setTo("pakamaka345@gmail.com");
        message.setSubject("New user feedback");
        message.setText(text);
        mailSender.send(message);

        System.out.println("Email sent successfully");
    }
}
