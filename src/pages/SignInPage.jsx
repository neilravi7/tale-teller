import { useSelector } from 'react-redux'
import LoginForm from '../components/Forms/AuthForm/LoginForm'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/images/logo.png";


const SignInPage = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuthenticated) {
            navigate("/");
        }
    })

    return (
        <>
            <div className="row gx-5 justify-content-center m-auto">
                <div className="col-lg-10 col-xl-6 rounded bg-light ">
                    <div className="text-center mb-5">
                        <div className="feature bg-gradient text-dark text-start rounded-3 mb-3">
                            <p className='mt-2 bg-light text-light fw-semibold rounded-pill w-25 text-center m-0'>
                                <img src={Logo} height={"100px"} width={"100px"} />
                            </p>
                                <h1 className="fw-semibold  display-5 mb-3 m-0 text-center">LOGIN</h1>
                            <p className="lead fw-semibold  mb-0 text-center">Welcome Back</p>
                        </div>
                    </div>
                    <LoginForm />
                    <p className="lead fw-normal text-muted my-3">
                        Don't have account <Link to={"/auth/register"} className='text-decoration-none'>Sign Up</Link> here.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignInPage