const API_ROOT = 'http://127.0.0.1:8000/api/v1'

export const API_URL = {

    // users API's
    login:() => `${API_ROOT}/users/login`,
    signUp:()=> `${API_ROOT}/users/signup`,
    updateUserDetails:(userId) => `${API_ROOT}/users/${userId}`,
    getUserProfile:(userId) => `${API_ROOT}/users/${userId}/profile`,
    
    //posts API's
    fetchAllPost:() => `${API_ROOT}/posts`,
    createPost:() => `${API_ROOT}/post/create`,
    updatePost:(postId) => `${API_ROOT}/post/${postId}`,
    getPost:(postId) => `${API_ROOT}/post/${postId}/view`,

    //comments
    addComments:(postId)=>`${API_ROOT}/posts/${postId}/comments`,
    removeComments:(commentId)=>`${API_ROOT}/posts/comments/${commentId}/`,
    
    // like API's
    addLike:(postId)=>`${API_ROOT}/posts/${postId}/likes`,
    removeLike:(commentId)=>`${API_ROOT}/posts/likes/${commentId}/`,
}