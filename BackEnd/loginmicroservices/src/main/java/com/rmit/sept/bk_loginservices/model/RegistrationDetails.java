package com.rmit.sept.bk_loginservices.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Setter @Getter @NoArgsConstructor
public class RegistrationDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long registrationId;

    //Will change to 'approved' when registration is approved
    @NotBlank(message = "Status is required")
    private String status;

    //Currently null, will have this once this registration is approved and a copy in DB is created
    @Column(columnDefinition = "Long default 0")
    private Long copyId;

    @NotBlank(message = "Book title is required")
    private String bookTitle;

//    Will implement later
//    private String bookCover;

    @Column(columnDefinition = "float default 0.0")
    private float price;

    private Date create_At;

    ///////These values will be sent as CopyDTO to create a copy once the registration is approved//////
    @Column(columnDefinition = "boolean default true")
    private boolean newBook;

    //Send as ownerId
    private Long userId;

    //Frontend have bookId when user apply a copy for a book. For Testing: random string
    private Long bookId;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    @JsonBackReference(value="shop-reg")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private Shop shop;

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }
}
