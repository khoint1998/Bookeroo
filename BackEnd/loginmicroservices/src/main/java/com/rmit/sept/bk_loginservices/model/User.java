package com.rmit.sept.bk_loginservices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.Collection;
import java.util.List;


@Entity
@Getter @Setter @NoArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email(message = "Username needs to be an email")
    @NotBlank(message = "An email is required")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "Username is required")
    @Column(unique = true)
    private String username;

    @NotBlank(message = "Please enter your full name")
    private String fullName;

    @NotBlank(message = "Password field is required")
    private String password;

    @NotBlank(message = "Role is required")
    private String role;

    @Transient
    private String confirmPassword;

    //User Purchase History (A concrete record, not for querying)
    @JsonManagedReference(value="user-history")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<PurchaseDetails> purchaseDetailsList = new ArrayList<PurchaseDetails>();

    //Store all copyIds of all pruchased copyies
    @JsonManagedReference(value="user-copy")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CopyDetails> myLibrary = new ArrayList<CopyDetails>();

    //list of owned shop, cannot be expanded for other roles except Shop Owner
    @JsonManagedReference(value="user-shop")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Shop> shops;

    //list of registration, null for admin
    @JsonManagedReference(value="user-reg")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<RegistrationDetails> myRegistrationList;

    private Date create_At;
    private Date update_At;

    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }

    /*
    UserDetails interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}