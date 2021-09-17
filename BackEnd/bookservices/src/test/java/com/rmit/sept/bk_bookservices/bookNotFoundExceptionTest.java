package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.exceptions.BookNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class bookNotFoundExceptionTest {

    @Test
    public void should_match_BookNotFoundException() {
        BookNotFoundException bookNotFoundException = new BookNotFoundException("Not found this book");
        assertThat(bookNotFoundException).hasMessageMatching("Not found this book");
    }

}
