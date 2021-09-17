package com.rmit.sept.bk_bookservices;


import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.Repositories.CopyRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import com.rmit.sept.bk_bookservices.model.CopyDTO;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.CopyService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class copyService_test {

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

    @Test
    public void createBook_function_check() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        CopyDTO copyDto = new CopyDTO();
        copyDto.setBookId("1");
        copyDto.setNewBook(true);
        copyDto.setOwnerId("1");


        Copy testcase = copyService.createCopy(copyDto);
        assertNotNull(testcase);
    }

    @Test
    public void getCopyById() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        CopyDTO copyDto = new CopyDTO();
        copyDto.setBookId("1");
        copyDto.setNewBook(true);
        copyDto.setOwnerId("1");
        copyService.createCopy(copyDto);
        Copy testcase = copyService.getCopyById(1L);
        assertThat(testcase.getOwnerId()).isEqualTo(1);

    }

    @Test
    public void getCopiesByCopyIdList() throws Exception {
        Book book = new Book();
        book.setTitle("title");
        book.setBookId(1L);
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        CopyDTO copyDto = new CopyDTO();
        copyDto.setBookId("1");
        copyDto.setNewBook(true);
        copyDto.setOwnerId("1");
        copyService.createCopy(copyDto);

        CopyDTO copyDto2 = new CopyDTO();
        copyDto2.setBookId("1");
        copyDto2.setNewBook(true);
        copyDto2.setOwnerId("1");
        copyService.createCopy(copyDto2);

        List<Long> copyIdList = new ArrayList<>();
        copyIdList.add(1L);
        copyIdList.add(2L);

        List<Copy> testcase = copyService.getCopiesByCopyIdList(copyIdList);
        assertThat(testcase).size().isEqualTo(2);

    }

    @Test
    public void getCopiesByBookId() throws Exception {
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
        book2.setTitle("title123");
        book2.setBookId(2L);
        book2.setIsbn("isbn123");
        book2.setCategory("category");
        book2.setDescription("description");
        book2.setAuthor("author");
        book2.setPublisher("publisher");
        bookService.createABook(book2);

        CopyDTO copyDto = new CopyDTO();
        copyDto.setBookId("1");
        copyDto.setNewBook(true);
        copyDto.setOwnerId("1");
        copyService.createCopy(copyDto);

        CopyDTO copyDto2 = new CopyDTO();
        copyDto2.setBookId("2");
        copyDto2.setNewBook(true);
        copyDto2.setOwnerId("2");
        copyService.createCopy(copyDto2);

        List<Long> copyIdList = new ArrayList<>();
        copyIdList.add(1L);
        copyIdList.add(2L);

        List<Copy> testcase = copyService.getCopiesByBookId(1L);
        Copy testcase_copy = testcase.get(0);
        assertThat(testcase_copy.getCopyId()).isEqualTo(1);
    }

}
