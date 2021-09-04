import axios from "axios";

export const CreateCopy = async (copyDto) => {
    const req = await axios.post('http://localhost:8081/bookeroo/copys/create', copyDto,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })  
        .then(res => res)
        .catch(error => error.message);
    return req;
}