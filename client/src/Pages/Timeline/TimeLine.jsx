import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import Post from '../../Components/Posts/Post';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../Components/MainLayout/MainLayout';
import CreatePost from '../../Components/Posts/CreatePost';
import Stories from '../../Components/Stories/Stories';
import { getAllPostAction, getFriedMyPostAction } from '../../Redux/Actions/PostAction';

function TimeLine() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFriedMyPostAction())
        dispatch(getAllPostAction())
    }, [])
    const { post, loading } = useSelector(x => x.getOurPost)
    const state = useSelector(x => x.getAllPost)
    const { loginInfo } = useSelector(x => x.userLogin)

    return (
        <MainLayout>
            <div style={{ marginTop: "65px" }}>
                <Toaster />
                {/* <Stories /> */}
                <CreatePost />
            </div>
            <div className='all__post__'>
                {
                    loginInfo ?
                        post.map(x => (
                            <Post key={x._id} post={x} />
                        )) :
                        state.post.map(x => (
                            <Post key={x._id} post={x} />
                        ))
                }
            </div>
        </MainLayout>
    )
}

export default TimeLine