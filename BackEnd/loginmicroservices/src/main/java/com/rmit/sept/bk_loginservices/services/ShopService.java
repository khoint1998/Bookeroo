package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.RegistrationRepository;
import com.rmit.sept.bk_loginservices.Repositories.ShopRepository;
import com.rmit.sept.bk_loginservices.exceptions.RegistrationNotFoundException;
import com.rmit.sept.bk_loginservices.model.RegistrationDetails;
import com.rmit.sept.bk_loginservices.model.RegistrationDetailsDTO;
import com.rmit.sept.bk_loginservices.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        newReg.setCoverPage(registrationDetailsDTO.getCoverPage());

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

    public List<Shop> getShopsByCopyIdList(List<Long> copyIdList) {
        try {
            List<RegistrationDetails> selectedRegs = new ArrayList<RegistrationDetails>();
            for (Long copyId : copyIdList) {
                RegistrationDetails selectedReg = registrationRepository.getByCopyId(copyId);
                if(selectedReg.getStatus().equals("approved")) selectedRegs.add(selectedReg);
            }
            if (!selectedRegs.isEmpty()) {
                List<Shop> selectedShops = new ArrayList<Shop>();

                for (RegistrationDetails reg : selectedRegs) {
                    selectedShops.add(reg.getShop());
                }
                return selectedShops;
            } else {
                return new ArrayList<Shop>();
            }
        } catch (Exception e) {
            throw new RegistrationNotFoundException("Something wrong. Cannot retrieve the shops requested");
        }
    }

    public void approveRegistration (Long regId, Long copyId) {
        RegistrationDetails selectedReg = registrationRepository.getByRegistrationId(regId);
        selectedReg.setCopyId(copyId);
        selectedReg.setStatus("approved");
        registrationRepository.save(selectedReg);
    }

    public List<Long> changeStatusToSold(List<Long> registrationIdList) {
        RegistrationDetails registrationDetails;
        List<Long> copyIdList = new ArrayList<>();
        for (Long i : registrationIdList) {
            registrationDetails = registrationRepository.getByRegistrationId(i);
            if(registrationDetails == null) throw new RegistrationNotFoundException("Something wrong. Cannot retrieve the registration requested" + i);
            registrationDetails.setStatus("sold");
            registrationRepository.save(registrationDetails);
            Long copyid = registrationDetails.getCopyId();
            copyIdList.add(copyid);
        }
        return copyIdList;
    }

    public void increaseSold(Long shopId) {
        Shop selectedShop = shopRepository.getByShopId(shopId);
        int hasSold = selectedShop.getHasSold() + 1;
        selectedShop.setHasSold(hasSold);
        shopRepository.save(selectedShop);
    }
}
