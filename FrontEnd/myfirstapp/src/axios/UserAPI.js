import axios from "axios";
import jwt_decode from "jwt-decode";
import useSWR from 'swr';

export const createUser = async (newUser) => {
    const req = await axios.post('http://localhost:8080/bookeroo/users/register', newUser)
        .then(res => res.data)
        .catch(error => error.message);
    return req;
}

export const loginAsUser = async (user) => {
    const req = await axios.post('http://localhost:8080/bookeroo/users/login', user)
      .then(res => {
        // extract token from res.data
        const { token } = res.data;
        // store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        // decode token on React
        const userInput = jwt_decode(token);
        
        return {currentUser: userInput};
      })
      .catch(error => error.response);
    return req;
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const GetUser = (id) => {
    const { data, error } = useSWR(`http://localhost:8080/bookeroo/users/get/user/id/${id}`, fetcher)
  
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
}