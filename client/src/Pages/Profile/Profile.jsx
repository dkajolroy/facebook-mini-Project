import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavBars from '../../Components/NavBars/NavBars'
import { getMyPostAction } from '../../Redux/Actions/PostAction'
import Post from '../../Components/Posts/Post'
import CreatePost from '../../Components/Posts/CreatePost'
import { Toaster } from 'react-hot-toast'
import ProfileNav from './ProfileNav'

function Profile() {

    // Navigate unauthorize
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"))
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user, navigate])
    useEffect(() => {
        dispatch(getMyPostAction())
    }, [dispatch])

    // User Info
    const { loginInfo } = useSelector(x => x.userLogin)
    const { myPost, loading } = useSelector(x => x.getMyPost)


    return (
        <div style={{ background: "#d5d5d5" }}>
            <NavBars />
            <div className="container profile__ui" style={{ marginTop: "55px" }}>
                <div className="cover__avatar__ui position-relative" >
                    <div className="cover text-center m-auto">
                        <img style={{ height: "250px", width: "100%" }} src={loginInfo.cover || "http://9cover.com/images/ccovers/1362683987blue-sky-scenery.jpg"} alt="Cover" />
                    </div>
                    <div style={{ left: "43%" }} className="avatar__ui__com position-absolute bottom-0 text-center">
                        <img style={{ height: "150px", width: "150px" }} className="border border-3 rounded-circle bottom-0" src={loginInfo && loginInfo.avatar} alt="avatar" />
                    </div>
                </div>
                <div className="user__info pt-4 shadow bg-light text-center">
                    <h2 className='m-0 pb-3'>{loginInfo && loginInfo.name}</h2>
                    <blockquote>{loginInfo.bio}</blockquote>
                    <hr />
                    {/* Nav Bar */}
                    <div className="container ">
                        <ProfileNav />
                    </div>
                </div>
            </div>


            <Toaster />


            <div className='col-lg-5 col-md-7 col-sm-9 m-auto'>
                <CreatePost />
            </div>
            {/* All Post */}
            <div className="my__post___all col-lg-5 col-md-7 col-sm-9 m-auto">
                {
                    myPost.map(x => (
                        <Post key={x._id} post={x} />
                    ))
                }
            </div>
        </div>
    )
}

export default Profile