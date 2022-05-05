
// Create Post
export const createPostReducer = (state = { postInfo: [] }, action) => {
    switch (action.type) {
        case "CREATE_PORT_REQUEST":
            return { loading: true, postInfo: [] };
        case "CREATE_PORT_SUCCESS":
            return { loading: false, postInfo: action.payload };
        case "CREATE_PORT_FAIL":
            return { loading: false, error: action.payload };
        default: return state;
    }
}

// Get My post 
export const getMyPostReducer = (state = { myPost: [] }, action) => {
    switch (action.type) {
        case "GET_POST_REQUEST":
            return { loading: true, myPost: [] };
        case "GET_POST_SUCCESS":
            return { loading: false, myPost: action.payload };
        case "GET_POST_FAIL":
            return { loading: false, error: action.payload };
        default: return state;
    }
}



//Like Unlike Post Reducer
export const likePostReducer = (state = { reaction: null }, action) => {
    switch (action.type) {
        case "LIKE_UNLIKE_REQUEST":
            return { loading: true, reaction: null };
        case "LIKE_UNLIKE_SUCCESS":
            return { loading: false, reaction: action.payload };
        case "LIKE_UNLIKE_FAIL":
            return { loading: false, error: action.payload };
        default: return state;
    }
}


// DeletePost Reducer
export const deletePostReducer = (state = { postOperation: null }, action) => {
    switch (action.type) {
        case "DELETE__POST__REQUEST":
            return { loading: true, postOperation: null };
        case "DELETE__POST__SUCCESS":
            return { loading: false, postOperation: action.payload };
        case "DELETE__POST__FAIL":
            return { loading: false, error: action.payload }
        default: return state;
    }
}