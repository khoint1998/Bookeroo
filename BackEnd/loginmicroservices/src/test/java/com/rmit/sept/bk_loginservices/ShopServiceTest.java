package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.services.ShopService;
import com.rmit.sept.bk_loginservices.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ShopServiceTest {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private ShopService shopService;
    @Autowired
    private RegistrationRepository registrationRepository;


    @BeforeEach
    void clean_database() {
        registrationRepository.deleteAll();
        shopRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    public void should_match_applyForSellingRegistration() {

        User user = new User();
        user.setUsername("chen wang123");
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
        List<RegistrationDetails> onSellCopyList = new ArrayList<>();
        shop.setOnSellCopyList(onSellCopyList);
        shopRepository.save(shop);

        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String shop_id = shop.getShopId().toString();
        registrationDetailsDTO.setShopId(shop_id);
        registrationDetailsDTO.setBookId("1");
        registrationDetailsDTO.setNewBook(true);
        registrationDetailsDTO.setStatus("approved");
        registrationDetailsDTO.setPrice(1.1f);
        registrationDetailsDTO.setBookTitle("Chen's book");

        shopService.applyForSellingRegistration(registrationDetailsDTO);

        Shop testcase = shopRepository.getByShopId(shop.getShopId());
        RegistrationDetails testcase_registrationDetails = testcase.getOnSellCopyList().get(0);
        assertThat(testcase_registrationDetails.getBookTitle()).isEqualTo("Chen's book");
    }

    @Test
    public void should_match_getAllSellingRegistrations() {

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
        List<RegistrationDetails> testcase = shopService.getAllSellingRegistrations();
        assertThat(testcase).size().isGreaterThan(0);
    }

    @Test
    public void should_match_approveRegistration() {
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
        shopRepository.save(shop);

        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setBookId(1L);
        registrationDetails.setUserId(user.getId());
        registrationDetails.setShop(shop);
        registrationDetails.setBookTitle("Chen's book");
        registrationDetails.setStatus("not approved");
        registrationRepository.save(registrationDetails);
        shopService.approveRegistration(registrationDetails.getRegistrationId(), 1L);

        RegistrationDetails testcase = registrationRepository.getByRegistrationId(registrationDetails.getRegistrationId());
        assertThat(testcase.getStatus()).isEqualTo("approved");
    }

    @Test
    public void should_match_increaseSold() {
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
        shop.setHasSold(0);// after we use increaseSold, the result should be 1
        shop.setUser(user);
        shopRepository.save(shop);
        Long shopId = shop.getShopId();
        shopService.increaseSold(shopId);
        Shop testcase = shopRepository.getByShopId(shopId);

        assertThat(testcase.getHasSold()).isEqualTo(1);
    }
}