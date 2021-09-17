package com.rmit.sept.bk_bookservices;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.CopyDTO;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.CopyService;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;


@SpringBootTest
public class copyControllerTest {

    private MockMvc mvc;
    @Autowired
    private WebApplicationContext wac;
    @Autowired
    private BookService bookService;
    @Autowired
    private CopyService copyService;

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
            String response = mvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)
                    .content(objectWriter.writeValueAsString(copyDTO))).andReturn().getResponse().getContentAsString();
            assertNotNull(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    void getCopyById() {
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
        copyService.createCopy(copyDTO);

        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        RequestBuilder request = get("http://localhost:8081/bookeroo/copys/get/copy/id/1");
        try {
            String response = mvc.perform(request).andReturn().getResponse().getContentAsString();
            String expected = "{\"copyId\":1,\"ownerId\":1,\"newBook\":true}";
            assertThat(response).isEqualTo(expected);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void getCopiesById() {
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
        copyService.createCopy(copyDTO);

        CopyDTO copyDTO2 = new CopyDTO();
        copyDTO2.setOwnerId("2");
        copyDTO2.setNewBook(true);
        copyDTO2.setBookId("1");
        copyService.createCopy(copyDTO2);

        List<Long> copyIdList = new ArrayList<>();
        copyIdList.add(1L);
        copyIdList.add(2L);
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        mvc = MockMvcBuilders.webAppContextSetup(wac).build();
        String url = "http://localhost:8081/bookeroo/copys/get/copy/copyIdList";
        try {
            String response = mvc.perform(get(url).contentType(MediaType.APPLICATION_JSON)
                            .content(objectWriter.writeValueAsString(copyIdList))).andReturn().getResponse().getContentAsString();
            String expected = "[{\"copyId\":1,\"ownerId\":1,\"newBook\":true},{\"copyId\":2,\"ownerId\":2,\"newBook\":true}]";
            System.out.println(response);
            assertThat(response).isEqualTo(expected);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
