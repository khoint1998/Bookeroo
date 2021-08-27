package com.rmit.sept.bk_bookservices.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class InvalidLoginResponse {

        private String username;
        private String password;

        public InvalidLoginResponse() {
            this.username = "Invalid Username (Spring Security)";
            this.password = "Invalid Password (Spring Security)";
        }
    }


