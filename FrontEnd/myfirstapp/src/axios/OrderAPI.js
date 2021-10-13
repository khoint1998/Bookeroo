import { userAxios } from "./axiosClient";

export const CreateOrder = async (order) => {
    const req = await userAxios('order').post('orders/create', order,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}