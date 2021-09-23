package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class bookServiceTest {

    @Autowired
    private BookService bookService;
    @Autowired
    private BookRepository bookRepository;

    @BeforeEach
    void clean_database() {
        bookRepository.deleteAll();
    }

    @AfterEach
    void clean_database_after() {
        bookRepository.deleteAll();
    }

    @Test
    @Transactional
    @Rollback
    public void createBook_function_check() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        Book saveBook = bookService.createABook(book);
        assertNotNull(saveBook);
    }

    @Test
    @Transactional
    @Rollback
    public void getBookById() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);
        Book testcase = bookService.getBookById(book.getBookId());
        assertNotNull(testcase);
    }

    @Test
    @Transactional
    @Rollback
    public void getBooksByIdList() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Book book2 = new Book();
        book2.setTitle("title");
        book2.setBookId(2L);
        book2.setIsbn("isbn1");
        book2.setCategory("category");
        book2.setDescription("description");
        book2.setAuthor("author");
        book2.setPublisher("publisher");
        bookService.createABook(book2);

        List<Long> bookIdList = new ArrayList<>();
        bookIdList.add(1L);
        bookIdList.add(2L);

        List<Book> testcase = bookService.getBooksByIdList(bookIdList);
        assertThat(testcase).size().isEqualTo(2);

    }

    @Test
    @Transactional
    @Rollback
    public void getBookByTitleAndIsbn() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        String title = "title";
        Book testcase = bookService.getBookByTitleAndISBN(title, "isbn");
        assertThat(testcase.getTitle()).isEqualTo(title);
    }

    @Test
    @Transactional
    @Rollback
    public void getBooksByAuthorContain() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");

        book.setPublisher("publisher");
        bookService.createABook(book);

        List<Book> testcase = bookService.getBooksByAuthorContain("AU");
        assertThat(testcase).size().isGreaterThan(0);

    }

    @Test
    @Transactional
    @Rollback
    public void getBooksByTitleContain() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        List<Book> testcase = bookService.getBooksByTitleContain("title");
        Book testcase_book = testcase.get(0);
        assertThat(testcase_book.getTitle()).isEqualTo("title");

    }

    @Test
    @Transactional
    @Rollback
    public void getBookByIsbn() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Book testcase = bookService.getBookByIsbn("isbn");
        assertThat(testcase.getIsbn()).isEqualTo("isbn");

    }
}
