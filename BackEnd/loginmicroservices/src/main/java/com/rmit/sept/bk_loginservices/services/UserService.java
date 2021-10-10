package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.NotificationRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.exceptions.PasswordException;
import com.rmit.sept.bk_loginservices.exceptions.UserNotFoundException;
import com.rmit.sept.bk_loginservices.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.bk_loginservices.model.ChangePasswordDTO;
import com.rmit.sept.bk_loginservices.model.Notification;
import com.rmit.sept.bk_loginservices.model.Shop;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Date;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){
        /*
         *newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
         *Username has to be unique (exception)
         *Make sure that password and confirmPassword match
         *We don't persist or show the confirmPassword
         *Return userRepository.save(newUser);
       */
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");

            Shop defaultShop = new Shop();
            defaultShop.setShopName(newUser.getUsername() + "'s First Shop");
            defaultShop.setUser(newUser);
            defaultShop.setShopOpen(true);
            defaultShop.setHasSold(0);

            newUser.setShops(new ArrayList<Shop>());
            newUser.getShops().add(defaultShop);

            return userRepository.save(newUser);

        } catch (Exception e){
            throw new UsernameAlreadyExistsException("Something is wrong. Cannot create the user");
        }
    }

    public void changePassword(String email,String newPassword) throws UserNotFoundException {
        User selectedUser = userRepository.getByEmail(email);
        if (selectedUser == null) throw new UserNotFoundException("User not found");
        selectedUser.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepository.save(selectedUser);
    }

    public void checkAndChangePassword(ChangePasswordDTO changePasswordDTO) {
        if (!changePasswordDTO.getPassword().equals(changePasswordDTO.getConfirmPassword())) throw new PasswordException("Confirmation not match. Please try again");
        if (changePasswordDTO.getPassword().length() < 6) throw new PasswordException("Password must be at least 6 characters");
        try {
            changePassword(changePasswordDTO.getEmail(),changePasswordDTO.getPassword());
        } catch (UserNotFoundException e) {
            throw new UserNotFoundException("Email not not found. Please try again");
        }
    }

}
