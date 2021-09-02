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