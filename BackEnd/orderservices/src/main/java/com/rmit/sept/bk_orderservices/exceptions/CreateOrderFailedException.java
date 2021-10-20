package com.rmit.sept.bk_orderservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CreateOrderFailedException extends RuntimeException{

    public CreateOrderFailedException(String message) {
        super(message);
    }
}
