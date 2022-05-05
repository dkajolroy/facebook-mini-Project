import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { LoginReducer } from './Reducers/UserReducers'
import { RegisterReducer } from './Reducers/UserReducers'
import { createPostReducer, deletePostReducer, getMyPostReducer, likePostReducer } from './Reducers/PostReducer'

const Reducer = combineReducers({
    userLogin: LoginReducer,
    userRegister: RegisterReducer,
    getMyPost: getMyPostReducer,
    postLike: likePostReducer,
    createPost: createPostReducer,
    deletePost: deletePostReducer
})

//  Local Storage
const loginData = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"))

const InitialState = {
    userLogin: { loginInfo: loginData }
}

const store = legacy_createStore(Reducer, InitialState, composeWithDevTools(applyMiddleware(thunk)))
export default store