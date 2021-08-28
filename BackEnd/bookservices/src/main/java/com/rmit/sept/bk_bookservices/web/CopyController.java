package com.rmit.sept.bk_bookservices.web;

import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.services.CopyService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/bookeroo/copys")
public class CopyController {

    @Autowired
    private CopyService copyService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Copy copy, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Copy newCopy = copyService.createCopy(copy);

        return new ResponseEntity<Copy>(newCopy, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get/copy/id/{id}")
    public Copy getCopyById(@PathVariable Long id) {
        return copyService.getCopyById(id);
    }

}
