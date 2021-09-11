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