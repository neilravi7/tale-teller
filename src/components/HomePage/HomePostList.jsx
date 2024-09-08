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
            <div>
                <section className="relative py-24 bg-white">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage:
                                'url("flex-ui-assets/elements/pattern-white.svg")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left top",
                        }}
                    />
                    <div className="container relative z-10 px-4 mx-auto">
                        <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
                            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
                                Blog
                            </span>
                            <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
                                Read our Trending Articles
                            </h3>
                        </div>

                        <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                            {/* post card loop */}
                            {posts.map((post, index) => (
                                <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                                    <a className="block mb-6 overflow-hidden rounded-md" href="#">
                                        <img loading={lazy} className="w-full" src="https://picsum.photos/200" />
                                    </a>
                                    <div className="mb-4">
                                        <a className="inline-block py-1 px-3 text-xs leading-5 text-green-500 hover:text-green-600 font-medium uppercase bg-green-100 hover:bg-green-200 rounded-full shadow-sm"
                                            href="#">
                                            technology
                                        </a>
                                    </div>
                                    <p className="mb-2 text-coolGray-500 font-medium">
                                        John Doe • 19 Jan 2022
                                    </p>
                                    <a className="inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                                        href="#">
                                        {post.title}
                                    </a>
                                    <p className="mb-4 text-coolGray-500">
                                        {post.content}
                                    </p>
                                    <Link 
                                        to={`post/${post.id}`}
                                        className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePostsLists;



