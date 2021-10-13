package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.model.Book;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class bookModelTest {

    @Test
    @Rollback
    public void setBookId_test() {

        Book book = new Book();
        Long expected = 2L;
        book.setBookId(expected);
        Long testcase = book.getBookId();
        assertThat(testcase).isEqualTo(expected);

    }


    @Test
    @Rollback
    public void setIsbn_test() {

        Book book = new Book();
        String expected  = "123";
        book.setIsbn(expected);
        String testcase = book.getIsbn();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setAuthor_test() {

        Book book = new Book();
        String expected  = "chen";
        book.setAuthor(expected);
        String testcase = book.getAuthor();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setTitle_test() {

        Book book = new Book();
        String expected  = "java";
        book.setTitle(expected);
        String testcase = book.getTitle();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setCategory_test() {

        Book book = new Book();
        String expected  = "children";
        book.setCategory(expected);
        String testcase = book.getCategory();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setDescription_test() {

        Book book = new Book();
        String expected  = "this is a very good book";
        book.setDescription(expected);
        String testcase = book.getDescription();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setPublisher_test() {

        Book book = new Book();
        String expected  = "chen";
        book.setPublisher(expected);
        String testcase = book.getPublisher();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    @Rollback
    public void setCoverPage_test() {

        Book book = new Book();
        String expected  = "this is cover page";
        book.setCoverPage(expected);
        String testcase = book.getCoverPage();
        assertThat(testcase).isEqualTo(expected);

    }

    @Test
    public void getBook_title() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getTitle();
        assertThat(testcase).isEqualTo("java");
    }

    @Test
    public void getBook_Isbn() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getIsbn();
        assertThat(testcase).isEqualTo("123456");
    }

    @Test
    public void getBook_Author() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getAuthor();
        assertThat(testcase).isEqualTo("chen");
    }
    @Test
    public void getBook_Category() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getCategory();
        assertThat(testcase).isEqualTo("children");
    }
    @Test
    public void getBook_Description() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getDescription();
        assertThat(testcase).isEqualTo("good");
    }

    @Test
    public void getBook_Publisher() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        String testcase = book.getPublisher();
        assertThat(testcase).isEqualTo("chen");
    }

    @Test
    public void getBook_Id() {
        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");

        Long testcase = book.getBookId();
        assertThat(testcase).isEqualTo(1);
    }

    @Test
    @Rollback
    public void getCoverPage_test() {

        Book book = new Book();
        book.setBookId(1L);
        book.setIsbn("123456");
        book.setAuthor("chen");
        book.setTitle("java");
        book.setCategory("children");
        book.setDescription("good");
        book.setPublisher("chen");
        book.setCoverPage("this is cover page");

        String testcase = book.getCoverPage();
        assertThat(testcase).isEqualTo("this is cover page");
    }
}
