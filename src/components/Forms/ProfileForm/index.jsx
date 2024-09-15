import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { updateUser } from '../../../redux/actions/users';

function ProfileForm(props) {
    const { error, inProgress, success, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        bio:'',
        profile_image:'https://placebeard.it/720x720'
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
        const {first_name, last_name, bio, profile_image } =  formData;
        dispatch(updateUser(user.user_id, {first_name, last_name, bio, profile_image }))
        // needs handle notification while update
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

            <div className='container p-5 text-start'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <FloatingLabel controlId="firstName" label="First Name" className="mb-2">
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInput}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="lastName" label="Last Name" className="mb-2">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInput}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId="bio" label="Bio" className="mb-2">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            placeholder="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInput}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>

                    </FloatingLabel>

                    <Button variant="primary" size="lg" className="w-100 mt-3" type="submit" disabled={inProgress}>
                        Update Profile
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default ProfileForm;