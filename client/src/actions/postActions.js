import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getPosts = () => (dispatch, getState) => {
    dispatch(setPostsLoading());
    axios.get('/posts', tokenConfig(getState))
        .then(res => dispatch({
            type: 'GET_POSTS',
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const getPostsByUserId = userId => (dispatch, getState) => {
    dispatch(setPostsLoading());
    axios.get('/posts', { params: { userId: userId } }, tokenConfig(getState))
        .then(res => dispatch({
            type: 'GET_POSTS',
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addPost = post => (dispatch, getState) => {
    axios.post('/posts', post, tokenConfig(getState))
        .then(res => dispatch({
            type: 'ADD_POST',
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const setPostsLoading = () => {
    return {
        type: 'POSTS_LOADING'
    }
}