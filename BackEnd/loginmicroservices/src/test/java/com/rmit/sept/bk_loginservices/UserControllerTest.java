package com.rmit.sept.bk_loginservices;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.ChangePasswordDTO;
import com.rmit.sept.bk_loginservices.model.PurchaseDetailsDTO;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.model.UserDTO;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.web.UserController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.PropertyEditorRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.context.WebApplicationContext;

import java.beans.PropertyEditor;
import java.util.Date;
import java.util.List;
import java.util.Map;

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
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @BeforeEach
    void clean_database() {
        userRepository.deleteAll();
    }

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

    @Test
    void login() {
        User user = new User();
        user.setId(1L);
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("williamquq");
        loginRequest.setPassword("123456");
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        try {
            String url = "http://localhost:8081/bookeroo/users/login";
            String response = mvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(loginRequest))).andReturn().getResponse().getContentAsString();
            String expected = "\"success\":true";
            assertThat(response).contains(expected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getUserByUserId() {
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        String user_id = user.getId().toString();
        String url = "http://localhost:8081/bookeroo/users/get/user/id/" + user_id;
        RequestBuilder request = get(url);
        try {
            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
            String expected_id = "\"id\":" + user_id;
            assertThat(response).contains(expected_id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getUserByUserName() {
        User user = new User();
        user.setId(1L);
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        RequestBuilder request = get("http://localhost:8081/bookeroo/users/get/user/username?username=williamquq");
        try {
            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
            String expected = "\"username\":\"williamquq\"";
            assertThat(response).contains(expected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void updateUserDetails() {
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        UserDTO userDTO = new UserDTO();
        userDTO.setRole("admin");
        userDTO.setFullName("Chen Wang");
        String expected_username = "username_changed";
        userDTO.setUsername(expected_username);
        userDTO.setEmail("1353664988@qq.com");

        String userId = user.getId().toString();
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        String url = "http://localhost:8081/bookeroo/users/update/user/details/" + userId;

        try {
            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(userDTO)));
            User testcase = userController.getUserByUserId(user.getId());
            String actual_username = testcase.getUsername();
            assertThat(actual_username).isEqualTo(expected_username);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void updateUserPurchaseHistory() {
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        String userId = user.getId().toString();
        PurchaseDetailsDTO purchaseDetailsDTO = new PurchaseDetailsDTO();
        purchaseDetailsDTO.setSellerFullName("chenwang");
        purchaseDetailsDTO.setPrice("666.6");
        String expected_title = "title_changed";
        purchaseDetailsDTO.setTitle(expected_title);
        purchaseDetailsDTO.setCopyId("1");

        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        String url = "http://localhost:8081/bookeroo/users/update/user/history/" + userId;

        try {
            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(purchaseDetailsDTO)));
            User testcase = userController.getUserByUserId(user.getId());
            String actual_title = testcase.getPurchaseDetailsList().get(0).getTitle();
            assertThat(actual_title).isEqualTo(expected_title);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void changePassword() {
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        ChangePasswordDTO changePasswordDTO = new ChangePasswordDTO();
        changePasswordDTO.setPassword("testpassword");
        changePasswordDTO.setConfirmPassword("testpassword");
        changePasswordDTO.setEmail("1353664988@qq.com");

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String url = "http://localhost:8080/bookeroo/users/change-password";
        try {
            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(changePasswordDTO)));
            User testcase = userController.getUserByUserId(user.getId());
            Boolean actual = bCryptPasswordEncoder.matches("testpassword",testcase.getPassword());
            assertThat(actual).isTrue();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}