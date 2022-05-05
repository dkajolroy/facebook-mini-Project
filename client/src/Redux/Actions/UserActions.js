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