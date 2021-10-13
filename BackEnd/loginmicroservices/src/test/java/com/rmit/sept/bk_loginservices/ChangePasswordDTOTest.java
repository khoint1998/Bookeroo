package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.ChangePasswordDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ChangePasswordDTOTest {

    @Test
    @Rollback
    public void setEmail_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        String expected = "1353664988@qq.com";
        changePasswordDTO.setEmail(expected);
        String actual = changePasswordDTO.getEmail();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setPassword_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        String expected = "testpassword";
        changePasswordDTO.setPassword(expected);
        String actual = changePasswordDTO.getPassword();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setConfirmPassword_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        String expected = "testpassword";
        changePasswordDTO.setConfirmPassword(expected);
        String actual = changePasswordDTO.getConfirmPassword();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getEmail_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        changePasswordDTO.setEmail("1353664988@qq.com");
        String actual = changePasswordDTO.getEmail();
        assertThat(actual).isEqualTo("1353664988@qq.com");
    }

    @Test
    @Rollback
    public void getPassword_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        changePasswordDTO.setPassword("testpassword");
        String actual = changePasswordDTO.getPassword();
        assertThat(actual).isEqualTo("testpassword");
    }

    @Test
    @Rollback
    public void getConfirmPassword_test() {
        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        changePasswordDTO.setConfirmPassword("testpassword");
        String actual = changePasswordDTO.getConfirmPassword();
        assertThat(actual).isEqualTo("testpassword");
    }

}
