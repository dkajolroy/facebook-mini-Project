import React from 'react'
import { Link } from 'react-router-dom'

function Widget() {
    return (
        <div className='widget__ui__main position-fixed w-100 top-0 left-0' style={{ marginTop: "65px" }}>
            <h6 className="m-0 text-secondary">Sponsored</h6>
            <hr />
            <h6 className="m-0">New Food</h6>
            <img style={{ width: "18%", maxHeight: "100px" }} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-food-facebook-post-design-template-83e15051cb113cb3226071bfdaf37c7d_screen.jpg?ts=1567663191" alt="sponsor" />
            <hr />
            <h6 className="m-0 text-secondary">Birthday today</h6>
            <ul className="list-unstyled m-0 side__bar__user__memory">
                <li data-aos="fade-left" className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded-circle me-1" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
                <li data-aos="fade-right" className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded-circle me-1" src="https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
                <li data-aos="fade-left" className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="rounded-circle me-1" src="https://i.pinimg.com/736x/f9/96/8d/f9968df268c7dab39bef20cff0a058cf.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
            </ul>
            <hr />
            <h6 className="m-0 text-secondary">Connect with</h6>
            <ul className="list-unstyled m-0 side__bar__user__memory">
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="border border-3 border-success rounded-circle me-1" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="border border-3 border-success rounded-circle me-1" src="https://image.shutterstock.com/image-photo/picture-beautiful-view-birds-260nw-1836263689.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
                <li className='my-2'>
                    <Link className='d-flex align-items-center text-decoration-none' to="/">
                        <img className="border border-3 border-success rounded-circle me-1" src="https://i.pinimg.com/736x/f9/96/8d/f9968df268c7dab39bef20cff0a058cf.jpg" alt="user icon" style={{ width: "35px", height: "35px" }} />
                        <h5 className='m-0'>Friend name</h5>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Widget