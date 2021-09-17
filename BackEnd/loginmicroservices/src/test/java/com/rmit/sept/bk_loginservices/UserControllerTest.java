package com.rmit.sept.bk_loginservices;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.rmit.sept.bk_loginservices.model.PurchaseDetailsDTO;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.model.UserDTO;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.web.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;


@SpringBootTest
public class UserControllerTest {
    private MockMvc mvc;
    @Autowired
    private WebApplicationContext wac;
    @Autowired
    private UserService userService;
    @Autowired
    private UserController userController;

    @Test
    void registerUser() {
        User user = new User();
        user.setId(1L);
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        try {
            String url = "http://localhost:8081/bookeroo/users/register";
            String response = mvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(user))).andReturn().getResponse().getContentAsString();
            assertNotNull(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

//    @Test
//    void login() {
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("williamquq");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        LoginRequest loginRequest = new LoginRequest();
//        loginRequest.setUsername("williamquq");
//        loginRequest.setPassword("123456");
//        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
//
//        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//
//        try {
//            String url = "http://localhost:8081/bookeroo/users/login";
//            String response = mvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
//                    .content(objectWriter.writeValueAsString(loginRequest))).andReturn().getResponse().getContentAsString();
//            String expected = "\"success\":true";
//            assertThat(response).contains(expected);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    @Test
//    void getUserByUserId() {
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("williamquq");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//        RequestBuilder request = get("http://localhost:8081/bookeroo/users/get/user/id/1");
//        try {
//            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
//            String expected_id = "\"id\":1";
//            String expected_email = "1353664988@qq.com";
//            assertThat(response).contains(expected_id,expected_email);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    @Test
//    void getUserByUserName() {
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("williamquq");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//        RequestBuilder request = get("http://localhost:8081/bookeroo/users/get/user/username?username=williamquq");
//        try {
//            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
//            String expected = "\"username\":\"williamquq\"";
//            assertThat(response).contains(expected);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    @Test
//    void updateUserDetails() {
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("williamquq");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        UserDTO userDTO = new UserDTO();
//        userDTO.setRole("admin");
//        userDTO.setFullName("Chen Wang");
//        String expected_username = "username_changed";
//        userDTO.setUsername(expected_username);
//        userDTO.setEmail("1353664988@qq.com");
//
//        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
//        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//        String url = "http://localhost:8081/bookeroo/users/update/user/details/1";
//
//        try {
//            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
//                    .content(objectWriter.writeValueAsString(userDTO)));
//            User testcase = userController.getUserByUserId(1L);
//            String actual_username = testcase.getUsername();
//            assertThat(actual_username).isEqualTo(expected_username);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    @Test
//    void updateUserPurchaseHistory() {
//        User user = new User();
//        user.setId(1L);
//        user.setUsername("williamquq");
//        user.setFullName("Chen Wang");
//        user.setPassword("123456");
//        user.setConfirmPassword("123456");
//        user.setCreate_At(new Date());
//        user.setEmail("1353664988@qq.com");
//        user.setRole("Admin");
//        userService.saveUser(user);
//
//        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
//        purchaseDetailsDTO.setSellerFullName("chenwang");
//        purchaseDetailsDTO.setPrice("666.6");
//        String expected_title = "title_changed";
//        purchaseDetailsDTO.setTitle(expected_title);
//        purchaseDetailsDTO.setCopyId("1");
//
//        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
//        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
//        String url = "http://localhost:8081/bookeroo/users/update/user/history/1";
//
//        try {
//            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
//                    .content(objectWriter.writeValueAsString(purchaseDetailsDTO)));
//            User testcase = userController.getUserByUserId(1L);
//            String actual_title = testcase.getPurchaseDetailsList().get(0).getTitle();
//            assertThat(actual_title).isEqualTo(expected_title);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

}