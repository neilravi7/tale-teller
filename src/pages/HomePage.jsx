import { useDispatch, useSelector } from "react-redux"
import Aside from "../components/HomeComponents/Aside"
import Header from "../components/HomeComponents/Header"
import { fetchPostData } from "../redux/actions/posts";
import { useEffect } from "react";
import PostCard from "../components/PostCard";

export default function Homepage() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchPostData());
    },[dispatch]);

    return (
        <main>
            {/* Navigation */}
            {/* Header */}
            <Header />
            {/* Blog Section */}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5 ">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                                    fugit ratione dicta mollitia. Officiis ad.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        {/* Post Card components */}
                        { posts.map((post, index) => (<PostCard key={index} post={post}/>))}
                    </div>
                    {/* Call to action*/}
                    <Aside/>
                </div>
            </section>
            {/* footer */}
        </main>
    )
}