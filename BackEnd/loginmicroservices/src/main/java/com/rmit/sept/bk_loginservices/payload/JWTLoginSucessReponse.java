package com.rmit.sept.bk_loginservices.payload;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.Authentication;

@Getter @Setter
public class JWTLoginSucessReponse {
    private final Authentication authentication;
    private String token;

    public JWTLoginSucessReponse(Authentication authentication, String token) {
        this.authentication = authentication;
        this.token = token;
    }

    @Override
    public String toString() {
        return "{" +
                authentication.getPrincipal() +
                ", token='" + token + '\'' +
                '}';
    }
}
