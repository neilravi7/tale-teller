import reader from '../../../assets/images/reader.webp'

const Header = () => {
    return (
        <header className="bg-primary bg-opacity-75 py-3">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">
                                Effortlessly Create and Share Engaging Blog Posts with Our App.
                            </h1>
                            <p className="lead fw-semibold text-white-75 mb-4">
                                Simplify Your Blogging Journey and Connect with Readers Like Never Before!
                            </p>
                            {/* <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a
                                    className="btn btn-primary btn-lg px-4 me-sm-3"
                                    href="#features"
                                >
                                    Get Started
                                </a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#!">
                                    Learn More
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img
                            className="img-fluid rounded-5 my-5 shadow"
                            src={reader}
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;