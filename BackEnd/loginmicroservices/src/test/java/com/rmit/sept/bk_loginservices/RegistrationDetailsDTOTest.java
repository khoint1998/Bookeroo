package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class RegistrationDetailsDTOTest {

    @Test
    @Rollback
    public void setShopId_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "1";
        registrationDetailsDTO.setShopId(expect);
        String actual = registrationDetailsDTO.getShopId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setNewBook_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        registrationDetailsDTO.setNewBook(true);
        boolean actual = registrationDetailsDTO.isNewBook();
        assertThat(actual).isTrue();
    }

    @Test
    @Rollback
    public void setStatus_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "pending";
        registrationDetailsDTO.setStatus(expect);
        String actual = registrationDetailsDTO.getStatus();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setPrice_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        float expect = 1;
        registrationDetailsDTO.setPrice(expect);
        float actual = registrationDetailsDTO.getPrice();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setBookId_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "1";
        registrationDetailsDTO.setBookId(expect);
        String actual = registrationDetailsDTO.getBookId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setBookTitle_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "java concept";
        registrationDetailsDTO.setBookTitle(expect);
        String actual = registrationDetailsDTO.getBookTitle();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void setCoverPage_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "this is a cover page";
        registrationDetailsDTO.setCoverPage(expect);
        String actual = registrationDetailsDTO.getCoverPage();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getShopId_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "1";
        registrationDetailsDTO.setShopId(expect);
        String actual = registrationDetailsDTO.getShopId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getNewBook_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        registrationDetailsDTO.setNewBook(true);
        boolean actual = registrationDetailsDTO.isNewBook();
        assertThat(actual).isTrue();
    }

    @Test
    @Rollback
    public void getStatus_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "pending";
        registrationDetailsDTO.setStatus(expect);
        String actual = registrationDetailsDTO.getStatus();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getPrice_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        float expect = 1;
        registrationDetailsDTO.setPrice(expect);
        float actual = registrationDetailsDTO.getPrice();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getBookId_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "1";
        registrationDetailsDTO.setBookId(expect);
        String actual = registrationDetailsDTO.getBookId();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getBookTitle_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "java concept";
        registrationDetailsDTO.setBookTitle(expect);
        String actual = registrationDetailsDTO.getBookTitle();
        assertThat(actual).isEqualTo(expect);
    }

    @Test
    @Rollback
    public void getCoverPage_test() {
        RegistrationDetailsDTO registrationDetailsDTO = new RegistrationDetailsDTO();
        String expect = "this is a cover page";
        registrationDetailsDTO.setCoverPage(expect);
        String actual = registrationDetailsDTO.getCoverPage();
        assertThat(actual).isEqualTo(expect);
    }

}
