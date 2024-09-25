import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TfiPencilAlt } from "react-icons/tfi";
import { MdOutlineLogout } from "react-icons/md";


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
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark shadow ">
                <div className="container  py-3 bg-opacity-75">
                    <Link className="navbar-brand" to={"/home"}>
                        <h1 className="display-5 fw-bolder text-primary mb-2">
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
                                <Link  className="nav-link" to={"/home"}>
                                    <p className="fw-semibold fs-5">Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/posts"}>
                                <p className="fw-semibold fs-5">Posts</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}>
                                <p className="fw-semibold fs-5"> Profile</p>
                                </Link>
                            </li>
                        </ul> 
                        <ul className="navbar-nav ms-auto">
                            {!isAuthenticated &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/auth/login"}>
                                            <button className="btn btn-outline-primary btn-lg fw-semibold">Login</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/auth/register"}>
                                            <button className="btn btn-primary btn-lg fw-semibold">Sign Up</button>
                                        </Link>
                                    </li>
                                </>
                            }

                            {isAuthenticated &&
                                <>
                                    <li className="nav-item">
                                        <Link to="/post/create" className="nav-link">
                                            <button className="btn btn-primary btn-lg rounded-pill fw-semibold"><TfiPencilAlt></TfiPencilAlt> WRITE</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => handleLogout()}>
                                            <button className="btn btn-warning btn-lg rounded-pill fw-semibold text-dark">LOGOUT <MdOutlineLogout></MdOutlineLogout></button>
                                        </Link>
                                    </li>
                                </>
                            }                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;