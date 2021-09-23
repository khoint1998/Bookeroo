package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.Repositories.CopyRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class copyRepositoryTest {

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private CopyRepository copyRepository;

    @BeforeEach
    void clean_database() {
        copyRepository.deleteAll();
        bookRepository.deleteAll();
    }

    @AfterEach
    void clean_database_after() {
        copyRepository.deleteAll();
        bookRepository.deleteAll();
    }

    @Test
    public void getByCopyId() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);
        Long copy_id = copy.getCopyId();
        Copy testcase = copyRepository.getByCopyId(copy_id);
        assertThat(testcase.getCopyId()).isEqualTo(copy_id);
    }

    @Test
    public void getByBook_BookId() {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);

        Copy copy2 = new Copy();
        copy2.setBook(book);
        copy2.setNewBook(true);
        copy2.setOwnerId(1L);
        copyRepository.save(copy2);
        List<Copy> testcase = copyRepository.getByBook_BookId(book.getBookId());
        assertThat(testcase.size()).isEqualTo(2);
    }
}
