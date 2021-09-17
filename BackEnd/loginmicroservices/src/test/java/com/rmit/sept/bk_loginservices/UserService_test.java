package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserService_test {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @Test
    @Rollback
    public void should_match_saveUser() {
        User user = new User();
        String expected_username = "chen wang";
        user.setUsername(expected_username);
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);
        User testcase = userRepository.getById(1L);
        assertThat(testcase.getUsername()).isEqualTo("chen wang");
    }

}
