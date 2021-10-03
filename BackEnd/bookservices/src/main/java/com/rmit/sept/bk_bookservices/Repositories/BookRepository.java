package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookRepository extends CrudRepository <Book, Long> {

    Book getByBookId(Long id);
    Book getByIsbn(String isbn);

    List<Book> findAll();

    List<Book> getByTitleContainingIgnoreCase(String title);

    List<Book> getByAuthorContainingIgnoreCase(String author);

    List<Book> getBooksByIsbn(String title);

}
