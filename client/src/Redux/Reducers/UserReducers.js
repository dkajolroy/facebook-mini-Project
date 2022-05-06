const initialState = {
    loginInfo: null,
    error: '',
    loading: false
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return { loading: true, loginInfo: null };
        case "LOGIN_SUCCESS":
            return { loading: false, loginInfo: action.payload };
        case "LOGIN_FAIL":
            return { loading: false, error: action.payload };
        case "LOGOUT":
            return { loading: false, loginInfo: null };
        default: return state;
    }
}

export const RegisterReducer = (state = { registerInfo: null }, action) => {
    switch (action.type) {
        case "REGISTER_REQUEST":
            return { loading: true, registerInfo: null };
        case "REGISTER_SUCCESS":
            return { loading: false, registerInfo: action.payload };
        case "REGISTER_FAIL":
            return { loading: false, error: action.payload }
        default: return state;
    }
}

export const getUn_followUserReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case "GET_UN_FOLLOW_USER_REQUEST":
            return { loading: true, user: [] };
        case "GET_UN_FOLLOW_USER_SUCCESS":
            return { loading: false, user: action.payload };
        case "GET_UN_FOLLOW_USER_FAIL":
            return { loading: false, user: action.payload };
        default: return state;
    }
}


export const getFollowerReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case "GET_FOLLOWER_REQ":
            return { loading: true, user: [] };
        case "GET_FOLLOWER_SUC":
            return { loading: false, user: action.payload };
        case "GET_FOLLOWER_FAIL":
            return { loading: false, user: action.payload };
        default: return state;
    }
}