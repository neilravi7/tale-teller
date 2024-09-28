import { UPDATE_POSTS } from "./actionType";
import { API_URL } from "../../Helper/urls";

export function updatePosts(posts){
    return{
        type:UPDATE_POSTS,
        posts
    }
}

export function fetchPostData(query){
    return(dispatch) => {
        fetch(API_URL.fetchAllPost(query))
            .then((response)=>{
                return response.json();
            })
            .then((data) => {
                dispatch(updatePosts(data));
                return {success:true}
            })
    }
} 