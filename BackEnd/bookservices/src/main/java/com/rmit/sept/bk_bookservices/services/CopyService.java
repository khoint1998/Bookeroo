package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.CopyNotFound_Exception;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.exceptions.CreateCopyFailedException;
import com.rmit.sept.bk_bookservices.Repositories.CopyRepository;
import com.rmit.sept.bk_bookservices.model.CopyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CopyService {

    @Autowired
    private CopyRepository copyRepository;

    @Autowired
    private BookRepository bookRepository;

    public Copy createCopy(CopyDTO copyDto) {
        try {
            Book book = bookRepository.getByBookId(Long.parseLong(copyDto.getBookId()));
            Copy copy = new Copy();

            copy.setBook(book);
            copy.setNewBook(copyDto.isNewBook());
            copy.setPrice(copyDto.getPrice());
            copy.setOwnerId(copyDto.getOwnerId());

            return copyRepository.save(copy);
        } catch (Exception e) {
            throw new CreateCopyFailedException("Error creating this copy");
        }
    }
    public Copy getCopyById(Long id) {
        try {
            return copyRepository.getByCopyId(id);
        } catch (Exception e) {
            throw new CopyNotFound_Exception("Copy does not exist");
        }
    }

    public List<Copy> getCopiesById (List<Long> copyIdList) {
        try {
            List<Copy> copyList = new ArrayList<Copy>();
            for (Long copyId : copyIdList) {
                Copy copy = copyRepository.getByCopyId(copyId);
                copyList.add(copy);
            }
            return copyList;
        } catch (Exception e) {
            throw new CopyNotFound_Exception("Something wrong. Cannot retrieve the copies requested");
        }
    }

}
