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
        <section className="py-5 bg-light">
            <div className="container px-5">
                <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
                <div className="row gx-5">
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