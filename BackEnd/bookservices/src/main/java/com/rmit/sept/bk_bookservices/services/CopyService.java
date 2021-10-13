package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.CopyNotFoundException;
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
            copy.setOwnerId(Long.parseLong(copyDto.getOwnerId()));

            return copyRepository.save(copy);
        } catch (Exception e) {
            throw new CreateCopyFailedException("Error creating this copy");
        }
    }
    public Copy getCopyById(Long id) {
        Copy selectedCopy = copyRepository.getByCopyId(id);
        if(selectedCopy==null) throw new CopyNotFoundException("Copy not found");
        return selectedCopy;
    }

    public List<Copy> getCopiesByCopyIdList (List<Long> copyIdList) {
        try {
            List<Copy> copyList = new ArrayList<Copy>();
            for (Long copyId : copyIdList) {
                Copy copy = copyRepository.getByCopyId(copyId);
                copyList.add(copy);
            }
            if (!copyList.isEmpty()) {
                return copyList;
            } else {
                throw new CopyNotFoundException("Something wrong. Cannot retrieve the copies requested");
            }
        } catch (Exception e) {
            throw new CopyNotFoundException("Something wrong. Cannot retrieve the copies requested");
        }
    }

    public List<Copy> getCopiesByBookId (Long bookId) {
        try {
            return copyRepository.getByBook_BookId(bookId);
        } catch (Exception e) {
            throw new CopyNotFoundException("Copies not found. This book id is invalid or the book id is wrong");
        }
    }

    public void changeOwnerId(Long copyId, Long userId) {
        try {
            Copy copy = copyRepository.getByCopyId(copyId);
            copy.setOwnerId(userId);
            copyRepository.save(copy);
        } catch (Exception e) {
            throw new CopyNotFoundException("Change owner Id failed");
        }
    }
}
