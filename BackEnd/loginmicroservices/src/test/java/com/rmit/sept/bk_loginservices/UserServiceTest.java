package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.ChangePasswordDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Test
    @Rollback
    public void should_match_saveUser() {
        userRepository.deleteAll();
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
        User testcase = userRepository.getById(user.getId());
        assertThat(testcase.getUsername()).isEqualTo("chen wang");
    }

    @Test
    @Rollback
    public void should_match_changePassword() {
        userRepository.deleteAll();
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);
        userService.changePassword(user.getEmail(),"testpassword");

        User testcase = userRepository.getById(user.getId());
        Boolean actual = bCryptPasswordEncoder.matches("testpassword",testcase.getPassword());
        assertThat(actual).isTrue();
    }

    @Test
    @Rollback
    public void should_match_checkAndChangePassword() {
        userRepository.deleteAll();
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setCreate_At(new Date());
        String email = "1353664988@qq.com";
        user.setEmail(email);
        user.setRole("Admin");
        userService.saveUser(user);

        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        changePasswordDTO.setPassword("testpassword");
        changePasswordDTO.setConfirmPassword("testpassword");
        changePasswordDTO.setEmail(email);
        userService.checkAndChangePassword(changePasswordDTO);

        User testcase = userRepository.getById(user.getId());
        Boolean actual = bCryptPasswordEncoder.matches("testpassword",testcase.getPassword());
        assertThat(actual).isTrue();
    }

}
