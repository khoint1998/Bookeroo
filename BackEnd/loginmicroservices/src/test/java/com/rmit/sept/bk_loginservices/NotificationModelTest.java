package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class NotificationModelTest {

    @Test
    public void setcontent_test() {
        Notification notification = new Notification();
        String expected_content = "hello world";
        notification.setContent(expected_content);
        String actual_content = notification.getContent();
        assertThat(actual_content).isEqualTo(expected_content);
    }

    @Test
    public void setcreatedAt_test() {
        Notification notification = new Notification();
        Date expected_date = new Date();
        notification.setCreatedAt(expected_date);
        Date actual_date = notification.getCreatedAt();
        assertThat(actual_date).isEqualTo(expected_date);
    }

    @Test
    public void setUser_test() {
        Notification notification = new Notification();
        User user = new User();
        Long expected_userId = 1000L;
        user.setId(expected_userId);
        notification.setUser(user);
        User actual_user = notification.getUser();
        Long actual_userId = actual_user.getId();
        assertThat(actual_userId).isEqualTo(expected_userId);
    }

    @Test
    public void getcontent_test() {
        Notification notification = new Notification();
        String expected_content = "hello world";
        notification.setContent(expected_content);
        String actual_content = notification.getContent();
        assertThat(actual_content).isEqualTo(expected_content);
    }

    @Test
    public void getcreatedAt_test() {
        Notification notification = new Notification();
        Date expected_date = new Date();
        notification.setCreatedAt(expected_date);
        Date actual_date = notification.getCreatedAt();
        assertThat(actual_date).isEqualTo(expected_date);
    }

    @Test
    public void getUser_test() {
        Notification notification = new Notification();
        User user = new User();
        Long expected_userId = 1000L;
        user.setId(expected_userId);
        notification.setUser(user);
        User actual_user = notification.getUser();
        Long actual_userId = actual_user.getId();
        assertThat(actual_userId).isEqualTo(expected_userId);
    }




}
