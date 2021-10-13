package com.rmit.sept.bk_loginservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class PurchaseDetailsDTO {
    private String copyId;

    private String title;

    private String sellerId;

    private String sellerFullName;

    private String price;
}
