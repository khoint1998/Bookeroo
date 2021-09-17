package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.Shop;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class RegistrationDetailsModelTest {

    @Test
    @Rollback
    public void setRegistrationId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Long expected = 1L;
        registrationDetails.setRegistrationId(expected);
        Long testcase = registrationDetails.getRegistrationId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setStatus_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        String expected = "approved";
        registrationDetails.setStatus(expected);
        String testcase = registrationDetails.getStatus();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setCopyId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Long expected = 1L;
        registrationDetails.setCopyId(expected);
        Long testcase = registrationDetails.getCopyId();
        assertThat(testcase).isEqualTo(expected);
    }
    @Test
    @Rollback
    public void setBookTitle_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        String expected = "chen's book";
        registrationDetails.setBookTitle(expected);
        String testcase = registrationDetails.getBookTitle();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setPrice_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        float expected = 1.1f;
        registrationDetails.setPrice(expected);
        float testcase = registrationDetails.getPrice();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setCreateDate_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Date expected = new Date();
        registrationDetails.setCreate_At(expected);
        Date testcase = registrationDetails.getCreate_At();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setUserId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Long expected = 1L;
        registrationDetails.setUserId(expected);
        Long testcase = registrationDetails.getUserId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setBookId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Long expected = 1L;
        registrationDetails.setBookId(expected);
        Long testcase = registrationDetails.getBookId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setShop_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Shop expected = new Shop();
        registrationDetails.setShop(expected);
        Shop testcase = registrationDetails.getShop();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getRegistrationId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setRegistrationId(1L);
        Long testcase = registrationDetails.getRegistrationId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getStatus_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setStatus("approved");
        String testcase = registrationDetails.getStatus();
        assertThat(testcase).isEqualTo("approved");
    }

    @Test
    @Rollback
    public void getCopyId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setCopyId(1L);
        Long testcase = registrationDetails.getCopyId();
        assertThat(testcase).isEqualTo(1L);
    }
    @Test
    @Rollback
    public void getBookTitle_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setBookTitle("chen's book");
        String testcase = registrationDetails.getBookTitle();
        assertThat(testcase).isEqualTo("chen's book");
    }

    @Test
    @Rollback
    public void getPrice_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setPrice(1.1f);
        float testcase = registrationDetails.getPrice();
        assertThat(testcase).isEqualTo(1.1f);
    }

    @Test
    @Rollback
    public void getCreateDate_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Date date = new Date();
        registrationDetails.setCreate_At(date);
        Date testcase = registrationDetails.getCreate_At();
        assertThat(testcase).isEqualTo(date);
    }

    @Test
    @Rollback
    public void getUserId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setUserId(1L);
        Long testcase = registrationDetails.getUserId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getBookId_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        registrationDetails.setBookId(1L);
        Long testcase = registrationDetails.getBookId();
        assertThat(testcase).isEqualTo(1L);
    }

    @Test
    @Rollback
    public void getShop_test() {
        RegistrationDetails registrationDetails = new RegistrationDetails();
        Shop shop = new Shop();
        registrationDetails.setShop(shop);
        Shop testcase = registrationDetails.getShop();
        assertThat(testcase).isEqualTo(shop);
    }

}
