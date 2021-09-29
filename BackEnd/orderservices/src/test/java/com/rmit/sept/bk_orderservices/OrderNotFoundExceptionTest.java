package com.rmit.sept.bk_orderservices;

import com.rmit.sept.bk_orderservices.exceptions.OrderNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class OrderNotFoundExceptionTest {

    @Test
    public void should_match_OrderNotFoundException() {
        OrderNotFoundException orderNotFoundException = new OrderNotFoundException("Not found this order");
        assertThat(orderNotFoundException).hasMessageMatching("Not found this order");
    }

}
