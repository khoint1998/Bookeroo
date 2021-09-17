package com.rmit.sept.bk_bookservices;


import com.rmit.sept.bk_bookservices.exceptions.CopyNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class copyNotFoundExceptionTest {

    @Test
    public void should_match_CopyNotFoundException() {
        CopyNotFoundException  copyNotFoundException = new CopyNotFoundException("Not found this copy");
        assertThat(copyNotFoundException).hasMessageMatching("Not found this copy");
    }
}
