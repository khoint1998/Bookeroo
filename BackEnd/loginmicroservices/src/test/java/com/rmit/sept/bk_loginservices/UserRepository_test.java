package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserRepository_test {

    @Autowired
    private UserRepository userRepository;

    @Test
    @Rollback
    public void should_match_findByUsername() {
        User user = new User();
        String expected_username = "chen wang";
        user.setUsername(expected_username);
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userRepository.save(user);

        User testcase = userRepository.findByUsername(expected_username);
        assertThat(testcase.getUsername()).isEqualTo(expected_username);
    }

    @Test
    @Rollback
    public void should_match_getById() {
        User user = new User();
        Long expected_Id = 1L;
        user.setId(expected_Id);
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userRepository.save(user);

        User testcase = userRepository.getById(expected_Id);
        assertThat(testcase.getId()).isEqualTo(expected_Id);
    }
}
