package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.UserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserDTOTest {

    @Test
    @Rollback
    public void setEmail_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "1353664988@qq.com";
        userDTO.setEmail(expect);
        String actual = userDTO.getEmail();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setUsername_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "william";
        userDTO.setUsername(expect);
        String actual = userDTO.getUsername();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setFullName_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "chen wang";
        userDTO.setFullName(expect);
        String actual = userDTO.getFullName();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setRole_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "Admin";
        userDTO.setRole(expect);
        String actual = userDTO.getRole();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getEmail_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "1353664988@qq.com";
        userDTO.setEmail(expect);
        String actual = userDTO.getEmail();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getUsername_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "william";
        userDTO.setUsername(expect);
        String actual = userDTO.getUsername();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getFullName_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "chen wang";
        userDTO.setFullName(expect);
        String actual = userDTO.getFullName();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getRole_test() {
        UserDTO userDTO = new UserDTO();
        String expect = "Admin";
        userDTO.setRole(expect);
        String actual = userDTO.getRole();
        assertThat(actual).isEqualTo(expect);
    }

}
