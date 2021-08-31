package com.rmit.sept.bk_bookservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CopyNotFound_Exception extends RuntimeException{
    public CopyNotFound_Exception(String message) {
        super(message);
    }
}
