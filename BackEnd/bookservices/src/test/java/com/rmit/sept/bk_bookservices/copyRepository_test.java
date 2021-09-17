package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.Repositories.CopyRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class copyRepository_test {

    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private CopyRepository copyRepository;

    @BeforeEach
    void clean_database() {
        copyRepository.deleteAll();
        bookRepository.deleteAll();
    }

    @Test
    public void getByCopyId() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Copy copy = new Copy();
        copy.setCopyId(1L);
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);

        Copy testcase = copyRepository.getByCopyId(1L);
        assertThat(testcase.getOwnerId()).isEqualTo(1L);
    }
    @Test
    public void getCopiesByBook_BookId() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookRepository.save(book);

        Copy copy = new Copy();
        copy.setCopyId(1L);
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);

        Copy copy2 = new Copy();
        copy2.setCopyId(2L);
        copy2.setBook(book);
        copy2.setNewBook(true);
        copy2.setOwnerId(2L);
        copyRepository.save(copy2);

        List<Copy> testcase = copyRepository.getByBook_BookId(1L);
        assertThat(testcase).size().isEqualTo(2);

    }


}
