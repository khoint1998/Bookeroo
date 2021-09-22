package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.PurchasedCopyDetails;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class PurchasedCopyDetailsModelTest {

    @Test
    @Rollback
    public void setPurchasedCopyId_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        Long expected = 1L;
        purchasedCopyDetails.setPurchasedCopyId(expected);
        Long testcase = purchasedCopyDetails.getPurchasedCopyId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUserId_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        Long expected = 1L;
        purchasedCopyDetails.setUserId(expected);
        Long testcase = purchasedCopyDetails.getUserId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUser_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        User expected = new User();
        purchasedCopyDetails.setUser(expected);
        User testcase = purchasedCopyDetails.getUser();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getPurchasedCopyId_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        purchasedCopyDetails.setPurchasedCopyId(1L);
        Long testcase = purchasedCopyDetails.getPurchasedCopyId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getUserId_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        purchasedCopyDetails.setUserId(1L);
        Long testcase = purchasedCopyDetails.getUserId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getUser_test() {
        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        User user = new User();
        purchasedCopyDetails.setUser(user);
        User testcase = purchasedCopyDetails.getUser();
        assertThat(testcase).isEqualTo(user);
    }

}
