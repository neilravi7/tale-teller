import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Navigation = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutUser());
        window.localStorage.removeItem("access");
        window.localStorage.removeItem("refresh");
        window.localStorage.removeItem('userInfo');
        toast.success("User Logout Successfully");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5 py-3">
                    <Link className="navbar-brand" to={"/home"}>
                        <h1 className="display-5 fw-bolder text-white mb-2">
                            Tale Taler
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/home"}>
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/posts"}>
                                    POSTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}>
                                    PROFILE
                                </Link>
                            </li>

                            {!isAuthenticated &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/auth/login"}>
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/auth/register"}>
                                            SIGN UP
                                        </Link>
                                    </li>
                                </>
                            }

                            {isAuthenticated &&
                                <>
                                    <li className="nav-item">
                                        <Link to="/post/create" className="btn btn-success btn-lg">
                                            ADD NEW POST
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => handleLogout()}>
                                            LOGOUT
                                        </Link>
                                    </li>
                                </>

                            }

                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdownBlog"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Blog
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownBlog"
                                >
                                    <li>
                                        <a className="dropdown-item" href="blog-home.html">
                                            Blog Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-post.html">
                                            Blog Post
                                        </a>
                                    </li>
                                </ul>
                            </li> */}

                            {/*<li className="nav-item">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="pricing.html">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="faq.html">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdownPortfolio"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Portfolio
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownPortfolio"
                                >
                                    <li>
                                        <a className="dropdown-item" href="portfolio-overview.html">
                                            Portfolio Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="portfolio-item.html">
                                            Portfolio Item
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;