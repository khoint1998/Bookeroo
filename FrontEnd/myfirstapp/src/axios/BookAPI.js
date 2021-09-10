import axios from "axios";

export const SearchForABook = async (title,isbn) => {

    //GET dont have Body at the middle of the func
    const req = await axios.get('http://localhost:8081/bookeroo/books/get/book/title-isbn',
        {
            params: { title: title, isbn: isbn },
            headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res.data)
        .catch(error => error.response.data.errorMessage);
    return req;
}

export const SearchBookAsResult = async (searchResult) => {

    //GET dont have Body at the middle of the func
    const req = await axios.get('http://localhost:8081/bookeroo/books/get/book/title-author-isbn',
        {
            params: { searchResult: searchResult },
            headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res.data)
        .catch(error => error.response.data.errorMessage);
    return req;
}

export const SearchBookWithSelectedOptions = async (searchResult, options) => {

    let finalReq = [];
    let titleReq = [];
    let authorReq = [];
    let isbnReq = [];

    if(options.title) {
        //GET Books by Title
        titleReq = await axios.get('http://localhost:8081/bookeroo/books/get/books/title',
        {
            params: { title: searchResult },
            headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res.data)
        .catch(error => error.response.data.errorMessage);
    }

    if(titleReq !== "Books not found. This title is invalid or this title is wrong") {
        finalReq = [...finalReq,titleReq];
    };
    
    if(options.author) {
        //GET Books by Author
        authorReq = await axios.get('http://localhost:8081/bookeroo/books/get/books/author',
            {
                params: { author: searchResult },
                headers: {
                    'Authorization': `${localStorage.jwtToken}` 
                }
            })
            .then(res => res.data)
            .catch(error => error.response.data.errorMessage);
    }

    if(authorReq !== "Books not found. The author is invalid or the author name is wrong") {
        finalReq = [...finalReq,authorReq];
    };
    
    if(options.isbn) {
        //GET Book by ISBN
        isbnReq = await axios.get('http://localhost:8081/bookeroo/books/get/book/isbn',
            {
                params: { isbn: searchResult },
                headers: {
                    'Authorization': `${localStorage.jwtToken}` 
                }
            })
            .then(res => res.data)
            .catch(error => error.response.data.errorMessage);
    }

    if(isbnReq !== "Book not found") {
        finalReq = [...finalReq,isbnReq];
    };

    return finalReq;
}