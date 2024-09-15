import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signUp } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function RegisterFrom(props) {
    const { error, inProgress, success } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: "",
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
        const { email, password, password2 } = formData;
        dispatch(signUp(email, password, password2)).then((result) => {
            if (result && result.success) {
              navigate("/auth/login");
            }
        })
      
        // reset form
        setFormData({
            email: "",
            password: "",
            password2: "",
        });
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
            {
                success && 
                <div className='container'>
                    <Alert variant={"success"}>
                        Account created successfully
                    </Alert>
                </div>
            }
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
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

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-2">
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
                <FloatingLabel controlId="floatingPassword2" label="Password2" className="mb-2">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleInput}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please confirm your password.
                    </Form.Control.Feedback>

                </FloatingLabel>

                <Button variant="primary" size="lg" className="w-100 mt-3" type="submit" disabled={inProgress}>
                    Submit form
                </Button>
            </Form>
        </>
    );
}

export default RegisterFrom;