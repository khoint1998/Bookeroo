package com.rmit.sept.bk_bookservices.repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository extends CrudRepository <Book, Long> {

    Book getByBookId(Long id);
}
