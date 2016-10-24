import axios from 'axios';

export const getAllUsers = (options) => {
    return dispatch => {
        return axios.get('/api/getUsers', options)
    };
}

export const createAUser = () => {
    return dispatch => {
        return axios.post('/api/users', options)
    };
}