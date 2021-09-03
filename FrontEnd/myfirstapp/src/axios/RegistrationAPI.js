import axios from "axios";

export const DeleteRegistration = async (regId) => {
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

export const CreateRegistration = async (registrationDetails) => {
    console.log(registrationDetails)
    const req = await axios.patch('http://localhost:8080/bookeroo/shops/shop/registration/apply', registrationDetails,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}