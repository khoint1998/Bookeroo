package com.rmit.sept.bk_bookservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chapterId;

    private String chapterName;

    private String texts;

    private boolean previewable;

    @JsonBackReference(value="book-chapter")
    @ManyToOne
    @JoinColumn(name ="bookId", nullable = false)
    private Book book;
}
