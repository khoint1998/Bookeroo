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
@RequestMapping("/bookeroo/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Book book, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Book newBook = bookService.createABook(book);

        return new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get/book/id/{id}")
    public Book getBookById(@PathVariable(value="id") Long id) {
        return bookService.getBookById(id);
    }

    @CrossOrigin(origins = "http//localhost:3000")
    @GetMapping("get/book/bookIdList/{bookIdList}")
    public List<Book> getBooksById(@PathVariable List<Long> bookIdList) {
        return bookService.getBooksById(bookIdList);
    }

}
