const API_ROOT = 'http://127.0.0.1:8000/api/v1'

export const API_URL = {
    login:() => `${API_ROOT}/users/login`,
    signUp:()=> `${API_ROOT}/users/signup`,
    updateUserDetails:(userId) => `${API_ROOT}/users/${userId}`,
    fetchPost:() => `${API_ROOT}/posts`,
}