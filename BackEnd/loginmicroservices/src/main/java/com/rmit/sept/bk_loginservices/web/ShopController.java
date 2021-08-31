package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
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

    @PatchMapping("/shop/registration/apply")
    public void applyForSellingRegistration(@Valid @RequestBody RegistrationDetailsDTO registrationDetailsDTO){
        shopService.applyForSellingRegistration(registrationDetailsDTO);
    }
}
