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