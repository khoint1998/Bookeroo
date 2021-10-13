package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.model.CopyDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class copyDTOTest {

    @Test
    @Rollback
    public void setOwnerId_test() {
        CopyDTO copyDTO = new CopyDTO();
        String expected = "1";
        copyDTO.setOwnerId(expected);
        String actual = copyDTO.getOwnerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setNewBook_test() {
        CopyDTO copyDTO = new CopyDTO();
        copyDTO.setNewBook(true);
        boolean actual = copyDTO.isNewBook();
        assertThat(actual).isTrue();
    }

    @Test
    @Rollback
    public void setBookId_test() {
        CopyDTO copyDTO = new CopyDTO();
        String expected = "1";
        copyDTO.setBookId(expected);
        String actual = copyDTO.getBookId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getOwnerId_test() {
        CopyDTO copyDTO = new CopyDTO();
        String expected = "1";
        copyDTO.setOwnerId(expected);
        String actual = copyDTO.getOwnerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getNewBook_test() {
        CopyDTO copyDTO = new CopyDTO();
        copyDTO.setNewBook(true);
        boolean actual = copyDTO.isNewBook();
        assertThat(actual).isTrue();
    }

    @Test
    @Rollback
    public void getBookId_test() {
        CopyDTO copyDTO = new CopyDTO();
        String expected = "1";
        copyDTO.setBookId(expected);
        String actual = copyDTO.getBookId();
        assertThat(actual).isEqualTo(expected);
    }

}
