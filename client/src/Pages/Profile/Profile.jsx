import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavBars from '../../Components/NavBars/NavBars'
import { getMyPostAction } from '../../Redux/Actions/PostAction'
import Post from '../../Components/Posts/Post'
import CreatePost from '../../Components/Posts/CreatePost'
import { Toaster } from 'react-hot-toast'

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
                <div className="cover__avatar__ui text-center position-relative " >
                    <img style={{ height: "250px", width: "80%" }} src={loginInfo.cover || "http://9cover.com/images/ccovers/1362683987blue-sky-scenery.jpg"} alt="Cover" />
                    <img style={{ left: "42%", height: "200px", width: "200px" }} className="position-absolute border border-3 rounded-circle bottom-0" src={loginInfo && loginInfo.avatar} alt="avatar" />
                </div>
                <div className="user__info text-center">
                    <h2 className='my-3'>{loginInfo && loginInfo.name}</h2>
                    <blockquote>{loginInfo.bio}</blockquote>
                    <hr />
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