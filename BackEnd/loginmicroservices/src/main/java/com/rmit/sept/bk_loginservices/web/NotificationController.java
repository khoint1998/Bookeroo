package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-153244410.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PatchMapping("/getNotification/{id}")
    public void getNotificationById(@PathVariable(value="id") Long notificationId) {
//        notificationService.getNotificationById(notificationId);
    }

}
