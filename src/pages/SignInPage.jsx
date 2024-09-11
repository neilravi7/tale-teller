import LoginForm from '../components/Forms/AuthForm/LoginForm'


const SignInPage = () => {
    return (
        <>
            <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-envelope" />
                </div>
                <h1 className="fw-bolder">Login Here</h1>
                <p className="lead fw-normal text-muted mb-0">
                </p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default SignInPage