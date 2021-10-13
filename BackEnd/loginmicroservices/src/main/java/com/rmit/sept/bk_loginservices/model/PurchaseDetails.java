package com.rmit.sept.bk_loginservices.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Getter @Setter @NoArgsConstructor
public class PurchaseDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long purchaseId;

    private Long copyId;

    @NotBlank(message = "Book title is required")
    private String title;

    private Long sellerId;

    @NotBlank(message = "Seller name is required")
    private String sellerFullName;

    private float price;

    private Date create_At;

    @JsonBackReference(value="user-history")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

}
