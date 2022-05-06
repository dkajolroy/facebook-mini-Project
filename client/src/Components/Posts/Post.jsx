import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ImageGrid } from 'react-fb-image-video-grid'
import { deletePostAction, likePostActions } from '../../Redux/Actions/PostAction';
import ReactModal from 'react-modal';

function Post({ post }) {

    const { createdAt, desc, images, like, user, _id } = post

    // Date
    const dateTime = new Date(createdAt).toDateString()

    // Like Unlike Post
    const dispatch = useDispatch()
    const likeUnlikePost = () => {
        dispatch(likePostActions(_id))
    }


    // Delete Popup modal
    const [modal, setModal] = useState(false)
    const toggleDeleteModal = () => {
        setModal(!modal)
    }
    // Delete Post button
    const postDelete = (postId) => {
        dispatch(deletePostAction((postId)))
        setModal(!modal)
    }

    const { loginInfo } = useSelector(x => x.userLogin)

    console.log(loginInfo);
    return (
        <div data-aos="fade-up" className='user__port__ui  my-4 shadow' style={{ background: "#fff", borderRadius: "10px" }}>
            <div className="row px-3 pt-3">
                <div className="col d-flex align-items-center justify-content-between">
                    <div className="user___info__post d-flex">
                        {
                            user.avatar ?
                                <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={user.avatar && user.avatar} alt="user avatar" className="img-fluid" />
                                : <i style={{ fontSize: "35px" }} className="bi bi-person-circle"></i>
                        }
                        <div className="user info ms-2">
                            <h6 className="m-0">{user.name}</h6>
                            <span style={{ fontSize: "13px" }}>{dateTime}</span>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn col  dropdown-toggle shadow-none" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu shadow-lg dropdown-menu-right" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item " type="button">Edit</button>
                            <button onClick={() => toggleDeleteModal()} className="dropdown-item" type="button">Delete</button>
                            <button className="dropdown-item " type="button">About</button>
                        </div>
                    </div>
                </div>

            </div>


            <ReactModal
                isOpen={modal}
                contentLabel="modal"
                ariaHideApp={false}
                onRequestClose={() => toggleDeleteModal()}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1000,
                        backgroundColor: 'rgb(8 8 8 / 45%)'
                    },
                    content: {
                        top: 0,
                        width: "30%",
                        margin: "auto",
                        height: "25%"
                    }
                }}
            >
                <h5 className='text-center pb-3'>Are your sure to delete ??</h5>
                <div className="d-flex justify-content-center">
                    <button onClick={() => toggleDeleteModal()} className="btn px-5 me-1 btn-success">Cancel</button>
                    <button onClick={() => postDelete(_id)} className="btn px-5 ms-1 btn-danger">Delete</button>
                </div>
            </ReactModal>


            <div className="post__box__ui">
                <p className="my-2 px-3" style={{ fontSize: "18px" }}>
                    {desc}
                </p>
                {
                    images.length > 1 ?
                        <ImageGrid>
                            {

                                images.map(x => (
                                    <img key={x.slice(10, 20)} src={x} alt={x} />
                                ))
                            }
                        </ImageGrid>
                        : null}

                <hr />
                <div className="like___comment__show d-flex justify-content-between w-75 m-auto">
                    <div className="like">
                        <span>
                            {
                                like ? like.length : null
                            } people liked
                        </span>
                    </div>
                    <div className="comment">
                        <span>  Upcoming...</span>
                    </div>
                </div>
                <div className="pb-3 row post___button ">
                    <button onClick={() => likeUnlikePost()} className="btn shadow-none col text-center">{loginInfo ? like.includes(loginInfo._id) ? <i class="text-danger bi bi-hand-thumbs-up-fill"></i> : <i className="bi bi-hand-thumbs-up"></i> : <i className="bi bi-hand-thumbs-up"></i>}Like</button>
                    <button className="btn shadow-none col text-center"><i className="bi bi-chat-left-dots"></i>Comment</button>
                    <button className="btn shadow-none col text-center"><i className="bi bi-share"></i>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Post