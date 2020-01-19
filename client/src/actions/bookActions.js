import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getBooks = () => (dispatch, getState) => {
    dispatch(setBooksLoading());
    axios.get('/books', tokenConfig(getState))
        .then(res => dispatch({
            type: 'GET_BOOKS',
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const fetchBooks = () => dispatch => {
    axios.get('/books/kindle')
        .then(res => {
            dispatch(addBooks(res.data)); // Posting new books to database
        })
        .catch(err => console.log(err))
}

export const addBooks = books => (dispatch, getState) => {
    books.map(book => axios.post('/books', book, tokenConfig(getState))
        .then(res => dispatch({
            type: 'ADD_BOOKS',
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    )
};

export const deleteBook = id => (dispatch, getState) => {
    axios.delete(`/books/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: 'DELETE_BOOK', payload: id
            })
        })
}

export const setBooksLoading = () => {
    return {
        type: 'BOOKS_LOADING'
    }
}