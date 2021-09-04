import axios from "axios";
import useSWR from 'swr';

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

export const UpdateCopyIdAndStatusForRegistration = async (regId,copyId) => {
    const req = await axios.patch('http://localhost:8080/bookeroo/shops/shop/registration/approve/' + regId, null,
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

const fetcher = (url) => axios
.get(url, { headers: { Authorization: `${localStorage.jwtToken}` } })
.then((res) => res.data);

export const GetAllRegistrations = () => {
    // const header = {headers: {'Authorization': `${localStorage.jwtToken}` }}
    const { data, error } = useSWR('http://localhost:8080/bookeroo/shops/registration/get-all', fetcher)
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
}