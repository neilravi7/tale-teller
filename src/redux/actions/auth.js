import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    AUTHENTICATE_USER, 
    LOGOUT_USER, 
    CLEAR_AUTH_STATE,
    SIGN_UP_START,
    SIGN_UP_FAILED,
    
} from "./actionType";

import { API_URL } from "../../Helper/urls";
import { requestCreator } from "../../Helper/utils";

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

//! USER Registration actions

export function startSignUp() {
  return {
    type: SIGN_UP_START,
  };
}


export function signUpFailed(errorMessage){
  return{
    type:SIGN_UP_FAILED,
    error:errorMessage
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
        console.log("IN DATA BLOCK");
        window.localStorage.setItem("access", data.access);
        window.localStorage.setItem("refresh", data.refresh);
        window.localStorage.setItem('userInfo', JSON.stringify(data.userDetails));
        dispatch(successLogin(data.userDetails));
        dispatch(clearAuthState());
      })
      .catch((error) => {
        console.log("IN Catch BLOCK");
        dispatch(failedLogin(error.message));
        setTimeout(() => {
          console.log("Resetting login state now...");
          dispatch(clearAuthState());
        }, 7000);
      });
  };
}

export function signUp(email, password, password2){
  return (dispatch) => {
    dispatch(startSignUp());
    const URL = API_URL.signUp();
    const requestOption = requestCreator(
      'POST', 
      {email: email, password1: password, password2: password2}
    );

    return fetch(URL, requestOption)  // Return the fetch call here
      .then((response) => {
        console.log("response.status: ", response.ok);
        if (response.status !== 201) {
          throw new Error(`${response.status}: Unable to create account`);
        }
        dispatch(clearAuthState());
        return { success: true };  // Return a success object here
      })
      .catch((error) => {
        dispatch(signUpFailed(error.message));

        setTimeout(() => {
          dispatch(clearAuthState());
        }, 7000);
      });
  };
}

