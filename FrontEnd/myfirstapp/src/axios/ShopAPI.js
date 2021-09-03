import axios from "axios";

export const DeleteShop = async (shopId) => {
    const req = await axios.delete('http://localhost:8080/bookeroo/shops/shop/delete/' + shopId,
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
    const req = await axios.patch('http://localhost:8080/bookeroo/shops/shop/create/user/' + userId, null,
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