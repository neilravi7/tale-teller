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
                            <option value="8efac074-ab6e-41fe-b479-38f0713b30be">Lifestyle</option>
                            <option value="00394406-5e68-4bdc-8f71-fac75e8fc2ae">Travel</option>
                            <option value="c656d564-5eb6-4ea8-aef5-ee6b5975ed78">Beauty and fashion</option>
                            <option value="90cdb8c1-a639-4c39-abae-2ba4f234a0ba">Spiritual</option>
                            <option value="652a2912-5e19-40ac-8a40-2093f562e906">Wellness</option>
                            <option value="ee1c4201-e1b1-4268-b5fc-7ac2acc13f5a">Technology</option>
                            <option value="e7fdbcfb-6f2c-4f2e-9d62-5185100b0c78">Self-Development</option>
                            <option value="585ab542-981f-4f49-a270-853f2bdcded3">DIY</option>
                            <option value="8dd0c52a-69d1-4a61-b941-d2d2dd2e4e21">Movies</option>
                            <option value="ffa6bfd2-d0fd-4f04-9ce3-549c494bae77">Music</option>
                            <option value="806b93d0-6efc-47ff-918c-54b0ebfa4075">Marketing</option>
                            <option value="7790056f-4f1d-453b-a752-8f281bb842ec">Start-Up</option>
                            <option value="7331ccd2-d240-4ae2-b65a-9eac62df2228">Politics</option>
                            <option value="8c3cfc20-7d13-4973-b911-a87e0a96b4ba">Fitness-blogger</option>
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