package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Getter @Setter @NoArgsConstructor
public class PurchasedCopyDetails {

    @Id
    private Long purchasedCopyId;

    private Long userId;

    private boolean newBook;

    @JsonBackReference(value="user-purchasedCopy")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;
}
