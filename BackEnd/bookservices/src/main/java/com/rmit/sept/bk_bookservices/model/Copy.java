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

    private Long ownerId;

    private boolean newBook;

    @JsonBackReference(value="book-copy")
    @ManyToOne
    @JoinColumn(name ="bookId", nullable = false)
    private Book book;
}
