package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Copy;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CopyRepository extends CrudRepository <Copy, Long> {

    Copy getByCopyId(Long id);
    List<Copy> getByBook_BookId(Long bookId);
}
