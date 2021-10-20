package com.rmit.sept.bk_loginservices;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.web.UserController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;

@SpringBootTest
public class ShopControllerTest {
    private MockMvc mvc;
    @Autowired
    private WebApplicationContext wac;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserController userController;
    @Autowired
    private RegistrationRepository registrationRepository;
    @Autowired
    private ShopRepository shopRepository;

    @BeforeEach
    void clean_database() {
        registrationRepository.deleteAll();
        shopRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    void applyForSellingRegistration() {
        User user = new User();
        user.setUsername("williamquq");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        Shop shop = new Shop();
        shop.setShopName("Chen's shop");
        shop.setShopOpen(true);
        shop.setUser(user);
        List<RegistrationDetails> onSellCopyList = new ArrayList<>();
        shop.setOnSellCopyList(onSellCopyList);
        shopRepository.save(shop);

        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        registrationDetailsDTO.setShopId(shop.getShopId().toString());
        registrationDetailsDTO.setBookId("1");
        registrationDetailsDTO.setNewBook(true);
        String expected_status = "approved";
        registrationDetailsDTO.setStatus(expected_status);
        registrationDetailsDTO.setPrice(1.1f);
        registrationDetailsDTO.setBookTitle("Chen's book");

        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        String url = "http://localhost:8080/bookeroo/shops/shop/registration/apply";
        try {
            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(registrationDetailsDTO)));
            shopRepository.getByShopId(shop.getShopId());
            Shop testcase = shopRepository.getByShopId(shop.getShopId());
            String actual_status = testcase.getOnSellCopyList().get(0).getStatus();
            assertThat(actual_status).isEqualTo(expected_status);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getAllSellingRegistrations() {
        User user = new User();
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        Shop shop = new Shop();
        shop.setShopName("Chen's shop");
        shop.setShopOpen(true);
        shop.setUser(user);
        List<RegistrationDetails> onSellCopyList = new ArrayList<>();
        shop.setOnSellCopyList(onSellCopyList);
        shopRepository.save(shop);
        registrationRepository.deleteAll();
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setBookId(1L);
        registrationDetails.setUserId(user.getId());
        registrationDetails.setShop(shop);
        registrationDetails.setBookTitle("Chen's book");
        registrationDetails.setStatus("approved");
        registrationRepository.save(registrationDetails);
        shopRepository.save(shop);

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        RequestBuilder request = get("http://localhost:8080/bookeroo/shops/registration/get-all");
        try {
            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
            String expected_Booktitle = "\"bookTitle\":\"Chen's book\"";
            assertThat(response).contains(expected_Booktitle);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void addAShopForUser() {
        User user = new User();
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userService.saveUser(user);

        String userId = user.getId().toString();

        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        String url = "http://localhost:8080/bookeroo/shops/shop/create/user/" + userId + "?shopName=william";
        try {
            mvc.perform(patch(url));
            User testcase = userController.getUserByUserId(user.getId());
            String actual_shopList = objectWriter.writeValueAsString(testcase.getShops());
            String expected_shopName = "\"shopName\" : \"william\"";
            assertThat(actual_shopList).contains(expected_shopName);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}