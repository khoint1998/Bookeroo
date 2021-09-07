package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.exceptions.BookNotFoundException;
import com.rmit.sept.bk_bookservices.exceptions.CopyNotFound_Exception;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Copy;
import javafx.scene.Parent;
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

    public List<Book> getBooksByTitleContain(String title) {
        try {
            //List<Book> bookList = bookRepository.getByTitleContaining(title);
            List<Book> bookList = bookRepository.getByTitleContainingIgnoreCase(title);
            if(!bookList.isEmpty()){
                return bookList;
            } else {
                throw new BookNotFoundException("Books not found. This title is invalid or this title is wrong");
            }
        } catch (Exception e) {
            throw new BookNotFoundException("Books not found. This title is invalid or this title is wrong");
        }
    }

    public List<Book> getBooksByAuthorContain(String author) {
        try {
            //List<Book> bookList = bookRepository.getByAuthorContaining(author);
            List<Book> bookList = bookRepository.getByAuthorContainingIgnoreCase(author);
            if(!bookList.isEmpty()){
                return bookList;
            } else {
                throw new BookNotFoundException("Books not found. The author is invalid or the author name is wrong");
            }
        } catch (Exception e) {
            throw new BookNotFoundException("Books not found. The author is invalid or the author name is wrong");
        }
    }

    public List<Book> getBooksByIsbn(String isbn) {
        try {
            List<Book> bookList = bookRepository.getBooksByIsbn(isbn);
            if(!bookList.isEmpty()){
                return bookList;
            } else {
                throw new BookNotFoundException("Books not found. Isbn is invalid or the Isbn is wrong");
            }
        } catch (Exception e) {
            throw new BookNotFoundException("Books not found. Isbn is invalid or the Isbn is wrong");
        }
    }
}
