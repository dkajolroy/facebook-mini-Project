import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { createPostAction } from '../../Redux/Actions/PostAction';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const navigate = useNavigate()
    const { loginInfo } = useSelector(x => x.userLogin)


    //Open create post Modal
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    // Post Create 
    const [post, setPost] = useState('')
    const dispatch = useDispatch()
    const submitPost = (e) => {
        e.preventDefault()
        if (!loginInfo) { setTimeout(() => navigate("/login"), 1000) }
        dispatch(createPostAction({ desc: post }));
        setModal(!modal)
    }
    return (
        <div data-aos="fade-up" className='create__post__ui p-3 shadow' style={{ background: "#fff", borderRadius: "10px" }}>
            <div className="mt-3 user__create__post d-flex ">
                <div className="user__active___pro" >
                    <img style={{ width: "40px", height: '40px' }} className='img-fluid rounded-circle' src={loginInfo ? loginInfo.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpMlcgNRldPhvxO6PQatDPekVroEPNMWK6PZuwpQBfN84QAKtv8liXZ8eKICnGMSr80s&usqp=CAU"} alt="post user icon" />
                </div>
                <div className='w-100 ms-2'>
                    <div onClick={() => toggleModal()} rows={3} style={{ cursor: "text", background: "rgb(233 233 233)" }} className='rounded-pill py-2 form-control shadow-none' >
                        {`What's on your mind ${loginInfo ? loginInfo.name : ""} ?`}
                    </div>
                    <div className="row  rounded p-2 gx-0 ">
                        <div className="col-md-4 justify-content-center d-flex align-items-center">
                            <i className="bi bi-file-earmark-image"></i>
                            <h6 className='m-0 pt-1'>Photo/Video</h6>
                        </div>
                        <div className="col-md-4 justify-content-center d-flex align-items-center">
                            <i className="bi bi-tags-fill"></i>
                            <h6 className='m-0 pt-1'>Tag Friends</h6>
                        </div>
                        <div className="col-md-4 justify-content-center d-flex align-items-center">
                            <i className="bi bi-emoji-laughing-fill"></i>
                            <h6 className='m-0 pt-1'>Felling/Activity</h6>
                        </div>
                    </div>
                </div>

            </div>
            {/* Modal Open to create post */}

            <ReactModal
                isOpen={modal}
                contentLabel="modal"
                ariaHideApp={false}
                onRequestClose={() => toggleModal()}
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
                        width: "50%",
                        margin: "auto",
                        height: "50%"
                    }
                }}
            >
                <Toaster />
                <h2>Create Post</h2><hr />
                <div className="mt-3 user__create__post d-flex ">
                    <div className="user__active___pro" >
                        <img style={{ width: "40px", height: '40px' }} className='img-fluid rounded-circle' src={loginInfo ? loginInfo.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpMlcgNRldPhvxO6PQatDPekVroEPNMWK6PZuwpQBfN84QAKtv8liXZ8eKICnGMSr80s&usqp=CAU"} alt="post user icon" />
                    </div>
                    <form className='w-100 ms-2' onSubmit={(e) => submitPost(e)}>
                        <textarea onChange={(e) => setPost(e.target.value)} rows={3} style={{ background: "rgb(233 233 233)" }} className='rounded form-control shadow-none' type="text" name="post" placeholder={`What's on your mind ${loginInfo ? loginInfo.name : ""} ?`} />
                        <button type="submit" className="btn btn-primary w-100 mt-2">Post Now</button>
                        <div className="row border  rounded p-2 gx-0 ">
                            <div className="col-md-4 justify-content-center d-flex align-items-center">
                                <i className="bi bi-file-earmark-image"></i>
                                <h6 className='m-0 pt-1'>Photo/Video</h6>
                            </div>
                            <div className="col-md-4 justify-content-center d-flex align-items-center">
                                <i className="bi bi-tags-fill"></i>
                                <h6 className='m-0 pt-1'>Tag Friends</h6>
                            </div>
                            <div className="col-md-4 justify-content-center d-flex align-items-center">
                                <i className="bi bi-emoji-laughing-fill"></i>
                                <h6 className='m-0 pt-1'>Felling/Activity</h6>
                            </div>
                        </div>
                    </form>

                </div>
            </ReactModal>
        </div>
    )
}

export default CreatePost