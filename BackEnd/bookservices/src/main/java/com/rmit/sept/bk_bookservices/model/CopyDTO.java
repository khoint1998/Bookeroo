package com.rmit.sept.bk_bookservices.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CopyDTO {
    private String ownerId;

    private boolean newBook;

    private String bookId;
}
