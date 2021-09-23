package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class bookRepositoryTest {

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
    public void getByBookId() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);
        Book testcase = bookRepository.getByBookId(book.getBookId());
        assertThat(testcase.getTitle()).isEqualTo("title");
    }
    @Test
    public void getByIsbn() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);
        Book testcase = bookRepository.getByIsbn("isbn");
        assertThat(testcase.getIsbn()).isEqualTo("isbn");
    }

    @Test
    public void getByTitleContainingIgnoreCase() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Book book2 = new Book();
        book2.setTitle("title123");
        book2.setBookId(2L);
        book2.setIsbn("isbn123");
        book2.setCategory("category");
        book2.setDescription("description");
        book2.setAuthor("author");
        book2.setPublisher("publisher");
        bookRepository.save(book2);

        List<Book> testcase = bookRepository.getByTitleContainingIgnoreCase("Ti");
        Book testcase_book = testcase.get(0);
        assertThat(testcase_book.getTitle()).isEqualTo("title");
    }

    @Test
    public void getByAuthorContainingIgnoreCase() {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Book book2 = new Book();
        book2.setTitle("title123");
        book2.setBookId(2L);
        book2.setIsbn("isbn123");
        book2.setCategory("category");
        book2.setDescription("description");
        book2.setAuthor("author");
        book2.setPublisher("publisher");
        bookRepository.save(book2);

        List<Book> testcase = bookRepository.getByAuthorContainingIgnoreCase("Au");
        assertThat(testcase).size().isEqualTo(2);
    }
}
