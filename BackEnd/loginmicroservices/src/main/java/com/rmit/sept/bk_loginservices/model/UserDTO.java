package com.rmit.sept.bk_loginservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

    private String email;

    private String username;

    private String fullName;

    private String role;
}
