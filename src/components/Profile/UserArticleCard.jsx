import React from 'react';
import { FaRegThumbsUp, FaRegComments } from "react-icons/fa";


function UserArticleCard(props) {
    const post = props.post;
    const maxLength = 100;
    return (
        <>
            <div className="card border-0 rounded-3 overflow-hidden text-start mb-2">
                <div className="card-body p-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 col-xl-5">
                            <div
                                className=""
                                style={{
                                    backgroundImage:
                                        `url(${post.postImage})`,
                                    height: "100%",
                                    width: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat:"no-repeat",
                                    minHeight: "15rem",
                                }}
                            />
                        </div>
                        <div className="col-lg-8 col-xl-7 py-lg-7">
                            <div className="p-4 p-md-5">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                                    {post.category.name}
                                </div>
                                <div className="h2 fw-bolder">{post.title}</div>
                                <p>
                                {post.content.length > maxLength ? post.content.slice(0, maxLength) + "..." : post.content}
                                </p>
                                <div className="d-flex justify-content-around mb-3">
                                    <div className="p-2">
                                        <FaRegThumbsUp size={20} className='text-primary'/> {post.likes.length}
                                    </div>
                                    <div className="p-2">
                                        <FaRegComments size={20} className='text-primary'/> {post.comments.length}
                                    </div>
                                    <div className="p-2 fw-bold">
                                        UPDATE
                                    </div>
                                    <div className="p-2 text-info fw-bold">
                                        VIEW
                                    </div>
                                    <div className="p-2 text-danger fw-bold">
                                        ARCHIVE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-75 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </>

    );
}

export default UserArticleCard;