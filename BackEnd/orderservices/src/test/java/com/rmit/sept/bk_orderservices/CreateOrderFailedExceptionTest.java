package com.rmit.sept.bk_orderservices;

import com.rmit.sept.bk_orderservices.exceptions.CreateOrderFailedException;
import com.rmit.sept.bk_orderservices.exceptions.OrderNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class CreateOrderFailedExceptionTest {

    @Test
    public void should_match_CreateOrderFailedException() {
        CreateOrderFailedException createOrderFailedException = new CreateOrderFailedException("Create order failed");
        assertThat(createOrderFailedException).hasMessageMatching("Create order failed");
    }

}
