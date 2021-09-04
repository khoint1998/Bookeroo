package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.UserNotFoundException;
import com.rmit.sept.bk_loginservices.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user==null) throw new UserNotFoundException("User name not found");
        return user;
    }


    @Transactional
    public User loadUserById(Long id){
        User user = userRepository.getById(id);
        if(user==null) throw new UserNotFoundException("User id not found");
        return user;
    }

    public User updateUserDetails(Long id, UserDTO userDetails) {
        User selectedUser = userRepository.getById(id);
        if(selectedUser==null) throw new UserNotFoundException("User name not found");

        selectedUser.setUsername(userDetails.getUsername());
        selectedUser.setEmail(userDetails.getEmail());
        selectedUser.setFullName(userDetails.getFullName());
        selectedUser.setRole(userDetails.getRole());
        userRepository.save(selectedUser);

        return selectedUser;
    }
    public User updateUserPurchaseHistory(Long id, PurchaseDetailsDTO purchaseDetailsDto) {
        User selectedUser = userRepository.getById(id);
        if(selectedUser==null) throw new UserNotFoundException("User name not found");

        PurchaseDetails purchaseDetails = new PurchaseDetails();
        purchaseDetails.setCopyId(Long.parseLong(purchaseDetailsDto.getCopyId()));
        purchaseDetails.setTitle(purchaseDetailsDto.getTitle());
        purchaseDetails.setPrice(Long.parseLong(purchaseDetailsDto.getPrice()));
        purchaseDetails.setSellerFullName(purchaseDetailsDto.getSellerFullName());
        purchaseDetails.setUser(selectedUser);

        selectedUser.getPurchaseDetailsList().add(purchaseDetails);
        userRepository.save(selectedUser);

        return selectedUser;
    }

    @Autowired
    private ShopRepository shopRepository;

    public void addAShopForUser(Long userId, String shopName) {
        User selectedUser = userRepository.getById(userId);
        if(selectedUser==null) throw new UserNotFoundException("User name not found");

        Shop newShop = new Shop();
        newShop.setShopName(shopName);
        newShop.setUser(selectedUser);
        newShop.setShopOpen(true);

        shopRepository.save(newShop);
    }

    public void deleteAShop(Long shopId) {
        Shop selectedShop = shopRepository.getByShopId(shopId);
        shopRepository.delete(selectedShop);
    }

}
