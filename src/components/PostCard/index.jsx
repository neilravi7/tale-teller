import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { formatDate } from '../../Helper/utils';

function PostCard(props) {
    const maxLength = 100;

    const [loading, setLoading] = useState(true);

    const handleOnLoad = (e) => {
        setLoading(false);
    }
    
    const handleOnError = (e) => {
        setLoading(false);
    }

    const post = props.post;
    return (
        <div className="col-lg-4 mb-5">
            <div className={loading ? 'card h-100  border-0 loading-skeleton': 'card h-100  border-0'}>
               
                <img
                    height={"200px"}
                    width={"550px"}
                    className="card-img-top bg-secondary"
                    // src="https://dummyimage.com/600x350/adb5bd/495057"
                    src={post.postImage}
                    onLoad={()=>handleOnLoad()}
                    onError={()=>handleOnError()}
                    alt="post image"
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
                            <div className="small">
                                <div className="text-muted">
                                    {formatDate(post.created_at)} · 4 min read
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