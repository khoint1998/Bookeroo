package com.rmit.sept.bk_orderservices;

import com.rmit.sept.bk_orderservices.Repositories.OrderRepository;
import com.rmit.sept.bk_orderservices.model.Order;
import com.rmit.sept.bk_orderservices.services.OrderService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class OrderRepositoryTest {

    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void clean_database() {
        orderRepository.deleteAll();
    }

    @AfterEach
    void clean_database_after() {
        orderRepository.deleteAll();
    }

    @Test
    void getByOrderId() {
        Order order = new Order();
        order.setBuyerId(1L);
        order.setSellerId(1L);
        order.setCopyId(1L);
        order.setBookId(1L);
        orderRepository.save(order);
        Long expected_orderId = order.getOrderId();

        Order actual = orderRepository.getByOrderId(expected_orderId);
        Long actual_orderId = actual.getOrderId();
        assertThat(actual_orderId).isEqualTo(expected_orderId);

    }


}
