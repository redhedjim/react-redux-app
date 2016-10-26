import axios from 'axios';

export const getAllUsers = (options) => {
    return dispatch => {
        return axios.get('/api/users', options)
    };
}

export const createUser = (options) => {
    return dispatch => {
        return axios.post('/api/signup', options);
        // return axios.get('/api/users', options);
    };
}