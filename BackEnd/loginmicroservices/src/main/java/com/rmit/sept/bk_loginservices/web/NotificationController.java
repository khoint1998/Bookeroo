package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/getNotification/{id}")
    public List<Notification> getNotificationByUserId(@PathVariable(value="id") Long userId) {
        return notificationService.getNotificationByUserId(userId);
    }

}
