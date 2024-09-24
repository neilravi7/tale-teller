import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { requestCreator } from "../Helper/utils"
import { API_URL } from "../Helper/urls"
import { toast } from 'react-toastify';
import ProfileForm from '../components/Forms/ProfileForm';
import UserArticleCard from '../components/Profile/UserArticleCard';


const ProfilePage = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const location = useLocation();
    // const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true); // Add a loading state
    const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState(user);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (isAuthenticated && user) {
                const userId = user.user_id;
                const URL = API_URL.getUserProfile(userId);
                const requestOption = requestCreator("GET", {}, true);

                try {
                    const response = await fetch(URL, requestOption);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const data = await response.json();
                    setUserData(
                        {
                            user_id: data.id,
                            email: data.email,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            bio: data.profile.bio,
                            profile_image: data.profile.profile_image,
                            following:data.peoples_you_follow,
                            followers:data.peoples_following_you
                        }
                    );
                    setPosts(data.user_posts);
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
        return <div>Loading...</div>;
    }

    return (
        <section className="bg-light py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center fw-semibold">Profile</h2>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="card widget-card border-light shadow-sm">
                                    <div className="card-header text-bg-dark">
                                        Welcome, {userData.first_name}
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center mb-3">
                                            <img
                                                src={userData.profile_image}
                                                className="img-fluid rounded-circle"
                                                alt="profile image"
                                            />
                                        </div>
                                        <h5 className="text-center mb-1">{userData.first_name} {userData.last_name}</h5>
                                        <p className="text-center text-dark fw-semibold mb-4">
                                            Project Manager At Github Inc.
                                        </p>
                                        <ul className="list-group list-group-flush mb-4">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Followers</h6>
                                                <span>{userData.followers.length}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Following</h6>
                                                <span>{userData.following.length}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="card widget-card border-light shadow-sm">
                            <div className="card-body p-4">
                                <ul className="nav nav-pills nav-fill " id="profileTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link active"
                                            id="overview-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#overview-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="overview-tab-pane"
                                            aria-selected="true"
                                        >
                                             OVERVIEW
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-tab-pane"
                                            aria-selected="false"
                                        >
                                            PROFILE
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="posts-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#posts-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="posts-tab-pane"
                                            aria-selected="false"
                                        >
                                            MY POSTS
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-4" id="profileTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="overview-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="overview-tab"
                                        tabIndex={0}
                                    >
                                        <h5 className="mb-3 text-start">About</h5>
                                        <p className="lead mb-3 text-start">
                                            {userData.bio}
                                        </p>
                                        <h5 className="mb-3 text-start">Profile</h5>
                                        <div className="row g-0">
                                            
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Education</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">M.S Computer Science</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Address</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">Mountain View, California</div>
                                            </div>
                                            <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                <div className="p-2">Email</div>
                                            </div>
                                            <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                <div className="p-2">leo@example.com</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                        tabIndex={0}
                                    >
                                        <ProfileForm/>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="posts-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="posts-tab"
                                        tabIndex={0}
                                    >
                                        {posts.length === 0 && <div className='container p-5 text-center'>You have not added any post yet.</div>}
                                        { posts.map((post, index) => (<UserArticleCard key={index} post={post}/>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;