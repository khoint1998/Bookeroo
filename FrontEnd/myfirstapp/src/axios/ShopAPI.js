import { userAxios } from "./axiosClient";

export const DeleteShop = async (shopId) => {
    const req = await userAxios().delete('shops/shop/delete/' + shopId,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}

//POST/PATCH have body at the middle of the func
export const CreateShop = async (userId,shopName) => {
    const req = await userAxios().patch('shops/shop/create/user/' + userId, null,
        {
            params: { shopName: shopName },
            headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}

export const GetShopsByCopyId = async() => {
    const req = await userAxios().get('shops/get-shops-by-copyId-list', {
        headers: {
            'Authorization': `${localStorage.jwtToken}` 
        }
    })
    .then(res => res)
    .catch(error => error.message);
    return req;
}