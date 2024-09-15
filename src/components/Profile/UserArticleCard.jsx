import React from 'react';

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
                                <a className="stretched-link text-decoration-none" href="#!">
                                    Read more
                                    <i className="bi bi-arrow-right" />
                                </a>
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