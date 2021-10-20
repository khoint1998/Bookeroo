package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shopId;

    @NotBlank(message = "Shop needs a name")
    private String shopName;

    private boolean shopOpen;

    private int hasSold;

    //A shop contains a list of on sell copy (holds copyId type String)
    @JsonManagedReference(value="shop-reg")
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RegistrationDetails> onSellCopyList = new ArrayList<RegistrationDetails>();

    @JsonBackReference(value="user-shop")
    @ManyToOne
    @JoinColumn(name ="id", nullable = false)
    private User user;
}
