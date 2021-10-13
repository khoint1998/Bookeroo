import { userAxios } from "./axiosClient";
import useSWR from 'swr';

export const DeleteRegistration = async (regId) => {
    const req = await userAxios().delete('shops/shop/registration/delete/' + regId,
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
    const req = await userAxios().patch('shops/shop/registration/apply', registrationDetails,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}

export const UpdateCopyIdAndStatusForRegistration = async (regId,copyId) => {
    const req = await userAxios().patch('shops/shop/registration/approve/' + regId, null,
            {
                params: { copyId: copyId },
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}

const fetcher = (url) => userAxios()
.get(url, { headers: { Authorization: `${localStorage.jwtToken}` } })
.then((res) => res.data);

export const GetAllRegistrations = () => {
    const { data, error } = useSWR('shops/registration/get-all', fetcher)
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
}

export const UpdateStatusToSoldFromRegList = async (regIdList) => {
    const req = await userAxios().patch('registrations/update/status/to-sold', regIdList,
            {
                headers: {
                'Authorization': `${localStorage.jwtToken}` 
            }
        })
        .then(res => res)
        .catch(error => error.message);
    return req;
}