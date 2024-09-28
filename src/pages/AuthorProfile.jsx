import { useLocation, Navigate, useParams, json } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { requestCreator } from "../Helper/utils"
import { API_URL } from "../Helper/urls"
import { toast } from 'react-toastify';
import UserArticleCard from '../components/Profile/UserArticleCard';
import Button from 'react-bootstrap/Button';
import { addFollower, removeFollower } from '../redux/actions/auth';
import {updateUserProfile} from '../redux/actions/users';
import Loader from '../components/Loader';


const AuthorProfile = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const authorId = useParams().authorId;
    const [author, setAuthor] = useState({});
    const [loading, setLoading] = useState(true); // Add a loading state
    const [posts, setPosts] = useState();
    const { following } = user;
    const [isAuthorFollowed, setIsAuthorFollowed] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (isAuthenticated && user) {
                following.some(item => item.id === authorId);
                const URL = API_URL.getUserProfile(authorId);
                const requestOption = requestCreator("GET", {}, true);

                try {
                    const response = await fetch(URL, requestOption);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const data = await response.json();
                    // setUserData(data);
                    setAuthor(data);
                    setPosts(data.user_posts);
                    
                    const authorFollowed = following.some(item => item.id === authorId);
                    setIsAuthorFollowed(authorFollowed);

                    toast.success("Profile data fetched successfully");
                } catch (error) {
                    toast.error(error.message);
                } finally {
                    setLoading(false); // Set loading to false once the data is fetched
                }
            }
        };

        if (isAuthenticated && user) {
            fetchUserProfile();
        } else {
            setLoading(false); // Prevent infinite loading if user is not authenticated
        }
    }, [isAuthenticated, user]); // Added both to dependency array

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if (loading) {
        return <Loader />;
    }

    const handleFollowing = () => {
        const URL = API_URL.makeFollow();
        const requestOption = requestCreator(
            "POST",
            {user:authorId},
            true
        );
        fetch(URL, requestOption).then((response)=>{
            return response.json()
        }).then((data)=>{
            if(data.success){
                toast.success(`You Follow ${author.first_name} ${author.last_name}.`);
                following.push({"id":authorId, "name":`${author.first_name} ${author.first_name}`})
                const userDetails = { ...user, following:following }
                dispatch(addFollower(userDetails));
                dispatch(updateUserProfile(userDetails));
                localStorage.setItem("userInfo", JSON.stringify(userDetails));
                setIsAuthorFollowed(true);
            }else{
                if(data.error){
                    toast.error(data.error);
                }
                else{
                    toast.error("Error while following.")
                }
            }
        })
    }

    const handleUnfollowing = (authorId) => {
        const URL = API_URL.makeUnfollow(authorId);
        const requestOption = requestCreator(
            "DELETE",
            {},
            true
        );
        fetch(URL, requestOption).then((response)=>{
            if(response.status === 204){
                toast.info(`You Unfollow ${author.first_name} ${author.last_name}.`);
                const userDetails = {...user, following:following.filter(item => item.id !== authorId)} // []
                dispatch(removeFollower(userDetails));
                dispatch(updateUserProfile(userDetails));                
                localStorage.setItem("userInfo", JSON.stringify(userDetails));
                setIsAuthorFollowed(false);
            }
            return response.json()
        }).then((data)=>{
            if(data.error){
                toast.error(data.error);
                    setIsAuthorFollowed(false);
                }
                else{
                    toast.error("Error while unfollow.")
                }
            })
    }

    return (
        <section className="bg-info-subtle py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">Author Profile</h2>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>
            {loading && <Loader/>}
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="card widget-card border-light shadow-sm"> 
                                    <div className="card-body">
                                        <div className="text-center mb-3">
                                            <img
                                                src={author.profile.profile_image}
                                                className="img-fluid rounded-circle"
                                                alt="profile image"
                                            />
                                        </div>
                                        <h5 className="text-center mb-1">{author.first_name} {author.last_name}</h5>
                                        <p className="text-center text-secondary mb-4">
                                            Project Manager At Github Inc.
                                        </p>
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Followers</h6>
                                                <span>{author.peoples_following_you.length}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Following</h6>
                                                <span>{author.peoples_you_follow.length}</span>
                                            </li>
                                        </ul>
                                        <div className="d-grid m-0">
                                            { 
                                                !isAuthorFollowed ? 
                                                    (
                                                     <Button variant="outline-dark" onClick={() => handleFollowing()}>Follow</Button>
                                                )
                                                :
                                                (
                                                    <Button variant="outline-dark" onClick={() => handleUnfollowing(authorId)}>Unfollow</Button>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="card widget-card border-light shadow-sm">
                            <div className="card-body p-4">
                                <h2>Posts</h2>
                                {posts.length === 0 && <div className='container p-5 text-center'>This Author have not added any post yet.</div>}
                                { posts.map((post, index) => (<UserArticleCard key={index} post={post}/>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorProfile;