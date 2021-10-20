package com.rmit.sept.bk_orderservices;

import com.rmit.sept.bk_orderservices.model.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class OrderModelTest {


    @Test
    void setOrderId() {
        Order order = new Order();
        Long expected = 100L;
        order.setOrderId(expected);
        Long actual = order.getOrderId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void setBuyerId() {
        Order order = new Order();
        Long expected = 100L;
        order.setBuyerId(expected);
        Long actual = order.getBuyerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void setSellerId() {
        Order order = new Order();
        Long expected = 100L;
        order.setSellerId(expected);
        Long actual = order.getSellerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void setBookId() {
        Order order = new Order();
        Long expected = 100L;
        order.setBookId(expected);
        Long actual = order.getBookId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void setCopyId() {
        Order order = new Order();
        Long expected = 100L;
        order.setCopyId(expected);
        Long actual = order.getCopyId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void setCreateAt() {
        Order order = new Order();
        Date expected = new Date();
        order.setCreatedAt(expected);
        Date actual = order.getCreatedAt();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getOrderId() {
        Order order = new Order();
        Long expected = 100L;
        order.setOrderId(expected);
        Long actual = order.getOrderId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getBuyerId() {
        Order order = new Order();
        Long expected = 100L;
        order.setBuyerId(expected);
        Long actual = order.getBuyerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getSellerId() {
        Order order = new Order();
        Long expected = 100L;
        order.setSellerId(expected);
        Long actual = order.getSellerId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getBookId() {
        Order order = new Order();
        Long expected = 100L;
        order.setBookId(expected);
        Long actual = order.getBookId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getCopyId() {
        Order order = new Order();
        Long expected = 100L;
        order.setCopyId(expected);
        Long actual = order.getCopyId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void getCreateAt() {
        Order order = new Order();
        Date expected = new Date();
        order.setCreatedAt(expected);
        Date actual = order.getCreatedAt();
        assertThat(actual).isEqualTo(expected);
    }

}
