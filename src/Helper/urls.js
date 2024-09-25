const API_ROOT = 'https://devblog-rzby.onrender.com/api/v1'

export const API_URL = {

    // users API's
    login:() => `${API_ROOT}/users/login`,
    signUp:()=> `${API_ROOT}/users/signup`,
    updateUserDetails:(userId) => `${API_ROOT}/users/${userId}`,
    getUserProfile:(userId) => `${API_ROOT}/users/${userId}/profile`,
    
    //posts API's
    fetchAllPost:(query) => `${API_ROOT}/posts/search/?q=${query}`,
    createPost:() => `${API_ROOT}/post/create`,
    updatePost:(postId) => `${API_ROOT}/post/${postId}`,
    getPost:(postId) => `${API_ROOT}/post/${postId}/view`,

    //comments
    addComments:(postId)=>`${API_ROOT}/posts/${postId}/comments`,
    removeComments:(commentId)=>`${API_ROOT}/posts/comments/${commentId}`,
    
    // like API's
    addLike:(postId)=>`${API_ROOT}/posts/${postId}/likes`,
    removeLike:(likeId)=>`${API_ROOT}/posts/likes/${likeId}`,

    // following
    makeFollow:()=>`${API_ROOT}/users/following`,
    makeUnfollow:(userId)=>`${API_ROOT}/users/unfollowing/${userId}`, 
}