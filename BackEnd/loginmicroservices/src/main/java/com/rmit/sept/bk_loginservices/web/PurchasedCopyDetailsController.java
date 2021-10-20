package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.PurchaedCopyDetailsService;
import com.rmit.sept.bk_loginservices.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/purchasedCopyDetails")
public class PurchasedCopyDetailsController {

    @Autowired
    private PurchaedCopyDetailsService purchaedCopyDetailsService;

    @PatchMapping("/add/forUser/{id}")
    public void addPurchasedCopyDetailForUser(@PathVariable(value="id") Long userId, @Valid @RequestParam Long copyId, @RequestParam boolean newBook){
        purchaedCopyDetailsService.addPurchasedCopyDetailsForUser(userId,copyId,newBook);
    }
}
