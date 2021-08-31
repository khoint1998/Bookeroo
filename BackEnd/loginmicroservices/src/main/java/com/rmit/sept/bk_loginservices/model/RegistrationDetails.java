package com.rmit.sept.bk_loginservices.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Setter @Getter @NoArgsConstructor
public class RegistrationDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long registrationId;

    //Will change to false when registration is approved
    @Column(columnDefinition = "boolean default false")
    private boolean alreadyApproved;

    //Currently null, will hav this once this registration is approved and create a copy in DB
    @Column(columnDefinition = "Long default 0")
    private Long copyId;

    ///////These values will be sent as CopyDTO to create a copy once the registration is approved//////
    @Column(columnDefinition = "boolean default true")
    private boolean newBook;

    @Column(columnDefinition = "float default 0.0")
    private float price;

    //Frontend have bookId when user apply a copy for a book. For Testing: random string
    private Long bookId;

    //Taking userId is enough
    @JsonBackReference(value="shop-reg")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private Shop shop;
    ////////////////////////////////////////////////////////////////////////////////////////////////////
}
