package com.rmit.sept.bk_orderservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class OrderExcpetionHandler extends ResponseEntityExceptionHandler{

    @ExceptionHandler
    public final ResponseEntity<Object> handleOrderCreateFailedException(CreateOrderFailedException ex, WebRequest request){
        ErrorResponse exceptionResponse = new ErrorResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
