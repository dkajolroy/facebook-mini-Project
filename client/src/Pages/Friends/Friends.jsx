import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import MainLayout from '../../Components/MainLayout/MainLayout';
import { follow_un_followAction, friendReqAction, getFollowerAction, getUn_followUserAction, unFriendAction } from '../../Redux/Actions/UserActions';

function Friends() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUn_followUserAction())
        dispatch(getFollowerAction())
        dispatch(friendReqAction())
    }, [])
    const { user, loading } = useSelector(x => x.un_followingUser)
    const followState = useSelector(x => x.getFollower)
    const { loginInfo } = useSelector(x => x.userLogin)
    const friendReq = useSelector(x => x.friendReqReducer)

    // Follow Un Follow
    const followUnFollowAction = (userId) => {
        dispatch(follow_un_followAction(userId))
    }

    // Toggle Modal
    const [toggle, setToggle] = useState(false)
    const toggleDeleteModal = () => {
        setToggle(!toggle)
    }
    // Unfriend Req
    const unFriendReq = (id) => {
        dispatch(unFriendAction(id))
    }
    return (
        <MainLayout>
            <div style={{ marginTop: "66px" }} className="friends__components__ui">
                <div className="my--friend__list">
                    <div className="heading">
                        <h5 className='m-0 text-secondary'>Your Friends</h5>
                        <hr />
                    </div>
                    <div className="list__request">
                        {
                            loginInfo ?

                                followState.loading ?
                                    <div className="spinner-border d-flex mx-auto my-5" style={{ width: "4rem", height: "4rem" }} role="status">
                                    </div> :
                                    followState.user.map(x => (
                                        <div key={x._id} className="user__ui__un-following ">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="user__info d-flex align-items-center">
                                                    <div style={{ width: "40px", height: "40px" }} className="user__avatar me-1">
                                                        <img className='img-fluid rounded-circle' src={x.avatar} alt={x.name} />
                                                    </div>
                                                    <div className="user__name">
                                                        <h5 className='m-0'>{x.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="action__user">
                                                    <button onClick={() => toggleDeleteModal()} className="btn btn-danger">Unfriend</button>

                                                    {/* UnFriend Action Modal */}
                                                    <ReactModal
                                                        isOpen={toggle}
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
                                                        <h5 className='text-center pb-3'>Are your sure to Unfriend ??</h5>
                                                        <div className="d-flex justify-content-center">
                                                            <button onClick={() => toggleDeleteModal()} className="btn px-5 me-1 btn-success">Cancel</button>
                                                            <button onClick={() => unFriendReq(x._id)} className="btn px-5 ms-1 btn-danger">Unfriend</button>
                                                        </div>
                                                    </ReactModal>

                                                </div>
                                            </div>
                                        </div>
                                    ))

                                : <h4 className='text-success'>Login to make friends</h4>
                        }
                    </div>
                </div>

                <div className="friends__request__top">
                    <div className="heading">
                        <h5 className='m-0 text-secondary'>Friend Request</h5>
                        <hr />
                    </div>
                    <Toaster />
                    <div className="list__request">
                        {
                            loginInfo ?

                                friendReq.loading ?
                                    <div className="spinner-border d-flex mx-auto my-5" style={{ width: "4rem", height: "4rem" }} role="status">
                                    </div> :
                                    friendReq.user.map(x => (
                                        <div key={x._id} className="user__ui__un-following ">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="user__info d-flex align-items-center">
                                                    <div style={{ width: "40px", height: "40px" }} className="user__avatar me-1">
                                                        <img className='img-fluid rounded-circle' src={x.avatar} alt={x.name} />
                                                    </div>
                                                    <div className="user__name">
                                                        <h5 className='m-0'>{x.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="action__user">
                                                    <button onClick={() => followUnFollowAction(x._id)} className="btn btn-success">Accept</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                : <h4 className='text-success'>Login to make friends</h4>
                        }
                    </div>
                    <div className="list__un-followings">
                        <h5 className='m-0 text-secondary'>People you may know</h5>
                        <hr />
                        {
                            loginInfo ?

                                loading ?
                                    <div className="spinner-border d-flex mx-auto my-5" style={{ width: "4rem", height: "4rem" }} role="status">
                                    </div> :
                                    user.map(x => (
                                        <div key={x._id} className="user__ui__un-following ">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="user__info d-flex align-items-center">
                                                    <div style={{ width: "40px", height: "40px" }} className="user__avatar me-1">
                                                        <img className='img-fluid rounded-circle' src={x.avatar} alt={x.name} />
                                                    </div>
                                                    <div className="user__name">
                                                        <h5 className='m-0'>{x.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="action__user">
                                                    <button onClick={() => followUnFollowAction(x._id)} className="btn btn-success">Add Friend</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                : <h4 className='text-success'>Login to make friends</h4>
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Friends