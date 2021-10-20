import { userAxios } from "./axiosClient";
import useSWR from 'swr';

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

const fetcher = async (url,copyIdList) => await userAxios()
.put(url, copyIdList, { headers: { Authorization: `${localStorage.jwtToken}` } })
.then((res) => res.data);

export const GetShopsByCopyIdList = (copyIdList) => {

    const { data, error } = useSWR(() => {
            //Check if copyIdList is there first, then do the request
            if(copyIdList) {
                return 'shops/get-shops-by-copyId-list'
            }
        }, url => fetcher(url,copyIdList))
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
}