package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.exceptions.CopyNotFound_Exception;
import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.exceptions.SaveCopyFailedException;
import com.rmit.sept.bk_bookservices.repositories.CopyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CopyService {

    @Autowired
    private final CopyRepository copyRepository;

    @Autowired
    public CopyService(CopyRepository copyRepository) {
        this.copyRepository = copyRepository;
    }

    public Copy createCopy(Copy copy) {
        try {
            return copyRepository.save(copy);
        } catch (Exception e) {
            throw new SaveCopyFailedException("Can't not save this copy, please talk to admin");
        }
    }
    public Copy getCopyById(Long id) {
        try {
            return copyRepository.getByCopyId(id);
        } catch (Exception e) {
            throw new CopyNotFound_Exception("Copy does not exist");
        }
    }

}
