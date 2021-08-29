package com.rmit.sept.bk_loginservices.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    //Used to locate which shop sell the copy, once the copy is created
    @NotBlank(message = "Need ID of that shop")
    private String shopId;

    @Column(columnDefinition = "boolean default true")
    private boolean pending;

    ///////These values will be sent as CopyDTO to create a copy once the registration is approved//////
    @Column(columnDefinition = "boolean default true")
    private boolean newBook;

    @Column(columnDefinition = "float default 0.0")
    private float price;

    private String bookId;

    //Taking userId is enough
    @JsonBackReference(value="user-reg")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;
    ////////////////////////////////////////////////////////////////////////////////////////////////////
}
