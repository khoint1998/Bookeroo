package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bookeroo/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PatchMapping("/AddNotification/{id}")
    public void addANotificationForUser(@PathVariable(value="id") Long userId, @Valid @RequestBody Notification notification) {
        notificationService.addNotificationForUser(userId, notification);
    }

}
