import { userAxios } from "./axiosClient";

export const CreateCopy = async (copyDto) => {
    const req = await userAxios('book').post('copys/create', copyDto,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })  
        .then(res => res)
        .catch(error => error.message);
    return req;
}

export const CopiesByBookID = async (BookId) => {
    const req = await userAxios().get('copys/get/copy/bookId/' + BookId, {
        headers: {
            'Authorization': `${localStorage.jwtToken}` 
        }
    })
    .then(res => res.data)
    .catch(error => error.response.data.errorMessage)
}