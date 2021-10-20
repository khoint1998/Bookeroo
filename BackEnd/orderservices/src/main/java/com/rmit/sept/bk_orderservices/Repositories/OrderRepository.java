package com.rmit.sept.bk_orderservices.Repositories;

import com.rmit.sept.bk_orderservices.model.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository <Order, Long> {
    Order getByOrderId(Long orderId);
}
