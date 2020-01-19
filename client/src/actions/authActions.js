import axios from 'axios';
import { returnErrors } from './errorActions';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: 'USER_LOADING' });

    axios.get('/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: 'USER_LOADED',
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: 'AUTH_ERROR' })
        })
}

// register user
export const signup = ({ name, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });

    axios.post('/users', body, config)
        .then(res => dispatch({ 
            type: 'SIGNUP_SUCCESS',
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'SIGNUP_FAIL'))
            dispatch({ type: 'SIGNUP_FAIL' });
        })
}

export const signin = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    axios.post('/auth', body, config)
        .then(res => dispatch({ 
            type: 'SIGNIN_SUCCESS',
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'SIGNIN_FAIL'))
            dispatch({ type: 'SIGNIN_FAIL' });
        })
}


export const signout =  () => {
    return { type: 'SIGNOUT_SUCCESS' }
}


// setup config/headers and token
export const tokenConfig = getState => {
    // get token from local storage
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}