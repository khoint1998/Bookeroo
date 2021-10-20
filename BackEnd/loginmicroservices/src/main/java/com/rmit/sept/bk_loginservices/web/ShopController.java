package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
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

    @PatchMapping("/shop/registration/approve/{regId}")
    public void approveRegistration(@PathVariable Long regId, @RequestParam Long copyId){
        shopService.approveRegistration(regId,copyId);
    }

    @GetMapping("/registration/get-all")
    public List<RegistrationDetails> getAllSellingRegistrations(){
        return shopService.getAllSellingRegistrations();
    }

    @PutMapping("/get-shops-by-copyId-list")
    public List<Shop> getShopsByCopyIdList(@RequestBody List<Long> copyIdList){
        return shopService.getShopsByCopyIdList(copyIdList);
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
