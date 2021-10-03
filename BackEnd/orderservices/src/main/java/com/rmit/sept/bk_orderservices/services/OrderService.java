package com.rmit.sept.bk_orderservices.services;

import com.rmit.sept.bk_orderservices.Repositories.OrderRepository;
import com.rmit.sept.bk_orderservices.exceptions.CreateOrderFailedException;
import com.rmit.sept.bk_orderservices.exceptions.OrderNotFoundException;
import com.rmit.sept.bk_orderservices.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(Order order) {
        try {
            return orderRepository.save(order);
        } catch (Exception e) {
            throw new CreateOrderFailedException("Create order failed");
        }
    }

    public Order getOrderByOrderId(Long orderId) {
        Order order = orderRepository.getByOrderId(orderId);
        if (order == null)  {
            throw new OrderNotFoundException("Order not found");
        } else {
            return order;
        }
    }
}
