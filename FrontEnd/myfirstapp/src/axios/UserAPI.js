import { userAxios } from "./axiosClient";
import jwt_decode from "jwt-decode";
import useSWR from 'swr';

export const createUser = async (newUser) => {
    const req = await userAxios().post('users/register', newUser)
        .then(res => res.data)
        .catch(error => error.message);
    return req;
}

export const loginAsUser = async (user) => {
    const req = await userAxios().post('users/login', user)
      .then(res => {
        // extract token from res.data
        const { token } = res.data;
        // store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        // decode token on React
        const user = jwt_decode(token);
        
        return {currentUser: user};
      })
      .catch(error => error.response);
    return req;
}

export const resetPassword = async (data) => {
  const req = await userAxios().patch('users/change-password', data)
    .then(res => res.data)
    .catch(error => error.response);
  return req;
}

const fetcher = (...args) => userAxios().get(...args).then((res) => res.data)

export const GetUserInfo = (id) => {
    const { data, error } = useSWR(() => {
      //Check if id is there first, then do the request
      if(id) {
        return 'users/get/user/id/' + id
      }
    }
    , fetcher)
  
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
}