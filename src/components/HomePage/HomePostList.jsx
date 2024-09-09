import React, { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../../redux/actions/posts";
import { Link } from "react-router-dom";

const HomePostsLists = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostData());
    }, [dispatch])

    return (
        <>
            <section className="text-white bg-white body-font">
                <div className="container px-4 py-15 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-green-500 rounded overflow-hidden">
                            {/* <div className="w-24 h-full bg-indigo-500" /> */}
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-black font-medium title-font text-2xl mb-2 sm:mb-0">
                                Our Trending Blog's
                            </h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                                Read Our Trending Article
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {posts.map((post, index) => (
                            <div key={`${post.id}__${index}`} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="https://picsum.photos/200/300"
                                />
                            </div>
                            <h2 className="text-xl font-medium title-font text-black mt-5">
                                {post.title}
                            </h2>
                            <p className="text-base leading-relaxed text-black mt-2">
                               {post.content}
                            </p>
                            <Link to={`post/${post.id}`} className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold">
                                Read Post
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomePostsLists;