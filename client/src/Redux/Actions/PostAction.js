import axios from "axios"
import toast from 'react-hot-toast';

export const createPostAction = (postData) => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()
    try {
        dispatch({ type: "CREATE_PORT_REQUEST" })
        const config = {
            headers: {
                "Content_Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.post("http://localhost:5000/post", postData, config)
        dispatch({
            type: "CREATE_PORT_SUCCESS",
            payload: data
        })
        toast.success(data.message)
    } catch (error) {
        dispatch({
            type: "CREATE_PORT_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
        toast.error(error.response && error.message ?
            error.response.data.message : error.message, {
            style: { background: "yellow" }
        })
    }
}

// Get My Post
export const getMyPostAction = () => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()

    try {
        dispatch({ type: "GET_POST_REQUEST" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.get("http://localhost:5000/post", config)

        dispatch({
            type: "GET_POST_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GET_POST_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
    }
}


// Like Post Action
export const likePostActions = (postId) => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()

    try {
        dispatch({ type: "LIKE_UNLIKE_REQUEST" })

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.put(`http://localhost:5000/post/like/${postId}`, { id: 22 }, config)

        dispatch({
            type: "LIKE_UNLIKE_SUCCESS",
            payload: data
        })
        toast.success(data.message)
    } catch (error) {
        toast.error(error.response && error.message ?
            error.response.data.message : error.message, {
            style: {
                background: 'yellow',
            }
        })
        dispatch({
            type: "LIKE_UNLIKE_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
    }
}

// Delete Post 
export const deletePostAction = (postId) => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()
    try {
        dispatch({ type: "DELETE__POST__REQUEST" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.delete(`http://localhost:5000/post/${postId}`, config)
        dispatch({
            type: "DELETE__POST__SUCCESS",
            payload: data
        })
        toast.success(data.message)
    } catch (error) {
        toast.error(error.response && error.message ?
            error.response.data.message : error.message)
        dispatch({
            type: "DELETE__POST__FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
    }
}