import types from './types';
import axios from 'axios';

export function signUp(cred){
    return (dispatch) => {
        axios.post('http://api.reactprototypes.com/signup', cred).then( resp => {
            
            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_UP
            });
        });
    }
}

export function signIn(cred){
    return dispatch => {
        axios.post('http://api.reactprototypes.com/signin', cred).then( resp => {

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        }).catch(err => {
            console.error('ERROR:', err.response);
        })
    }
}

export function handleInputChange(event){
    const { name, value } = event.target;

    return {
        type: types.INPUT_CHANGE,
        name,
        value
    };
}

export function formError(error){
    return {
        type: types.FORM_ERROR,
        error
    }
}

export function signOut(){

    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    }
}

export function getQuote(){
    return async (dispatch) => {
        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        };

        try {
            const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

            dispatch({
                type: types.GET_QUOTE,
                payload: response.data.message
            });
        } catch(err){
            console.error('ERROR:', err.message);
        }
    }
}
