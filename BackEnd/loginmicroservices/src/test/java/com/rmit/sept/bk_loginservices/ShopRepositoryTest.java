package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ShopRepositoryTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;

    @Test
    @Rollback
    public void should_match_getByShopId() {
        shopRepository.deleteAll();
        userRepository.deleteAll();
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
        Long expected_ShopId = shop.getShopId();

        Shop testcase = shopRepository.getByShopId(expected_ShopId);
        assertThat(testcase.getShopId()).isEqualTo(expected_ShopId);
    }

}
