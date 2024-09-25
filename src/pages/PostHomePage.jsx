import { useDispatch, useSelector } from "react-redux";
import { fetchPostData } from "../redux/actions/posts";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";


const PostHomePage = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);
    
    const [formData, setFormData] = useState({
        query: ''
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
        dispatch(fetchPostData(formData.query));
    }

    useEffect(() => {
        dispatch(fetchPostData(formData.query));
    }, [dispatch]);

    return (
        <section className="py-5 bg-info bg-opacity-25">
            <div className="container px-5">
                <div className="row justify-content-md-center mt-2">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center fw-semibold">Recent Posts</h2>
                        <hr className="w-75 mx-auto mb-3 mb-xl-9 border-dark" />
                    </div>
                    <div className="ms-xl-4 mb-2">
                        <Row className="g-2">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <InputGroup className="mb-3">
                                    <FloatingLabel controlId="floatingInputGrid" label="Search For Any Keyword">
                                        <Form.Control 
                                            type="text"
                                            name="query"
                                            value={formData.query}
                                            onChange={handleInput} 
                                            placeholder="Search For Any Keyword" 
                                        />
                                    </FloatingLabel>
                                    <motion.button
                                        className="btn btn-primary btn-lg p-2"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                    >
                                        Search Posts
                                    </motion.button>
                                </InputGroup>
                            </Form>
                        </Row>
                    </div>
                </div>
                <div className="row gx-5 mt-2">
                    {posts.map((post, index) => (<PostCard key={index} post={post} />))}
                </div>
                <div className="text-end mb-5 mb-xl-0">
                    <a className="text-decoration-none" href="#!">
                        More stories
                        <i className="bi bi-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PostHomePage;