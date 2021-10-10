package com.rmit.sept.bk_loginservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChangePasswordDTO {
    private String email;

    private String password;

    private String confirmPassword;
}
