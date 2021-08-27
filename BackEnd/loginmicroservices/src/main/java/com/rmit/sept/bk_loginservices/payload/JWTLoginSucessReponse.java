package com.rmit.sept.bk_loginservices.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.Authentication;

@Getter @Setter @AllArgsConstructor
public class JWTLoginSucessReponse {
    private boolean success;;
    private String token;

    @Override
    public String toString() {
        return "{" +
                "sucess='" + success  +
                ", token='" + token + '\'' +
                '}';
    }
}
