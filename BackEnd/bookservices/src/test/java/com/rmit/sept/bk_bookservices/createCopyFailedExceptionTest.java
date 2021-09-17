package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.exceptions.CreateCopyFailedException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class createCopyFailedExceptionTest {

    @Test
    public void should_match_createCopyFailedException() {

        CreateCopyFailedException createCopyFailedException = new CreateCopyFailedException("Create copy failed");
        assertThat(createCopyFailedException).hasMessageMatching("Create copy failed");

    }
}
