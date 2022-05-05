import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../Redux/Actions/UserActions'

function Sidebars() {
    const [user, setUser] = useState(null)
    const state = useSelector(x => x.userLogin)
    const { loginInfo } = state
    useEffect(() => {
        setUser(loginInfo)
    }, [loginInfo])


    // logout
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutAction())
    }
    return (
        <div className='sidebars__ui__main ' style={{ position: "fixed", top: "55px" }}>
            <h5 className='mt-2 m-0 text-secondary'>Side bars</h5>
            <hr />
            <ul className="list-unstyled m-0 side__bar__user__memory">
                <li data-aos="fade-left">
                    {
                        user ?
                            <Link className='d-flex align-items-center text-decoration-none' to="/profile">
                                {
                                    user.avatar == "" ? <i style={{ fontSize: '28px' }} className="me-1 mb-1 text-success bi bi-person-circle"></i> :
                                        <img className='rounded-circle' style={{ height: "55px", padding: "10px" }} src={user && user.avatar} alt="avatar" />
                                }
                                <h5 className='m-0'>{user && user.name}</h5>
                            </Link> :
                            <Link className='d-flex align-items-center text-decoration-none' to="/login">
                                <i className="bi bi-person-plus"></i>
                                <h5 className='m-0 mt-1'>Login Now</h5>
                            </Link>
                    }

                </li>
                <li data-aos="fade-right">
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <i className="bi bi-play-btn-fill"></i>
                        <h5 className='m-0 mt-1'>Watch</h5>
                    </Link>
                </li>
                <li data-aos="fade-left">
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <i className="bi bi-calendar-event-fill"></i>
                        <h5 className='m-0 mt-1'>Events</h5>
                    </Link>
                </li>
                <li data-aos="fade-right">
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <i className="bi bi-people-fill"></i>
                        <h5 className='m-0 mt-1'>Friends</h5>
                    </Link>
                </li>
                <li data-aos="fade-left">
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <i className="bi bi-alarm"></i>
                        <h5 className='m-0 mt-1'>Memories</h5>
                    </Link>
                </li>
            </ul >


            {/* Side Bar */}
            <h5 className='my-2 m-0 text-secondary' > Shortcut</h5 >
            <hr />
            <ul className="list-unstyled m-0 side__bar__user__memory">
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded me-1" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Page name</h5>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded me-1" src="https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Group name</h5>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded me-1" src="https://i.pinimg.com/736x/f9/96/8d/f9968df268c7dab39bef20cff0a058cf.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Page name</h5>
                    </Link>
                </li>
            </ul>
            {
                user &&
                <div className="logout__action mt-4">
                    <button onClick={() => logout()} className="shadow-none btn btn-outline-danger d-flex">
                        Logout
                        <i className="ms-2 bi bi-box-arrow-in-right"></i>
                    </button>
                </div>
            }
        </div >
    )
}

export default Sidebars