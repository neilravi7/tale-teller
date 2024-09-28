import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <header className="bg-light py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-dark mb-2">
                                Page Not Found
                            </h1>
                            <p className="lead fw-normal text-dark-50 mb-2">
                                We could not find what you were looking for.
                            </p>
                            <p className="lead fw-normal text-dark-50 mb-4">
                                Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <Link
                                    className="btn btn-primary btn-lg px-4 me-sm-3"
                                    to={"/"}
                                >
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <iframe
                            height={"525px"}
                            width={"800px"}
                            src="https://lottie.host/embed/b7c4742c-fa01-439c-8189-9933f0921c31/ONTcK9iVDa.json"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NotFound;