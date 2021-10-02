import { userAxios } from "./axiosClient";
import useSWR from 'swr';

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

const fetcher = (url) => userAxios('book')
.get(url, { headers: { Authorization: `${localStorage.jwtToken}` } })
.then((res) => res.data);

export const GetCopiesByBookId = (bookId) => {
    const { data, error } = useSWR('copys/get/copy/bookId/' + bookId, fetcher)
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
}