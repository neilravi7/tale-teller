import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    AUTHENTICATE_USER, 
    LOGOUT_USER, 
    CLEAR_AUTH_STATE
} from "./actionType";

import { API_URL } from "../../Helper/urls";
import { requestCreator } from "../../Helper/utils";
import { getUser } from "../../Helper/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function successLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function failedLogin(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function authenticateUser(user){
    return{
      type:AUTHENTICATE_USER,
      user
    }
  }
  
  export function logoutUser(){
    return{
      type:LOGOUT_USER
    }
  }
  
  export function clearAuthState(){
    return{
      type:CLEAR_AUTH_STATE,
    }
  }
  

//! Login Actions Handler
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const URL = API_URL.login();
    const requestOption = requestCreator("POST", {
      email: email,
      password: password,
    });
    fetch(URL, requestOption)
      .then((response) => {
        //handle status specific error
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Unauthorized: Invalid email or password");
          }
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        window.localStorage.setItem("access", data.access);
        window.localStorage.setItem("refresh", data.refresh);
        const { email, user_id, first_name, last_name } = getUser();
        const user = { email, user_id, first_name, last_name };
        dispatch(successLogin(user));
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(failedLogin(error.message));

        console.log("Resetting login state in 3 seconds...");

        setTimeout(() => {
          console.log("Resetting login state now...");
          dispatch(clearAuthState());
        }, 3000);
      });
  };
}
