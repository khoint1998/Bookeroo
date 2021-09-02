import axios from "axios";

export const DeleteRegistration = async (regId) => {
    console.log(localStorage.jwtToken);
    const req = await axios.delete('http://localhost:8080/bookeroo/shops/shop/registration/delete/' + regId,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}