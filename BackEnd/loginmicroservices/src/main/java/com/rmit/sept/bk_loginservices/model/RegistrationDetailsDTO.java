package com.rmit.sept.bk_loginservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter @Setter @NoArgsConstructor
public class RegistrationDetailsDTO {
    private String shopId;

    private boolean newBook;

    private float price;

    private String bookId;

    private String bookTitle;
}
