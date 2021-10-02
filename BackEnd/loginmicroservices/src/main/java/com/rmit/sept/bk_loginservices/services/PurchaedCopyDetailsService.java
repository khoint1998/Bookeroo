package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.UserNotFoundException;
import com.rmit.sept.bk_loginservices.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaedCopyDetailsService {

    @Autowired
    private UserRepository userRepository;

    public User addPurchasedCopyDetailsForUser(Long userId, Long copyId, boolean newBook) {
        User selectedUser = userRepository.getById(userId);
        if(selectedUser==null) throw new UserNotFoundException("User not found");

        PurchasedCopyDetails purchasedCopyDetails = new PurchasedCopyDetails();
        purchasedCopyDetails.setPurchasedCopyId(copyId);
        purchasedCopyDetails.setUserId(userId);
        purchasedCopyDetails.setNewBook(newBook);
        purchasedCopyDetails.setUser(selectedUser);

        selectedUser.getMyLibrary().add(purchasedCopyDetails);
        userRepository.save(selectedUser);
        return selectedUser;
    }

}
