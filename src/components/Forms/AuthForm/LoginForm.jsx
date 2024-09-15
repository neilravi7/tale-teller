import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { login } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';

function LoginForm(props) {
    const location = useLocation();
    const fromLocation = location.state?.from?.pathname || '/';
    
    const { error, inProgress, success,  } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleInput(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        dispatch(login(formData.email, formData.password))
        if(success){
            toast.success("Login successfully");
        }
        setFormData({
            email: "",
            password: "",
            password2: "",
        });
        navigate(fromLocation);
    };

    return (
        <>            
            {
                error && 
                <div className='container'>
                    <Alert variant={"danger"}>
                        {error}
                    </Alert>
                </div>
            }
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInput}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your password.
                    </Form.Control.Feedback>
                </FloatingLabel>

                <Button variant="primary" size="lg" className="w-100 mt-3" type="submit" disabled={inProgress}>
                    Submit form
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;
