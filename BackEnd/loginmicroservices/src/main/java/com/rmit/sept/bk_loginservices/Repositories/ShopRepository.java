package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.data.repository.CrudRepository;

public interface ShopRepository extends CrudRepository<Shop, Long> {
    Shop getByShopId(Long id);
}
