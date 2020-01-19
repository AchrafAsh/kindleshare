const initialState = {
    posts: [],
    loading: false // time to fetch data
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case 'POSTS_LOADING':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}