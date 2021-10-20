package com.rmit.sept.bk_bookservices.web;

import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.model.CopyDTO;
import com.rmit.sept.bk_bookservices.services.CopyService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://front-1499221.ap-southeast-1.elb.amazonaws.com"})
@RequestMapping("/bookeroo/copys")
public class CopyController {

    @Autowired
    private CopyService copyService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody CopyDTO copyDto, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Copy newCopy = copyService.createCopy(copyDto);

        return new ResponseEntity<Copy>(newCopy, HttpStatus.CREATED);
    }

    @GetMapping("/get/copy/id/{id}")
    public Copy getCopyById(@PathVariable(value="id") Long id) {
        return copyService.getCopyById(id);
    }

    @PatchMapping("get/copy/copyIdList")
    public List<Copy> getCopiesByCopyIdList(@RequestBody List<Long> copyIdList) {
        return copyService.getCopiesByCopyIdList(copyIdList);
    }

    @GetMapping("get/copy/bookId/{id}")
    public List<Copy> getCopiesByBookId(@PathVariable(value="id") Long bookId) {
        return copyService.getCopiesByBookId(bookId);
    }

    @PatchMapping("/changeOwnerId/{copyId}")
    public void changeOwnerId(@PathVariable Long copyId, @RequestParam Long userId){
        copyService.changeOwnerId(copyId,userId);
    }

}
