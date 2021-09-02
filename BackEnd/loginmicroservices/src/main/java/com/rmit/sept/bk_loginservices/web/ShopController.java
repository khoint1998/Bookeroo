package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bookeroo/shops")
public class ShopController {

    @Autowired
    private ShopService shopService;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @PatchMapping("/shop/registration/apply")
    public void applyForSellingRegistration(@Valid @RequestBody RegistrationDetailsDTO registrationDetailsDTO){
        shopService.applyForSellingRegistration(registrationDetailsDTO);
    }

    @DeleteMapping("/shop/registration/delete/{regId}")
    public void deleteASellingRegistration(@PathVariable Long regId){
        shopService.deleteASellingRegistration(regId);
    }

    @PatchMapping("/shop/create/user/{id}")
    public void addAShopForUser(@PathVariable(value="id") Long userId, @Valid @RequestParam String shopName){
        userDetailsService.addAShopForUser(userId,shopName);
    }

    @DeleteMapping("/shop/delete/{id}")
    public void deleteAShop(@PathVariable(value="id") Long shopId){
        userDetailsService.deleteAShop(shopId);
    }
}
