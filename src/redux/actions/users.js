import { UPDATE_USER_DETAILS } from "./actionType";
import { API_URL } from "../../Helper/urls";
import { requestCreator } from "../../Helper/utils";


export function updateUserProfile(user){
    return{
        type:UPDATE_USER_DETAILS,
        user
    }
}

export function updateUser(userId, userData){
    return(dispatch) => {
        const URL = API_URL.updateUserDetails(userId);
        
        const requestOptions = requestCreator(
            "PUT", 
            userData,
            true // needs authentication add token in request
        );
        fetch(URL, requestOptions)
        .then((response) => {
            if (!response.ok) {
                // Handle different status codes
                if (response.status === 400) {
                  throw new Error("Bad Request: Invalid request parameters.");
                }
                
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            dispatch(updateUserProfile(data));
            window.localStorage.setItem('userInfo', JSON.stringify(data));
            return data;
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}