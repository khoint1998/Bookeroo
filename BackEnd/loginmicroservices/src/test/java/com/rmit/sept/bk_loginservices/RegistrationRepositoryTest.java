package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.linesOf;

@SpringBootTest
public class RegistrationRepositoryTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private RegistrationRepository registrationRepository;


    @BeforeEach
    void clean_database() {
        registrationRepository.deleteAll();
        shopRepository.deleteAll();
        userRepository.deleteAll();
    }
    @Test
    @Rollback
    public void should_match_getByRegistrationId() {
        User user = new User();
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userRepository.save(user);

        Shop shop = new Shop();
        shop.setShopName("Chen's shop");
        shop.setShopOpen(true);
        shop.setUser(user);
        shopRepository.save(shop);

        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setStatus("approved");
        registrationDetails.setCopyId(1L);
        registrationDetails.setBookTitle("Chen's book");
        registrationDetails.setPrice(1.1f);
        registrationDetails.setCreate_At(new Date());
        registrationDetails.setNewBook(true);
        registrationDetails.setUserId(1L);
        registrationDetails.setBookId(1L);
        registrationDetails.setShop(shop);
        registrationRepository.save(registrationDetails);
        Long expected_RegistrationId = registrationDetails.getRegistrationId();

        RegistrationDetails testcase = registrationRepository.getByRegistrationId(expected_RegistrationId);
        assertThat(testcase.getRegistrationId()).isEqualTo(expected_RegistrationId);
    }

    @Test
    @Rollback
    public void should_match_findAll() {
        User user = new User();
        user.setUsername("chen wang");
        user.setFullName("Chen Wang");
        user.setPassword("123456");
        user.setConfirmPassword("123456");
        user.setCreate_At(new Date());
        user.setEmail("1353664988@qq.com");
        user.setRole("Admin");
        userRepository.save(user);

        Shop shop = new Shop();
        shop.setShopName("Chen's shop");
        shop.setShopOpen(true);
        shop.setUser(user);
        shopRepository.save(shop);

        RegistrationDetails registrationDetails1 = new RegistrationDetails();
        registrationDetails1.setStatus("approved");
        registrationDetails1.setCopyId(1L);
        registrationDetails1.setBookTitle("Chen's book1");
        registrationDetails1.setPrice(1.1f);
        registrationDetails1.setCreate_At(new Date());
        registrationDetails1.setNewBook(true);
        registrationDetails1.setUserId(user.getId());
        registrationDetails1.setBookId(user.getId());
        registrationDetails1.setShop(shop);
        registrationRepository.save(registrationDetails1);

        RegistrationDetails registrationDetails2 = new RegistrationDetails();
        registrationDetails2.setStatus("approved");
        registrationDetails2.setCopyId(1L);
        registrationDetails2.setBookTitle("Chen's book2");
        registrationDetails2.setPrice(1.1f);
        registrationDetails2.setCreate_At(new Date());
        registrationDetails2.setNewBook(true);
        registrationDetails2.setUserId(user.getId());
        registrationDetails2.setBookId(user.getId());
        registrationDetails2.setShop(shop);
        registrationRepository.save(registrationDetails2);

        List<RegistrationDetails> testcase = registrationRepository.findAll();
        assertThat(testcase).size().isEqualTo(2);
    }
}
