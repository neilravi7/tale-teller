import React from 'react';

function PostCard(props) {
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100  border-0">
                <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        Media
                    </div>
                    <a
                        className="text-decoration-none link-dark stretched-link"
                        href="#!"
                    >
                        <h5 className="card-title mb-3">Another blog post title</h5>
                    </a>
                    <p className="card-text mb-0">
                        This text is a bit longer to illustrate the adaptive height of
                        each card. Some quick example text to build on the card title
                        and make up the bulk of the card's content.
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