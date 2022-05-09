import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoActions } from '../../Redux/Actions/UserActions'

function ProfileNav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    //Get User info
    useEffect(() => {
        dispatch(getUserInfoActions())
    }, [])
    const { userInfo, loading } = useSelector(x => x.userInfo)
    const dateOfBirth = new Date(userInfo.dateOfBirth).toDateString()

    return (
        <div className='profile__nav__ui col-md-10 mb-4  m-auto bg-light'>
            <div className="ul list-unstyled m-0 d-flex justify-content-between">
                <li className='profile__nav__items' onClick={() => navigate("/profile")}>Home</li>
                <li className='profile__nav__items' onClick={() => toggleModal()}>About</li>
                <li className='profile__nav__items' onClick={() => navigate("/friends")}>Friends</li>
                <li className='profile__nav__items'>Videos</li>
                <li className='profile__nav__items'>More</li>
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
                        width: "60%",
                        margin: "auto",
                        height: "90%"
                    }
                }}
            >

                <h2>About</h2><hr />
                <div className="mt-3 user__create__post d-flex ">
                    {
                        loading ?
                            <h3>Loading....</h3> :
                            userInfo ?
                                <ul className="list-unstyled">
                                    <li><h6 className='py-2 text-secondary'>Name: {userInfo.name}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Username: {userInfo.username}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Email: {userInfo.email}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Phone: {userInfo.phone}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Gender: {userInfo.gender}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Date of Birth: {dateOfBirth}</h6></li>
                                    <li><h6 className='py-2 text-secondary'>Address: </h6></li>
                                    <li><h6 className='py-2 text-secondary'>Profile Lock: </h6></li>
                                </ul> : null
                    }

                </div>
            </ReactModal>
        </div>
    )
}

export default ProfileNav