package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.model.Chapter;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class chapterModelTest {

    @Test
    @Rollback
    public void setChapterId_test() {
        Chapter chapter = new Chapter();
        Long expected = 1L;
        chapter.setChapterId(expected);
        Long actual = chapter.getChapterId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setChapterName_test() {
        Chapter chapter = new Chapter();
        String expected = "no.1";
        chapter.setChapterName(expected);
        String actual = chapter.getChapterName();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setTexts_test() {
        Chapter chapter = new Chapter();
        String expected = "hello world";
        chapter.setTexts(expected);
        String actual = chapter.getTexts();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void setPreviewable_test() {
        Chapter chapter = new Chapter();
        chapter.setPreviewable(true);
        boolean actual = chapter.isPreviewable();
        assertThat(actual).isTrue();
    }


    @Test
    @Rollback
    public void getChapterId_test() {
        Chapter chapter = new Chapter();
        Long expected = 1L;
        chapter.setChapterId(expected);
        Long actual = chapter.getChapterId();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getChapterName_test() {
        Chapter chapter = new Chapter();
        String expected = "no.1";
        chapter.setChapterName(expected);
        String actual = chapter.getChapterName();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getTexts_test() {
        Chapter chapter = new Chapter();
        String expected = "hello world";
        chapter.setTexts(expected);
        String actual = chapter.getTexts();
        assertThat(actual).isEqualTo(expected);
    }

    @Test
    @Rollback
    public void getPreviewable_test() {
        Chapter chapter = new Chapter();
        chapter.setPreviewable(true);
        boolean actual = chapter.isPreviewable();
        assertThat(actual).isTrue();
    }
}
