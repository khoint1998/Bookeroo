package com.rmit.sept.bk_bookservices.web;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bookeroo/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Book book, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Book newBook = bookService.createABook(book);

        return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("/get/book/id/{id}")
    public Book getBookById(@PathVariable(value="id") Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/get/book/title-isbn")
    public Book getBookByTitleAndISBN(@RequestParam String title, @RequestParam String isbn) {
        return bookService.getBookByTitleAndISBN(title,isbn);
    }

    @GetMapping("get/book/bookIdList")
    public List<Book> getBooksByIdList(@RequestBody List<Long> bookIdList) {
        return bookService.getBooksByIdList(bookIdList);
    }

    @GetMapping("get/books/title")
    public List<Book> getBooksByTitle(@RequestParam String title) {
        return bookService.getBooksByTitleContain(title);
    }

    @GetMapping("get/books/author")
    public List<Book> getBooksByAuthor(@RequestParam String author) {
        return bookService.getBooksByAuthorContain(author);
    }

    @GetMapping("get/book/isbn")
    public Book getBookByIsbn(@RequestParam String isbn) {
        return bookService.getBookByIsbn(isbn);
    }

    @GetMapping("get/book/title-author-isbn")
    public List<Book> getBooksByTitleAuthorISBN(@RequestParam String searchResult) {
        return bookService.getBooksByTitleAuthorISBN(searchResult);
    }

}
