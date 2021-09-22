package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Copy;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class copyModelTest {

    @Test
    @Rollback
    public void setCopyId_test() throws Exception {
        Copy copy = new Copy();
        Long expected = 2L;
        copy.setCopyId(expected);
        Long testcase = copy.getCopyId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setOwnerId_test() throws Exception {
        Copy copy = new Copy();
        Long expected = 2L;
        copy.setOwnerId(expected);
        Long testcase = copy.getOwnerId();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setBook_test() throws Exception {
        Book expected = new Book();
        expected.setBookId(1L);
        expected.setIsbn("123456");
        expected.setAuthor("chen");
        expected.setTitle("java");
        expected.setCategory("children");
        expected.setDescription("good");
        expected.setPublisher("chen");

        Copy copy = new Copy();
        copy.setBook(expected);
        Book testcase = copy.getBook();
        assertThat(testcase).isEqualTo(expected);
    }

    @Test
    public void getCopy_Id() throws Exception {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        Copy copy = new Copy();
        copy.setCopyId(1L);
        copy.setOwnerId(1L);
        copy.setNewBook(true);
        copy.setBook(book);

        Long testcase = copy.getCopyId();
        assertThat(testcase).isEqualTo(1);
    }

    @Test
    public void getCopy_OwnerId() throws Exception {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        Copy copy = new Copy();
        copy.setCopyId(1L);
        copy.setOwnerId(1L);
        copy.setNewBook(true);
        copy.setBook(book);

        Long testcase = copy.getOwnerId();
        assertThat(testcase).isEqualTo(1);
    }

    @Test
    public void getBook_bookId() throws Exception {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        Copy copy = new Copy();
        copy.setCopyId(1L);
        copy.setOwnerId(1L);
        copy.setNewBook(true);
        copy.setBook(book);

        Book testcase = copy.getBook();
        assertThat(testcase).isEqualTo(book);
    }



}
