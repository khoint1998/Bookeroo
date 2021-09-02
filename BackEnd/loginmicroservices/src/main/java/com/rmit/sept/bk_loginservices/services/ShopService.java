package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShopService {

    @Autowired
    private ShopRepository shopRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    public void applyForSellingRegistration(RegistrationDetailsDTO registrationDetailsDTO) {
        Shop selectedShop = shopRepository.getByShopId(Long.parseLong(registrationDetailsDTO.getShopId()));

        RegistrationDetails newReg = new RegistrationDetails();
        newReg.setNewBook(registrationDetailsDTO.isNewBook());
        newReg.setPrice(registrationDetailsDTO.getPrice());
        newReg.setShop(selectedShop);
        newReg.setBookId(Long.parseLong(registrationDetailsDTO.getBookId()));
        newReg.setBookTitle(registrationDetailsDTO.getBookTitle());

        selectedShop.getOnSellCopyList().add(newReg);

        shopRepository.save(selectedShop);
    }

    public void deleteASellingRegistration(Long regId) {
        RegistrationDetails selectedReg = registrationRepository.getByRegistrationId(regId);
        registrationRepository.delete(selectedReg);
    }
}
