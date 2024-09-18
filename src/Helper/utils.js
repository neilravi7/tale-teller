// Retrieve user access token
export function getAccessToken(){
    return window.localStorage.getItem('access');
};


// is user authenticated
export function isUserAuthenticated(){
    return window.localStorage.getItem('access') ? true : false;
};

// is user authenticated
export function hasUser(){
    return window.localStorage.getItem('userInfo') ? true : false;
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
    const user = hasUser();
    if(user){
        return JSON.parse(window.localStorage.getItem('userInfo'));
    }else{
        return {}
    }
}

export function logoutUser(){
    window.localStorage.removeItem("access");
    window.localStorage.removeItem("refresh");
    window.localStorage.removeItem("userDetails");
}


export function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

export function requestCreator(
    requestMethod, 
    requestBody={}, 
    needAuth=false){
        
        const requestHeader = new Headers();
        requestHeader.append("Content-Type", "application/json");

        //! add token if needs authentication

        if(needAuth){
            const token = getAccessToken();
            requestHeader.append("Authorization", `Bearer ${token}`);
        }
        
        const requestOptions = {
            method: requestMethod, // GET, POST, PUT, DELETE 
            headers: requestHeader,
            redirect: "follow"
        };
        
        if(requestMethod !== "GET" && requestMethod !== "DELETE"){
            requestOptions["body"] = JSON.stringify(requestBody);
        }
        
    return requestOptions;
} // return promise