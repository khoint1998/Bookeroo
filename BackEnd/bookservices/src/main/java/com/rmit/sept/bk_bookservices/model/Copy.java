package com.rmit.sept.bk_bookservices.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Copy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long copyId;

    @NotBlank(message = "OwnerId (userId - id) is missing")
    private String ownerId;

    @Column(columnDefinition = "boolean default true")
    private boolean newBook;

    @Column(columnDefinition = "float default 0.0")
    private float price;

    @JsonBackReference(value="book-copy")
    @ManyToOne
    @JoinColumn(name ="bookId", nullable = false)
    private Book book;

}