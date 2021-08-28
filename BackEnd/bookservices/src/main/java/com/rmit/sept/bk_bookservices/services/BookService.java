package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.exceptions.BookNotFoundException;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book createABook(Book book) {
        try {
            return bookRepository.save(book);
        } catch (Exception e) {
            throw new ISBNAlreadyExistsException("ISBN '" +book.getIsbn()+"' already exists");
        }
    }

    public Book getBookById (Long id) {
        try {
            return bookRepository.getByBookId(id);
        } catch (Exception e) {
            throw new BookNotFoundException("Book does not exist");
        }
    }
}
