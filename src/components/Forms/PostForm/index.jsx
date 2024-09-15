import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { API_URL } from '../../../Helper/urls';
import { requestCreator } from '../../../Helper/utils';
import { toast } from 'react-toastify';


function PostForm(props) {
    const { error, inProgress, success, user } = useSelector((state) => state.auth)
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: '',
        tags: ["Travel", "Development"]
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
        const { title, content, category, tags } = formData;
        const URL = API_URL.createPost();
        const requestOption = requestCreator("POST", { title, content, category, tags }, true);
        fetch(URL, requestOption).then((response) => {
            console.log("response.status: ", response.status);
            if (response.status === 201) {
                toast.success("New Post Added");
            } else {
                toast.error("Unable to create post");
            }
        })
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

            <div className='container text-start'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <FloatingLabel controlId="title" label="Post Title" className="mb-2">
                        <Form.Control
                            type="text"
                            placeholder="Post Title"
                            name="title"
                            value={formData.title}
                            onChange={handleInput}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingSelect" label="Post Category" className="mb-2">
                        <Form.Select
                            name="category" // Make sure the select has a name
                            value={formData.category} // Bind value to the state
                            onChange={handleInput} // Handle select change
                            required
                        >
                            <option value="">Open this select menu</option> {/* Default option */}
                            <option value="b01c0a49-afc8-4f5c-98b7-92e4454ded06">Development</option>
                            <option value="8737f134-50fe-4bac-a42d-346f0139dce6">Marketing</option>
                            <option value="afb0f9e5-7090-4042-b45a-e0f97f97f25d">Start-up</option>
                            <option value="a220a5d9-5a23-46dd-bc43-9e7c7a010e15">Technology</option>
                            <option value="7157c89a-94c4-4818-8e53-b69a61997e03">Travel</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId="content" label="Content" className="mb-2">
                        <Form.Control
                            as="textarea"
                            style={{ height: '500px' }}
                            placeholder="Bio"
                            name="content"
                            value={formData.content}
                            onChange={handleInput}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Required Field.
                        </Form.Control.Feedback>

                    </FloatingLabel>

                    <Button variant="primary" size="lg" className="w-100 mt-3" type="submit" disabled={inProgress}>
                        Add New Post
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default PostForm;