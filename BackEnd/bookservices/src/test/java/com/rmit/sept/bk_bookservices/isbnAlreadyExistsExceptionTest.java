package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class isbnAlreadyExistsExceptionTest {

    @Test
    public void should_match_isbnAlreadyExistsException() {
        ISBNAlreadyExistsException isbnAlreadyExistsException = new ISBNAlreadyExistsException("This isbn already exists");
        assertThat(isbnAlreadyExistsException).hasMessageMatching("This isbn already exists");
    }
}
