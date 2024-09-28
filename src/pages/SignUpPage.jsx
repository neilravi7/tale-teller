import RegisterFrom from '../components/Forms/AuthForm/RegisterFrom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png";


const SignUpPage = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    })
    return (
        <>
            <div className="row justify-content-center m-auto">
                <div className="col-lg-10 col-xl-6 bg-light rounded">
                    <div className="text-center mb-5">
                    <div className="feature bg-gradient text-dark text-start rounded-3 mb-3">
                            <p className='mt-2 bg-light text-light fw-semibold rounded-pill w-25 text-center m-0'>
                                <img src={Logo} height={"100px"} width={"100px"} />
                            </p>
                            <h1 className="fw-semibold  display-5 mb-3 m-0 text-center">SIGN UP</h1>
                            <p className="lead fw-semibold  mb-0 text-center">
                                Join Our Community
                            </p>
                        </div>
                    </div>
                    <RegisterFrom />
                    <p className="lead fw-normal text-muted my-3">
                        Already have account <Link to={"/auth/login"} className='text-decoration-none'>Login</Link> here.
                    </p>
                </div>
            </div>
        </>
    )
}
export default SignUpPage;