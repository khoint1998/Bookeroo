package com.rmit.sept.bk_bookservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SaveCopyFailedException extends RuntimeException {

    public SaveCopyFailedException(String message) {
        super(message);
    }
}
