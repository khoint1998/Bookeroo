package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ShopModelTest {

    @Test
    @Rollback
    public void setShopId_test() {
        Shop shop = new Shop();
        Long expected = 1L;
        shop.setShopId(expected);
        Long testcase = shop.getShopId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setShopName_test() {
        Shop shop = new Shop();
        String expected = "chen's shop";
        shop.setShopName(expected);
        String testcase = shop.getShopName();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUser_test() {
        Shop shop = new Shop();

        User expected = new User();
        expected.setFullName("william");

        shop.setUser(expected);
        User testcase = shop.getUser();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUserName_test() {
        User user = new User();
        String expected = "chen666";
        user.setUsername(expected);

        String testcase = user.getUsername();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setFullName_test() {
        User user = new User();
        String expected = "chen wang";
        user.setFullName(expected);

        String testcase = user.getFullName();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setPassword_test() {
        User user = new User();
        String expected = "123456";
        user.setPassword(expected);

        String testcase = user.getPassword();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setConfirmPassword_test() {
        User user = new User();
        String expected = "123456";
        user.setConfirmPassword(expected);

        String testcase = user.getConfirmPassword();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setRole_test() {
        User user = new User();
        String expected = "Admin";
        user.setRole(expected);

        String testcase = user.getRole();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getId_test() {
        User user = new User();
        user.setId(1L);
        Long testcase = user.getId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getEmail_test() {
        User user = new User();
        user.setEmail("1353664988@qq.com");
        String testcase = user.getEmail();
        assertThat(testcase).isEqualTo("1353664988@qq.com");
    }

    @Test
    @Rollback
    public void getUserName_test() {
        User user = new User();
        user.setUsername("chen");
        String testcase = user.getUsername();
        assertThat(testcase).isEqualTo("chen");
    }

    @Test
    @Rollback
    public void getFullName_test() {
        User user = new User();
        user.setFullName("chen wang");
        String testcase = user.getFullName();
        assertThat(testcase).isEqualTo("chen wang");
    }

    @Test
    @Rollback
    public void getPassword_test() {
        User user = new User();
        user.setPassword("123456");
        String testcase = user.getPassword();
        assertThat(testcase).isEqualTo("123456");
    }

    @Test
    @Rollback
    public void getConfirmPassword_test() {
        User user = new User();
        user.setConfirmPassword("123456");
        String testcase = user.getConfirmPassword();
        assertThat(testcase).isEqualTo("123456");
    }

    @Test
    @Rollback
    public void getRole_test() {
        User user = new User();
        user.setRole("Admin");
        String testcase = user.getRole();
        assertThat(testcase).isEqualTo("Admin");
    }

}
