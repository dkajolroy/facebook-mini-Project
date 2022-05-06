import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

function NavBars() {
    const state = useSelector(x => x.userLogin)
    const { loginInfo } = state
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(loginInfo)
    }, [loginInfo])

    return (
        <div className=' main__navbar position-fixed w-100 top-0' style={{ zIndex: "10", background: "#fff", height: "55px", boxShadow: "0px -4px 10px black" }}>
            <div className="container-fluid ">
                <div className="row ">

                    <div className="col-lg-3" >
                        <div className=" search__input d-flex justify-content-between position-relative">
                            <Link to="/"> <i style={{ fontSize: "35px" }} className="bi bi-facebook"></i></Link>
                            <div className="py-2 search__input position-relative">
                                <i className="bi bi-search position-absolute "></i>
                                <input style={{ background: 'rgb(241 241 241)' }} className='ps-5 shadow-none mx-2 form-control rounded-pill' type="search" name="search" placeholder='Search Facebook' />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 nav__link__icon">

                        <ul className="d-flex list-unstyled m-0 h-100 align-items-center  justify-content-around">
                            <li><NavLink to={"/"}><i className="bi bi-house-door-fill"></i></NavLink></li>
                            <li><NavLink to={"/video"}><i className="bi bi-play-btn"></i></NavLink></li>
                            <li><NavLink to={"/market"}><i className="bi bi-archive"></i></NavLink></li>
                            <li><NavLink to={"/friends"}><i className="bi bi-people-fill"></i></NavLink></li>
                            <li><NavLink to={"/history"}><i className="bi bi-columns"></i></NavLink></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 d-lg-block d-none ">

                        <div className="row">
                            <div className="col-6" data-aos="fade-down">
                                {
                                    user ?
                                        <Link to="/profile" className='d-flex align-items-center text-dark text-decoration-none'>
                                            {
                                                user.avatar == "" ? <i style={{ fontSize: '28px' }} className="me-1 mb-1 text-success bi bi-person-circle"></i> :
                                                    <img className='rounded-circle' style={{ height: "55px", padding: "10px" }} src={user && user.avatar} alt="avatar" />
                                            }
                                            <h6 className='m-0'>{user && user.name}</h6>
                                        </Link>
                                        :
                                        <Link className='d-flex py-2 my-1 align-items-center text-decoration-none' to="/login">
                                            <i style={{ fontSize: "20px" }} className="me-2 bi bi-person-plus"></i>
                                            <h6 className='m-0 mt-1'>Login Now</h6>
                                        </Link>
                                }

                            </div>
                            <div className="col-6 d-flex profile__notify__button_group justify-content-between">
                                <button className='btn shadow-none m-0 p-0'><i className="bi bi-plus-circle"></i></button>
                                <button className='btn shadow-none m-0 p-0'><i className="bi bi-chat-dots-fill"></i></button>
                                <button className='btn shadow-none m-0 p-0'><i className="bi bi-bell-fill"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBars