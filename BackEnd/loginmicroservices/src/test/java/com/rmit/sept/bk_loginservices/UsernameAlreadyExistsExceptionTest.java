package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UsernameAlreadyExistsExceptionTest {
    @Test
    public void should_match_BookNotFoundException() {
        UsernameAlreadyExistsException usernameAlreadyExistsException = new UsernameAlreadyExistsException("This user name already exists");
        assertThat(usernameAlreadyExistsException).hasMessageMatching("This user name already exists");
    }
}
