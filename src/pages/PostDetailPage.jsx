import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegThumbsUp, FaThumbsUp, FaRegComments } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API_URL } from "../Helper/urls";
import { requestCreator } from "../Helper/utils";
import { toast } from "react-toastify";
import { formatDate } from "../Helper/utils";
import CommentForm from "../components/Forms/CommentForm";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const PostDetailPage = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const slug = useParams().postSlug;
    const [userLikedPost, setUserLikedPost] = useState(false);
    const [postDetail, setPostDetail] = useState({});

    function getLikeId(likes){
        const likeId = likes.filter((like) => like.user.id === user.user_id);
        return likeId[0].id;
    }

    function removeComment(commentId){
        const URL = API_URL.removeComments(commentId);
        const requestOption = requestCreator("DELETE", {}, true);
        fetch(URL, requestOption).then((response) => {
            if(response.status === 204){
                toast.info("You remove comment from the post.");
                const updatedComments = postDetail.comments.filter((comment) => comment.id !== commentId);
                setPostDetail({...postDetail, comments:updatedComments});
            }else{
                toast.error("Error while remove comment.")
            }
        })

    }

    const handleLike = (postId, action) => {
        if (!isAuthenticated) {
            toast.info("Please Login to like post");
            return;
        }
        let likeId = null
        if(userLikedPost){
            likeId = getLikeId(postDetail.likes);
        }
        const URL = action === "ADD" ? API_URL.addLike(postId) : API_URL.removeLike(likeId);
        const requestOption = action === "ADD" ? requestCreator("POST", {}, true) : requestCreator("DELETE", {}, true);

        fetch(URL, requestOption)
            .then((response) => {
                if (response.status === 201) {
                    toast.info("You like this post.");
                    setUserLikedPost(true);
                    const data = response.json();

                    const newLike = {
                        id:data.id,
                        post:data.post,
                        user:{
                            id:data.user
                        }
                    }
                    const postLikes = postDetail.likes;
                    postLikes.push(newLike)
                    setPostDetail({
                        ...postDetail, likes:postLikes
                    })
                } else if (response.status === 204) {
                    toast.info("Removed like from post.");
                    setUserLikedPost(false);
                    const newLikes = postDetail.likes.filter((like)=> like.id !== likeId);
                    setPostDetail({
                        ...postDetail, likes:newLikes
                    })
                } else {
                    toast.info("Error while adding like to post.");
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        const fetchPostDetails = async () => {
            const URL = API_URL.getPost(slug);
            const requestOption = requestCreator("GET", {}, false);

            try {
                const response = await fetch(URL, requestOption);
                if (!response.ok) {
                    throw new Error(`${response.status}: Error while fetching data`);
                }
                const data = await response.json();
                setPostDetail(data);
                const isLiked = data.likedBy.includes(user.user_id)
                setUserLikedPost(isLiked);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchPostDetails();
    }, [slug]);

    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center mt-lg-5 mb-4">
                            <img
                                className="img-fluid rounded-circle"
                                src="https://placebeard.it/50x50"
                                alt="..."
                            />
                            <div className="ms-3">
                                <div className="fw-bold">
                                    {postDetail.author?.first_name} {postDetail.author?.last_name}
                                </div>
                                <div className="text-muted">News, Business</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-lg-5 mb-4">
                            {userLikedPost ? (
                                <FaThumbsUp size={30} onClick={() => handleLike(postDetail.id, "REMOVE")} />
                            ) : (
                                <FaRegThumbsUp size={30} onClick={() => handleLike(postDetail.id, "ADD")} />
                            )}
                            <div className="ms-3">
                                <div className="text-muted">{postDetail.likes?.length || 0}</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-lg-5 mb-4">
                            <FaRegComments size={30} />
                            <div className="ms-3">
                                <div className="text-muted">{postDetail.comments?.length || 0}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <article>
                            <header className="mb-4 text-start">
                                <h1 className="fw-bolder mb-1">{postDetail.title}</h1>
                                <div className="text-muted fst-italic mb-2">{formatDate(postDetail.created_at)}</div>
                                <a className="badge bg-secondary text-decoration-none link-light" href="#!">
                                    {postDetail.category?.name}
                                </a>
                            </header>
                            <figure className="mb-4">
                                <img className="img-fluid rounded" src="https://picsum.photos/900/420" alt="..." />
                            </figure>
                            <section className="mb-5">
                                <p className="fs-5 mb-4 text-start">{postDetail.content}</p>
                            </section>
                        </article>
                        <section>
                            <div className="card bg-body-tertiary">
                                <div className="card-body">
                                    {isAuthenticated && (
                                        <CommentForm postDetail={postDetail} setPostDetail={setPostDetail}/>
                                    )}
                                    <div className="fs-3 fw-bold text-start my-3">Post comments</div>
                                    {postDetail.comments?.length === 0 ? (
                                        <h4>comments will appear here.</h4>
                                    ) : (
                                        postDetail.comments?.map((comment) => (
                                            <div key={comment.id}>
                                                <div className="d-flex my-3">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="rounded-circle"
                                                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="ms-3 text-start">
                                                        <div className="fw-bold">
                                                            {comment.user.first_name} {comment.user.last_name}
                                                        </div>
                                                        {comment.content} {
                                                            comment.user.id === user.user_id ? 
                                                            ( <IoIosRemoveCircleOutline className="ms-2 text-danger" size={20} onClick={()=>removeComment(comment.id)}/>) : (<></>)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostDetailPage;
