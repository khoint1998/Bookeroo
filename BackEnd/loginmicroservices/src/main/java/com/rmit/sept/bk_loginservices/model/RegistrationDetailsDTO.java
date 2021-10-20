package com.rmit.sept.bk_loginservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class RegistrationDetailsDTO {
    private String shopId;

    private boolean newBook;

    private String status;

    private float price;

    private String bookId;

    private String bookTitle;

    private String coverPage;
}
