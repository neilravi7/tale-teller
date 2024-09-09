import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, AUTHENTICATE_USER, LOGOUT_USER, CLEAR_AUTH_STATE, UPDATE_USER_DETAILS } from "../actions/actionType";
import { isUserAuthenticated, getUserDetails } from "../../Helper/utils";


const userInfo = getUserDetails();
const  isAuthenticated = isUserAuthenticated();

const initialState = { 
    user:userInfo,
    error:null,
    isAuthenticated:isAuthenticated,
    inProgress:false
}

export default function auth(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return{ 
                ...state, 
                inProgress:false,
            }
        
        case LOGIN_SUCCESS:
            return{ 
                ...state, 
                user:action.user,
                isAuthenticated:true,
                inProgress:false,
                error:null,
            }

        case LOGIN_FAILED:
            return{ 
                ...state, 
                inProgress:true,
                isAuthenticated:false,
                error:action.error,
        }
        case AUTHENTICATE_USER:
            return{
                ...state, 
                user:action.user,
                isAuthenticated:true,
            }
        case LOGOUT_USER:
            return{
                ...state, 
                user:{},
                isAuthenticated:false,
            }
        case CLEAR_AUTH_STATE:
            return{
                ...state,
                error:null,
                inProgress:false
            }
        case UPDATE_USER_DETAILS:
            return{ 
                ...state, 
                user:{
                    ...action.user, // some key level problem // Spread the existing properties of action.user
                    id:action.user.user_id // Override or add the id property with user_id value
                },
            }
        default:
            return{
                ...state
            }
    }
}