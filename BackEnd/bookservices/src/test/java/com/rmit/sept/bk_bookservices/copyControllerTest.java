package com.rmit.sept.bk_bookservices;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
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
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@SpringBootTest
public class copyControllerTest {

    private MockMvc mvc;
    @Autowired
    private WebApplicationContext wac;
    @Autowired
    private BookService bookService;
    @Autowired
    private CopyService copyService;

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
    void createCopy() {
        Book book = new Book();
        book.setBookId(1L);
        book.setTitle("java");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        CopyDTO copyDTO = new CopyDTO();
        copyDTO.setOwnerId("1");
        copyDTO.setNewBook(true);
        copyDTO.setBookId("1");
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();

        try {
            String url = "http://localhost:8081/bookeroo/copys/create";
            String response = mvc
                    .perform(post(url).contentType(MediaType.APPLICATION_JSON)
                            .content(objectWriter.writeValueAsString(copyDTO)))
                    .andReturn().getResponse().getContentAsString();
            assertNotNull(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getCopyById() {
        Book book = new Book();
        book.setTitle("java");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setOwnerId(1L);
        copy.setNewBook(true);
        copyRepository.save(copy);

        String copy_id = copy.getCopyId().toString();
        String url = "http://localhost:8081/bookeroo/copys/get/copy/id/" + copy_id;
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        RequestBuilder request = get(url);
        try {
            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
            String expected = "\"ownerId\":1";
            assertThat(response).contains(expected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getCopiesById() {
        Book book = new Book();
        book.setTitle("java");
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
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        String url = "http://localhost:8081/bookeroo/copys/get/copy/copyIdList";
        try {
            String response = mvc
                    .perform(patch(url).contentType(MediaType.APPLICATION_JSON)
                            .content(objectWriter.writeValueAsString(copyIdList)))
                    .andReturn().getResponse().getContentAsString();
            String expected_1 = "\"copyId\":" + copy.getCopyId().toString() + ",\"ownerId\":1,\"newBook\":true";
            String expected_2 = "\"copyId\":" + copy2.getCopyId().toString() + ",\"ownerId\":2,\"newBook\":true";
            assertThat(response).contains(expected_1, expected_2);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void changeOwnerId() {
        Book book = new Book();
        book.setTitle("java");
        book.setIsbn("isbn");
        book.setCategory("category");
        book.setDescription("description");
        book.setAuthor("author");
        book.setPublisher("publisher");
        bookService.createABook(book);

        Copy copy = new Copy();
        copy.setBook(book);
        copy.setOwnerId(1L);
        copy.setNewBook(true);
        copyRepository.save(copy);

        String copy_id = copy.getCopyId().toString();
        String url = "http://localhost:8081/bookeroo/copys/changeOwnerId/" + copy_id + "?userId=666";
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        try {
            mvc.perform(patch(url).contentType(MediaType.APPLICATION_JSON));
            Copy testcase = copyRepository.getByCopyId(copy.getCopyId());
            Long expect_ownerId = 666L;
            Long actual_ownerId = testcase.getOwnerId();
            assertThat(actual_ownerId).isEqualTo(expect_ownerId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
