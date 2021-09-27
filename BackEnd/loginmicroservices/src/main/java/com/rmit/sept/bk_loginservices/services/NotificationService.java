package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.UserNotFoundException;
import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    @Autowired
    private UserRepository userRepository;

    public void addNotificationForUser(Long userId, Notification notification) {
        User user = userRepository.getById(userId);
        if (user == null) throw new UserNotFoundException("User not found");

        notification.setUser(user);
        user.getNotifications().add(notification);
        userRepository.save(user);
    }

}
