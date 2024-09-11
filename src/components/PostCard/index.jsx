import React from 'react';
import { Link } from 'react-router-dom';
function PostCard(props) {
    const maxLength = 100;

    const post = props.post;
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100  border-0">
                <img
                    className="card-img-top"
                    // src="https://dummyimage.com/600x350/adb5bd/495057"
                    src={post.postImage}
                    alt="..."
                />
                <div className="card-body p-4 text-start">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        {post.category.name}
                    </div>
                    <Link
                        className="text-decoration-none link-dark stretched-link"
                        to={`/post/${post.slug}`}
                    >
                        <h5 className="card-title mb-3">{post.title}</h5>
                    </Link>
                    <p className="card-text mb-0">
                        {post.content.length > maxLength ? post.content.slice(0, maxLength) + "..." : post.content}
                    </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <img
                                className="rounded-circle me-3"
                                src="https://dummyimage.com/40x40/ced4da/6c757d"
                                alt="..."
                            />
                            <div className="small">
                                <div className="fw-bold">Josiah Barclay</div>
                                <div className="text-muted">
                                    March 23, 2023 · 4 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;