package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CopyDetails {

    @Id
    private Long copyId;

    @NotBlank(message = "OwnerId (userId - id) is missing")
    private String ownerId;

    @Column(columnDefinition = "boolean default true")
    private boolean newBook;

    @Column(columnDefinition = "float default 0.0")
    private float price;

    @JsonBackReference(value="user-copy")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;

    @JsonBackReference(value="shop-copy")
    @ManyToOne
    @JoinColumn(name ="shopId", nullable = false)
    private Shop shop;
}
