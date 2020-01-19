const initialState = {
    books: [],
    loading: false // time to fetch data
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        // case 'FETCH_BOOKS':
        //     return {
        //         ...state,
        //         books: action.payload
        //     };
        case 'ADD_BOOKS':
            return {
                ...state,
                books: [action.payload, ...state.books]
            };
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book._id !==action.payload)
            }
        case 'BOOKS_LOADING':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}