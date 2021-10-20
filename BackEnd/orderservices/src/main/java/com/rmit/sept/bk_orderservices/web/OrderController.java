package com.rmit.sept.bk_orderservices.web;


import com.rmit.sept.bk_orderservices.model.Order;
import com.rmit.sept.bk_orderservices.services.MapValidationErrorService;
import com.rmit.sept.bk_orderservices.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping("/")
    public ResponseEntity<String> awsHealthCheck() {
        return new ResponseEntity<String>("Status: OK", HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@Valid @RequestBody Order order, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Order newOrder = orderService.createOrder(order);

        return new ResponseEntity<Order>(newOrder, HttpStatus.CREATED);
    }

    @GetMapping("/get/order/id/{id}")
    public Order getOrderById(@PathVariable(value="id") Long orderId) {
        return orderService.getOrderByOrderId(orderId);
    }
}
