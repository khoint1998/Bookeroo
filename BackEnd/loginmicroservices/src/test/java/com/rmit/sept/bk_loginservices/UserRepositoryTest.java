package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void clean_database() {
        userRepository.deleteAll();
    }
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
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userRepository.save(user);
        Long expected_Id = user.getId();

        User testcase = userRepository.getById(expected_Id);
        assertThat(testcase.getId()).isEqualTo(expected_Id);
    }

    @Test
    @Rollback
    public void should_match_getByEmail() {
        User user = new User();
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        String email = "1353664988@qq.com";
        user.setEmail(email);
        user.setRole("Admin");
        userRepository.save(user);
        Long expected_Id = user.getId();

        User testcase = userRepository.getByEmail(email);
        assertThat(testcase.getId()).isEqualTo(expected_Id);
    }
}
