package com.rmit.sept.bk_loginservices.web;

import com.rmit.sept.bk_loginservices.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/registrations")
public class RegistrationController {

    @Autowired
    private ShopService shopService;

    @PatchMapping("/update/status/to-sold")
    public List<Long> ChangeStatusToSold(@RequestBody List<Long> regIdList){
       return shopService.changeStatusToSold(regIdList);
    }
}
