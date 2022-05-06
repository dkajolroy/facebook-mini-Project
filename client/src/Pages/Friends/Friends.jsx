import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../Components/MainLayout/MainLayout';
import { getFollowerAction, getUn_followUserAction } from '../../Redux/Actions/UserActions';

function Friends() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUn_followUserAction())
        dispatch(getFollowerAction())
    }, [])
    const { user, loading } = useSelector(x => x.un_followingUser)
    const followState = useSelector(x => x.getFollower)
    const { loginInfo } = useSelector(x => x.userLogin)
    return (
        <MainLayout>
            <div style={{ marginTop: "66px" }} className="friends__components__ui">
                <div className="friends__request__top">
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
                                                    <button className="btn btn-success">Unfriend</button>
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
                                                    <button className="btn btn-success">Add Friend</button>
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