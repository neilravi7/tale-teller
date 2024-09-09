// Retrieve user access token
export function getAccessToken(){
    return window.localStorage.getItem('access');
};


// is user authenticated
export function isUserAuthenticated(){
    return window.localStorage.getItem('access') ? true : false;
};

// Retrieve user refresh token
export function getRefreshToken() {
    return window.localStorage.getItem('refresh');
};


// Decode User Token
export function getUser() {
    const userInfo = window.localStorage.getItem('access');
    if (userInfo) {
        const [, payload,] = userInfo.split('.');
        const decoded = window.atob(payload);
        return JSON.parse(decoded);
        
    }
    return undefined;
};

export function getUserDetails(){
    const user = isUserAuthenticated();
    if(user){
        const { email, user_id, first_name, last_name } = getUser();
        return { email, user_id, first_name, last_name };
    }else{
        return {}
    }
}

export function requestCreator(
    requestMethod, 
    requestBody, 
    needAuth=false){
        const requestHeader = new Headers();
        requestHeader.append("Content-Type", "application/json");

        //! add token if needs authentication
        if(needAuth){
            const token = getAccessToken();
            requestHeader.append("Authorization", `Bearer ${token}`);
        }
        const raw = JSON.stringify(requestBody); // expecting object { }
        const requestOptions = {
        method: requestMethod, // GET, POST, PUT, DELETE 
        headers: requestHeader,
        body: raw,
        redirect: "follow"
      };
    return requestOptions;
} // return promise