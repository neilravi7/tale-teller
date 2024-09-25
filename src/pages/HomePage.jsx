import { useDispatch, useSelector } from "react-redux"
import Header from "../components/HomeComponents/Header"
import { fetchPostData } from "../redux/actions/posts";
import { useEffect } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";

export default function Homepage() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPostData());
    }, [dispatch]);

    return (
            <>
            <Header />
            {/* Blog Section */}
            <section className="py-5 bg-warning bg-gradient">
                <div className="container px-5 my-5 ">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h1 className="fw-bolder">Join the Wildest Blog Adventure!</h1>
                                <div className="ms-xl-4">
                                    <Row className="g-2">
                                        <InputGroup className="mb-3">
                                            <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <motion.button
                                                className="btn btn-dark btn-lg p-2"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Subscribe
                                            </motion.button>
                                        </InputGroup>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}