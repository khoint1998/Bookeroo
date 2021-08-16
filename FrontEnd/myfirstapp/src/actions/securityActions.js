import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {

    try{

        await axios.post("/api/users/register", newUser);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch (err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });



    }

};

export const login = LoginRequest => async dispatch => {
    try {

        //post => login request

        //extract token from res.data

        //set our token in the local storage

        // set our token in header 

        //decode the token on React

        // dispatch to our securityReducer

    }
    catch (err)
    {

    }

}
