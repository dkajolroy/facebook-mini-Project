import Swal from 'sweetalert2'
import axios from 'axios'

export const LoginAction = (info) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post("http://localhost:5000/login", info, config)
        localStorage.setItem("userInfo", JSON.stringify(data))
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data
        })

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
            width: "30%",
        })

    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: error.response && error.message ?
                error.response.data.message : error.message,
            showConfirmButton: false,
            timer: 2000,
            width: "30%",
        })
    }
}

// User Register POST
export const registerAction = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTER_REQUEST" })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post("http://localhost:5000/register", userData, config)
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data
        })
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2000,
            width: "30%",
        })
        setTimeout(() => { window.location.href = "/login" }, 400)
    } catch (error) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: error.response && error.message ?
                error.response.data.message : error.message,
            showConfirmButton: false,
            timer: 2000,
            width: "30%",
        })
    }
}

// Logout
export const logoutAction = () => (dispatch) => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("userInfo")
}


// Get Un-Following user 
// Private
// Get
export const getUn_followUserAction = () => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()
    try {
        dispatch({ type: "GET_UN_FOLLOW_USER_REQUEST" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.get("http://localhost:5000/user", config)
        dispatch({ type: "GET_UN_FOLLOW_USER_SUCCESS", payload: data })
    } catch (error) {
        dispatch({
            type: "GET_UN_FOLLOW_USER_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })

    }
}


// Get Un-Following user 
// Private
// Get
export const getFollowerAction = () => async (dispatch, state) => {
    const { userLogin: { loginInfo } } = state()
    try {
        dispatch({ type: "GET_FOLLOWER_REQ" })
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loginInfo.token}`
            }
        }
        const { data } = await axios.get("http://localhost:5000/follow-list", config)
        dispatch({ type: "GET_FOLLOWER_SUC", payload: data })
    } catch (error) {
        dispatch({
            type: "GET_FOLLOWER_FAIL",
            payload: error.response && error.message ?
                error.response.data.message : error.message
        })

    }
}