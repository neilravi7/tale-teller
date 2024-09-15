import { UPDATE_POSTS, CREATE_POST } from "./actionType";
import { API_URL } from "../../Helper/urls";

export function updatePosts(posts){
    return{
        type:UPDATE_POSTS,
        posts
    }
}

export function fetchPostData(){
    return(dispatch) => {
        fetch(API_URL.fetchAllPost())
            .then((response)=>{
                return response.json();
            })
            .then((data) => {
                dispatch(updatePosts(data));
            })
    }
} 