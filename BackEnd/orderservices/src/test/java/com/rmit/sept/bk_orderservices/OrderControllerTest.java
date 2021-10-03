package com.rmit.sept.bk_orderservices;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.rmit.sept.bk_orderservices.Repositories.OrderRepository;
import com.rmit.sept.bk_orderservices.model.Order;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
public class OrderControllerTest {

    private MockMvc mvc;

    @Autowired
    private  WebApplicationContext wac;
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
    void createOrder() {
        Order order = new Order();
        order.setBuyerId(1L);
        order.setSellerId(1L);
        order.setCopyId(1L);
        order.setBookId(1L);

        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        try {
            String url = "http://localhost:8082/bookeroo/orders/create";
            String response = mvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(order))).andReturn().getResponse().getContentAsString();
            assertNotNull(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getOrderByOrderId() {
        Order order = new Order();

        order.setBuyerId(100L);
        order.setSellerId(100L);
        order.setCopyId(100L);
        order.setBookId(100L);
        orderRepository.save(order);

        String orderId = order.getOrderId().toString();
        String url = "http://localhost:8082/bookeroo/orders/get/order/id/" + orderId;
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        RequestBuilder request = get(url);
        try {
           String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
           String expected = "\"buyerId\":100,\"sellerId\":100,\"copyId\":100,\"bookId\":100";
           assertThat(response).contains(expected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
