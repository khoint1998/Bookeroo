package com.rmit.sept.bk_loginservices;

import com.rmit.sept.bk_loginservices.exceptions.UserNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserNotFoundExceptionTest {
    @Test
    public void should_match_BookNotFoundException() {
        UserNotFoundException userNotFoundException = new UserNotFoundException("Not found this user");
        assertThat(userNotFoundException).hasMessageMatching("Not found this user");
    }
}
