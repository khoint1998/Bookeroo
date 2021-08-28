package com.rmit.sept.bk_bookservices.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.awt.*;
import java.util.Collection;
import java.util.Date;



@Entity
@Getter @Setter
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    @NotBlank(message = "ISBN input is required")
    @Column(unique = true)
    private String isbn;

    @NotBlank(message = "Please input a book title")
    private String title;

    @NotBlank(message = "Please input the fullname of the author")
    private String author;

    @NotBlank(message = "Description of book is required")
    private String description;

    @NotBlank(message = "Book must have a Category")
    private String category;

//    private Date publish_Date;

    @NotBlank(message = "Book must have a Publisher")
    private String publisher;

//    private Image cover_Page;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private Collection<Copy> copy;


}
