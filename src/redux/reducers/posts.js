import { UPDATE_POSTS } from "../actions/actionType"

export default function posts (state=[], action){
    switch (action.type){
        case UPDATE_POSTS:
            return action.posts
        default:
            return state
    }
}