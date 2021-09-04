package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.exceptions.BookNotFoundException;
import com.rmit.sept.bk_bookservices.exceptions.CopyNotFoundException;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Copy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        Book book = bookRepository.getByBookId(id);
        if(book==null) throw new BookNotFoundException("Book not found");
        return book;
    }

    public List<Book> getBooksByIdList (List<Long> bookIdList) {
        try {
            List<Book> bookList = new ArrayList<Book>();
            for (Long bookId : bookIdList) {
                Book book = bookRepository.getByBookId(bookId);
                bookList.add(book);
            }
            return bookList;
        } catch (Exception e) {
            throw new BookNotFoundException("Cannot retrieve book");
        }
    }

    public Book getBookByTitleAndISBN(String title, String isbn) {
        try {
            Book selectedBook = bookRepository.getByIsbn(isbn);
            if(selectedBook.getTitle().equals(title)) {
                return selectedBook;
            } else {
                throw new BookNotFoundException("");
            }
        } catch (Exception e) {
            throw new BookNotFoundException("Something wrong. Book not found or Book name does not match the ISBN provided");
        }
    }
}
