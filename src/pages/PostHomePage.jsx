import { useDispatch, useSelector } from "react-redux";
import { fetchPostData } from "../redux/actions/posts";
import { useEffect } from "react";
import PostCard from "../components/PostCard";

const PostHomePage = () => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchPostData());
    },[dispatch]);

    return (
        <section className="py-5 bg-info bg-opacity-25">
            <div className="container px-5">
                <div className="row justify-content-md-center mt-2">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center fw-semibold">Recent Articles</h2>
                        <hr className="w-75 mx-auto mb-5 mb-xl-9 border-dark" />
                    </div>
                </div>
                <div className="row gx-5 mt-2">
                    { posts.map((post, index) => (<PostCard key={index} post={post}/>))}
                </div>
                <div className="text-end mb-5 mb-xl-0">
                    <a className="text-decoration-none" href="#!">
                        More stories
                        <i className="bi bi-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PostHomePage;