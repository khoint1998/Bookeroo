package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.Repositories.CopyRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.model.CopyDTO;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.CopyService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class copyServiceTest {

    @Autowired
    private CopyService copyService;
    @Autowired
    private BookService bookService;
    @Autowired
    private CopyRepository copyRepository;
    @Autowired
    private BookRepository bookRepository;

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
    public void createBook_function_check() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        CopyDTO copyDto = new CopyDTO();
        String book_id = book.getBookId().toString();
        copyDto.setBookId(book_id);
        copyDto.setNewBook(true);
        copyDto.setOwnerId("1");

        Copy testcase = copyService.createCopy(copyDto);
        assertNotNull(testcase);
    }

    @Test
    public void getCopyById() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);

        Copy testcase = copyService.getCopyById(copy.getCopyId());
        assertThat(testcase.getCopyId()).isEqualTo(copy.getCopyId());

    }

    @Test
    public void getCopiesByCopyIdList() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);


        Copy copy2 = new Copy();
        copy2.setBook(book);
        copy2.setNewBook(true);
        copy2.setOwnerId(2L);
        copyRepository.save(copy2);

        List<Long> copyIdList = new ArrayList<>();
        copyIdList.add(copy.getCopyId());
        copyIdList.add(copy2.getCopyId());

        List<Copy> testcase = copyService.getCopiesByCopyIdList(copyIdList);
        assertThat(testcase).size().isEqualTo(2);

    }

    @Test
    public void getCopiesByBookId() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Book book2 = new Book();
        book2.setTitle("title123");
        book2.setIsbn("isbn123");
        book2.setCategory("category");
        book2.setDescription("description");
        book2.setAuthor("author");
        book2.setPublisher("publisher");
        bookService.createABook(book2);

        Copy copy = new Copy();
        Long book1_id = book.getBookId();
        copy.setBook(book);
        copy.setNewBook(true);
        copy.setOwnerId(1L);
        copyRepository.save(copy);

        Copy copy2 = new Copy();
        copy2.setBook(book2);
        copy2.setNewBook(true);
        copy2.setOwnerId(2L);
        copyRepository.save(copy2);

        List<Copy> testcase = copyService.getCopiesByBookId(book1_id);
        Copy testcase_copy = testcase.get(0);
        assertThat(testcase_copy.getCopyId()).isEqualTo(copy.getCopyId());
    }

}
