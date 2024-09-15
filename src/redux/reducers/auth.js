import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED, 
    AUTHENTICATE_USER, 
    LOGOUT_USER, 
    CLEAR_AUTH_STATE, 
    UPDATE_USER_DETAILS,
    SIGN_UP_START,
    SIGN_UP_FAILED,
} from "../actions/actionType";
import { isUserAuthenticated, getUserDetails } from "../../Helper/utils";


const userInfo = getUserDetails();
const  isAuthenticated = isUserAuthenticated();

const initialState = { 
    user:userInfo,
    error:null,
    success:false,
    isAuthenticated:isAuthenticated,
    inProgress:false
}

export default function auth(state = initialState, action){
    switch(action.type){

        case SIGN_UP_START:
        case LOGIN_START:
            return{ 
                ...state, 
                inProgress:false,
                success:false
            }

        case LOGIN_SUCCESS:
            return{ 
                ...state, 
                user:action.user,
                isAuthenticated:true,
                inProgress:false,
                success:true,
                error:null,
            }

        case SIGN_UP_FAILED:
        case LOGIN_FAILED:
            return{ 
                ...state, 
                inProgress:true,
                isAuthenticated:false,
                success:false,
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
                inProgress:false,
                success:false
            }
        case UPDATE_USER_DETAILS:
            return{ 
                ...state, 
                user:action.user
            }
        default:
            return{
                ...state
            }
    }
}