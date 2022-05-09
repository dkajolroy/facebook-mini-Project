import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { follow_un_followReducer, friendReqReducer, getFollowerReducer, getUn_followUserReducer, getUserInfoReducer, LoginReducer, unFriendReducer } from './Reducers/UserReducers'
import { RegisterReducer } from './Reducers/UserReducers'
import { createPostReducer, deletePostReducer, getAllPostReducer, getFriendMyPostReducer, getMyPostReducer, likePostReducer, updatePostReducer } from './Reducers/PostReducer'

const Reducer = combineReducers({
    userLogin: LoginReducer,
    userRegister: RegisterReducer,
    getMyPost: getMyPostReducer,
    postLike: likePostReducer,
    createPost: createPostReducer,
    deletePost: deletePostReducer,
    un_followingUser: getUn_followUserReducer,
    getFollower: getFollowerReducer,
    getOurPost: getFriendMyPostReducer,
    getAllPost: getAllPostReducer,
    updatePost: updatePostReducer,
    followUnFollow: follow_un_followReducer,
    friendReqReducer: friendReqReducer,
    unfriend: unFriendReducer,
    userInfo: getUserInfoReducer
})

//  Local Storage
const loginData = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"))

const InitialState = {
    userLogin: { loginInfo: loginData }
}

const store = legacy_createStore(Reducer, InitialState, composeWithDevTools(applyMiddleware(thunk)))
export default store