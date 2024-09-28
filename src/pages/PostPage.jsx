import { useSelector } from 'react-redux'
import LoginForm from '../components/Forms/AuthForm/LoginForm'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostForm from '../components/Forms/PostForm';


const PostPage = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/auth/login", {state:{location}});
        }
    })
    
    return (
        <>
            <div className="text-center">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-envelope" />
                </div>
                <h1 className="fw-bolder">Create New Post</h1>
                <p className="lead fw-normal text-muted mb-0">
                </p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <PostForm />
                </div>
            </div>
        </>
    )
}

export default PostPage;