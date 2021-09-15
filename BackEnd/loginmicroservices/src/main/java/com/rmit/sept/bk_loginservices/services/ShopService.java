package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        newReg.setUserId(selectedShop.getUser().getId());
        newReg.setStatus(registrationDetailsDTO.getStatus());
        newReg.setCopyId(0L);

        selectedShop.getOnSellCopyList().add(newReg);

        shopRepository.save(selectedShop);
    }

    public void deleteASellingRegistration(Long regId) {
        RegistrationDetails selectedReg = registrationRepository.getByRegistrationId(regId);
        registrationRepository.delete(selectedReg);
    }

    public List<RegistrationDetails> getAllSellingRegistrations() {
        return registrationRepository.findAll();
    }

    public void approveRegistration (Long regId, Long copyId) {
        RegistrationDetails selectedReg = registrationRepository.getByRegistrationId(regId);
        selectedReg.setCopyId(copyId);
        selectedReg.setStatus("approved");
        registrationRepository.save(selectedReg);
    }
}
