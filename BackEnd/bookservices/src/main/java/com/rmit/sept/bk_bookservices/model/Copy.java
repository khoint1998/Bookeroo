package com.rmit.sept.bk_bookservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.awt.*;
import java.util.Date;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Copy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long copyId;

    @NotBlank(message = "Please")
    private String owner;

    @NotBlank(message = "Please input the booktype: brand new or second hand")
    private String booktype;

    @NotBlank(message = "Please enter a price")
    private float price;

    @ManyToOne
    @JoinColumn(name ="bookId", nullable = false)
    private Book book;

}
