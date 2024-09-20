import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import InputGroup from 'react-bootstrap/InputGroup';
import { API_URL } from '../../../Helper/urls';
import { requestCreator } from '../../../Helper/utils';
import { useSelector } from 'react-redux';



function CommentForm(props){
    const {postDetail, setPostDetail} = props
    const {user} = useSelector((state)=> state.auth);
    const [validated, setValidated] = useState(false);
    
    const [formData, setFormData] = useState({
        content: ''
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
        const URL = API_URL.addComments(postDetail.id);
        console.log(formData.content);
        const requestOption = requestCreator("POST", formData, true);
        fetch(URL, requestOption).then((response) => {
            if(response.status === 201){
                toast.info("You commented on this post.")
            }else{
                toast.error(`${response.status}: error while adding comment.`)
            }
            return response.json();
        }).then((data) => {
            
            const newComment = {
                id:data.id, 
                content:data.content, 
                post:data.post, 
                user:{
                    first_name:user.first_name,
                    last_name:user.last_name,
                    id:data.user,
                }
            }
            const updatedComments = postDetail.comments;
            updatedComments.push(newComment);
            setPostDetail({
                ...postDetail, comments:updatedComments
            })

        }).catch((error)=>{
            toast.error(error.message);
        })
        setFormData({
            content:""
        })
    };

    return (
        <>            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <InputGroup>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="flex-grow-1 me-2"
                    >
                        <Form.Control
                            as="textarea"
                            name="content"
                            placeholder="Leave a comment here"
                            style={{ height: '50px' }}
                            value={formData.content}
                            onChange={handleInput}
                        />
                    </FloatingLabel>
                    <Button variant="outline-dark" id="button-addon1" type="submit">
                        Submit
                    </Button>
                </InputGroup>
            </Form>
        </>
    );
}

export default CommentForm;
