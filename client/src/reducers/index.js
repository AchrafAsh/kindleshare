import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';

export default combineReducers({
    book: bookReducer,
    error: errorReducer,
    auth: authReducer,
    post: postReducer
})