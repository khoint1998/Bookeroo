package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.PurchaseDetails;
import com.rmit.sept.bk_loginservices.model.PurchaseDetailsDTO;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.model.UserDTO;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class CustomUserDetailsServiceTest {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

//    @Test
//    @Rollback
//    public void should_match_loadUserByUsername() {
//
//        User user = new User();
//        String expected_username = "chen wang";
//        user.setUsername(expected_username);
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        User testcase = customUserDetailsService.loadUserByUsername(expected_username);
//        assertThat(testcase.getUsername()).isEqualTo(expected_username);
//    }

//    @Test
//    @Rollback
//    public void should_match_loadUserById() {
//        User user = new User();
//        Long expected_id = 2L;
//        user.setId(expected_id);
//        user.setUsername("chen wang1");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//        User testcase = customUserDetailsService.loadUserById(expected_id);
//        assertThat(testcase.getId()).isEqualTo(expected_id);
//    }

//    @Test
//    @Rollback
//    public void should_match_updateUserDetails() {
//
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("chen wang");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        UserDTO userDTO = new UserDTO();
//        userDTO.setUsername("william");
//        userDTO.setEmail("12345678@qq.com");
//        userDTO.setFullName("William Wang");
//        userDTO.setRole("User");
//        User testcase = customUserDetailsService.updateUserDetails(1L,userDTO);
//        assertThat(testcase.getFullName()).isEqualTo("William Wang");
//    }

//    @Test
//    @Rollback
//    public void should_match_updateUserPurchaseHistory() {
//
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("chen wang");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        PurchaseDetails purchaseDetails = new PurchaseDetails();
//        purchaseDetails.setPurchaseId(1L);
//        purchaseDetails.setUser(user);
//        purchaseDetails.setPrice(1.1f);
//        purchaseDetails.setCreate_At(new Date());
//        purchaseDetails.setCopyId(1L);
//        purchaseDetails.setSellerFullName("william");
//
//        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
//        purchaseDetailsDTO.setPrice("1.1");
//        purchaseDetailsDTO.setCopyId("1");
//        purchaseDetailsDTO.setTitle("title");
//        purchaseDetailsDTO.setSellerFullName("chen");
//        User testcase = customUserDetailsService.updateUserPurchaseHistory(1L,purchaseDetailsDTO);
//        assertThat(testcase.getPurchaseDetailsList().get(0).getSellerFullName()).isEqualTo("chen");
//    }

//    @Test
//    @Rollback
//    public void should_match_addAShopForUser() {
//
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("chen wang");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        customUserDetailsService.addAShopForUser(1L, "super shop");
//        User testcase = userRepository.getById(1L);
//        assertThat(testcase.getShops().get(1).getShopName()).isEqualTo("First shop");
//    }

//    @Test
//    @Rollback
//    public void should_match_deleteAShop() {
//
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("chen wang");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        customUserDetailsService.addAShopForUser(1L,"good");
//        customUserDetailsService.deleteAShop(1L);
//        assertThat(user.getShops()).size().isEqualTo(1);
//    }
}