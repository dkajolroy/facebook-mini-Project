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

