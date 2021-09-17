package com.rmit.sept.bk_loginservices;


import com.rmit.sept.bk_loginservices.model.PurchaseDetails;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class PurchaseDetailsModelTest {

    @Test
    @Rollback
    public void setPurchaseId_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        Long expected = 1L;
        purchaseDetails.setPurchaseId(expected);
        Long testcase = purchaseDetails.getPurchaseId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setCopyId_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        Long expected = 1L;
        purchaseDetails.setCopyId(expected);
        Long testcase = purchaseDetails.getCopyId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
        public void setTitle_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        String expected = "chen's book";
        purchaseDetails.setTitle(expected);
        String testcase = purchaseDetails.getTitle();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setSellerFullName_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        String expected = "Chen Wang";
        purchaseDetails.setSellerFullName(expected);
        String testcase = purchaseDetails.getSellerFullName();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setPrice_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        float expected = 1.1f;
        purchaseDetails.setPrice(expected);
        float testcase = purchaseDetails.getPrice();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setCreateDate_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        Date expected = new Date();
        purchaseDetails.setCreate_At(expected);
        Date testcase = purchaseDetails.getCreate_At();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUser_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        User expected = new User();
        purchaseDetails.setUser(expected);
        User testcase = purchaseDetails.getUser();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getPurchaseId_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setPurchaseId(1L);
        Long testcase = purchaseDetails.getPurchaseId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getCopyId_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setCopyId(1L);
        Long testcase = purchaseDetails.getCopyId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getTitle_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setTitle("chen's book");
        String testcase = purchaseDetails.getTitle();
        assertThat(testcase).isEqualTo("chen's book");
    }

    @Test
    @Rollback
    public void getSellerFullName_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setSellerFullName("Chen Wang");
        String testcase = purchaseDetails.getSellerFullName();
        assertThat(testcase).isEqualTo("Chen Wang");
    }

    @Test
    @Rollback
    public void getPrice_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setPrice(1.1f);
        float testcase = purchaseDetails.getPrice();
        assertThat(testcase).isEqualTo(1.1f);
    }

    @Test
    @Rollback
    public void getCreateDate_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        Date date = new Date();
        purchaseDetails.setCreate_At(date);
        Date testcase = purchaseDetails.getCreate_At();
        assertThat(testcase).isEqualTo(date);
    }

    @Test
    @Rollback
    public void getUser_test() {
        PurchaseDetails purchaseDetails = new PurchaseDetails();
        User user = new User();
        purchaseDetails.setUser(user);
        User testcase = purchaseDetails.getUser();
        assertThat(testcase).isEqualTo(user);
    }
}
